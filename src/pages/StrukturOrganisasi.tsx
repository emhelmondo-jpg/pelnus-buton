import { motion } from "motion/react";
import { Users, Building, ShieldCheck, GraduationCap, BookOpen, Settings } from "lucide-react";

export default function StrukturOrganisasi() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/backprof.png')" }}
        >
          <div className="absolute inset-0 bg-blue-950/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Struktur Organisasi</h1>
            <p className="text-lg max-w-2xl mx-auto">Tata kelola dan susunan organisasi Institut Teknologi dan Pendidikan Pelita Nusantara Buton.</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-4 border-b-2 border-amber-500 pb-2 inline-block">Organ Utama Institusi</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
              Sesuai dengan Statuta, pengelolaan Institut Teknologi dan Pendidikan Pelita Nusantara Buton dijalankan oleh organ-organ yang memiliki fungsi, tugas, dan wewenang masing-masing untuk mencapai tujuan pendidikan yang berkualitas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Badan Penyelenggara */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-900 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Building className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Badan Penyelenggara</h3>
              <p className="text-gray-600 mb-4">
                <strong>Yayasan Pendidikan Pelita Nusantara Buton</strong>
              </p>
              <p className="text-sm text-gray-500">
                Merupakan badan hukum nirlaba yang menyelenggarakan dan mengawasi jalannya institusi pendidikan.
              </p>
            </div>

            {/* Penyusun Kebijakan */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-amber-500 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Penyusun Kebijakan</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li><strong>Senat Akademik</strong></li>
                <li><strong>Rektor</strong></li>
                <li><strong>Wakil Rektor</strong></li>
              </ul>
              <p className="text-sm text-gray-500">
                Menjalankan fungsi penetapan dan pertimbangan pelaksanaan kebijakan akademik dan non-akademik.
              </p>
            </div>

            {/* Pengawas & Penjaminan Mutu */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-600 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Pengawas & Penjaminan Mutu</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li><strong>Lembaga Penjaminan Mutu (LPM)</strong></li>
                <li><strong>Satuan Pengawas Internal (SPI)</strong></li>
              </ul>
              <p className="text-sm text-gray-500">
                Mengendalikan dan meningkatkan penyelenggaraan pendidikan tinggi secara berencana dan berkelanjutan.
              </p>
            </div>

            {/* Unsur Pelaksana Akademik */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Pelaksana & Evaluasi Akademik</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Biro Akademik</li>
                <li>Lembaga Penelitian & Pengabdian Masyarakat (LPPM)</li>
                <li>Dekan & Program Studi</li>
                <li>Laboratorium / Studio</li>
                <li>Kelompok Dosen</li>
              </ul>
            </div>

            {/* Unsur Pelaksana Administratif */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-red-500 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Pelaksana Administratif</h3>
              <p className="text-gray-600 mb-4">
                <strong>Tenaga Kependidikan / Biro</strong>
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Biro Administrasi Akademik</li>
                <li>Biro Kemahasiswaan, Alumni & Kerjasama</li>
                <li>Biro Administrasi Umum & Perlengkapan</li>
                <li>Biro Keuangan dan SDM</li>
              </ul>
            </div>

            {/* Unsur Penunjang */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-teal-500 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Unsur Penunjang</h3>
              <p className="text-gray-600 mb-4">
                <strong>Unit Pelaksana Teknis (UPT)</strong>
              </p>
              <p className="text-sm text-gray-500">
                Menyelenggarakan pelayanan teknis dan administratif untuk mendukung kegiatan akademik dan non-akademik.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
