import express from "express";
// import { createServer as createViteServer } from "vite";
import cors from "cors";
import { Pool } from "pg";
import * as path from "path";

async function startServer() {
  const app = express();
  const PORT = 3001; // Changed to 3001 to avoid conflict with Next.js on 3000

  app.use(cors());
  app.use(express.json());

  // PostgreSQL Pool Setup
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // Add ssl requirement if connecting to remote DBs like Supabase/Neon, usually required
    ssl: process.env.DATABASE_URL && process.env.DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false }
  });

  // API Routes
  app.get("/api/health", async (req, res) => {
    try {
      if (!process.env.DATABASE_URL) {
        return res.json({ status: "ok", db: "unconfigured (missing DATABASE_URL)" });
      }
      const result = await pool.query("SELECT NOW()");
      res.json({ status: "ok", db: "connected", time: result.rows[0].now });
    } catch (err: any) {
      res.status(500).json({ status: "error", message: err.message });
    }
  });

  // Mock API for News (Will use DB if configured)
  app.get("/api/news", async (req, res) => {
    if (process.env.DATABASE_URL) {
      try {
        // Create table if not exists for demo purposes
        await pool.query(`
          CREATE TABLE IF NOT EXISTS news (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            excerpt TEXT,
            image_url VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `);
        const result = await pool.query("SELECT * FROM news ORDER BY created_at DESC LIMIT 6");
        // If empty, return mock data
        if (result.rows.length === 0) {
          return res.json(getMockNews());
        }
        return res.json(result.rows);
      } catch (err) {
        console.error("DB Error:", err);
        return res.json(getMockNews()); // Fallback to mock on error
      }
    }
    res.json(getMockNews());
  });

  // Serve static files from public directory
  app.use(express.static(path.join(process.cwd(), 'public')));

  // Note: Vite middleware removed since we're using Next.js now
  // If you need Vite for development, uncomment the following:
  /*
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
  */

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running on http://localhost:${PORT}`);
    console.log(`Note: Next.js is running on port 3000`);
  });
}

function getMockNews() {
  return [
    { id: 1, title: "Penerimaan Mahasiswa Baru Tahun Ajaran 2026/2027", excerpt: "ITPPN Buton membuka pendaftaran mahasiswa baru gelombang pertama.", image_url: "/pensma.png", created_at: new Date().toISOString() },
    { id: 2, title: "Seminar Nasional Teknologi Informasi", excerpt: "Prodi Informatika menyelenggarakan seminar nasional dengan tema AI dan Masa Depan.", image_url: "https://picsum.photos/seed/seminar/600/400", created_at: new Date().toISOString() },
    { id: 3, title: "Kerjasama Internasional dengan Universitas Terkemuka", excerpt: "ITPPN menjalin kerjasama untuk program pertukaran pelajar dan penelitian bersama.", image_url: "https://picsum.photos/seed/meeting/600/400", created_at: new Date().toISOString() },
  ];
}

startServer();
