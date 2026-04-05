import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pendaftaran from "./pages/Pendaftaran";
import Sejarah from "./pages/Sejarah";
import VisiMisi from "./pages/VisiMisi";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import PetaKampus from "./pages/PetaKampus";
import ProgramStudi from "./pages/ProgramStudi";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans text-slate-800">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pendaftaran" element={<Pendaftaran />} />
            <Route path="/profil/sejarah" element={<Sejarah />} />
            <Route path="/profil/visi-misi" element={<VisiMisi />} />
            <Route path="/profil/struktur-organisasi" element={<StrukturOrganisasi />} />
            <Route path="/profil/peta-kampus" element={<PetaKampus />} />
            <Route path="/prodi/:id" element={<ProgramStudi />} />
            {/* Add more routes here later */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
