import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, CheckCircle, Info } from "lucide-react";

export default function Pendaftaran() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    phone: "",
    asalSekolah: "",
    prodi1: "",
    prodi2: ""
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Pendaftaran berhasil disubmit! (Ini adalah demo)");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/pensma.png')" }}
        >
          <div className="absolute inset-0 bg-blue-950/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Penerimaan Mahasiswa Baru</h1>
            <p className="text-lg max-w-2xl mx-auto">Bergabunglah bersama Institut Teknologi dan Pendidikan Pelita Nusantara Buton dan wujudkan masa depan gemilang Anda.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-500">
                <h3 className="text-xl font-bold text-blue-950 mb-4 flex items-center"><Calendar className="mr-2 text-amber-500"/> Jadwal Pendaftaran</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between border-b pb-2"><span>Gelombang 1</span> <span className="font-semibold">Jan - Mar 2026</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Gelombang 2</span> <span className="font-semibold">Apr - Jun 2026</span></li>
                  <li className="flex justify-between"><span>Gelombang 3</span> <span className="font-semibold">Jul - Agu 2026</span></li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-800">
                <h3 className="text-xl font-bold text-blue-950 mb-4 flex items-center"><CheckCircle className="mr-2 text-blue-800"/> Persyaratan</h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>Lulusan SMA/SMK/MA sederajat</li>
                  <li>Fotokopi Ijazah dilegalisir</li>
                  <li>Fotokopi KTP & KK</li>
                  <li>Pas foto berwarna 3x4 (4 lembar)</li>
                  <li>Membayar biaya pendaftaran</li>
                </ul>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-blue-950 mb-6 border-b pb-4">Formulir Pendaftaran Online</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Nama */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap *</label>
                    <div className="flex items-center">
                      <input required type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder="Sesuai Ijazah" />
                      <div className="ml-2 text-gray-400 cursor-help" title="Masukkan nama lengkap Anda sesuai dengan ijazah terakhir"><Info className="w-5 h-5"/></div>
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Aktif *</label>
                      <div className="flex items-center">
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder="email@contoh.com" />
                        <div className="ml-2 text-gray-400 cursor-help" title="Email yang aktif untuk menerima informasi pendaftaran"><Info className="w-5 h-5"/></div>
                      </div>
                    </div>
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-700 mb-1">No. WhatsApp *</label>
                      <div className="flex items-center">
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder="0812xxxx" />
                        <div className="ml-2 text-gray-400 cursor-help" title="Nomor WhatsApp yang aktif untuk komunikasi panitia"><Info className="w-5 h-5"/></div>
                      </div>
                    </div>
                  </div>

                  {/* Asal Sekolah */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Asal Sekolah *</label>
                    <div className="flex items-center">
                      <input required type="text" name="asalSekolah" value={formData.asalSekolah} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder="Nama SMA/SMK/MA" />
                      <div className="ml-2 text-gray-400 cursor-help" title="Nama sekolah asal tempat Anda lulus"><Info className="w-5 h-5"/></div>
                    </div>
                  </div>

                  {/* Program Studi */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pilihan Prodi 1 *</label>
                      <div className="flex items-center">
                        <select required name="prodi1" value={formData.prodi1} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white">
                          <option value="">-- Pilih Program Studi --</option>
                          <option value="Pendidikan Geografi">Prodi Pendidikan Geografi</option>
                          <option value="Pendidikan Matematika">Prodi Pendidikan Matematika</option>
                          <option value="Pendidikan Olahraga">Prodi Pendidikan Olahraga</option>
                          <option value="PGSD">Prodi Pendidikan Guru Sekolah Dasar</option>
                          <option value="Informatika">Prodi Informatika</option>
                        </select>
                        <div className="ml-2 text-gray-400 cursor-help" title="Pilihan utama program studi yang ingin Anda masuki"><Info className="w-5 h-5"/></div>
                      </div>
                    </div>
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pilihan Prodi 2</label>
                      <div className="flex items-center">
                        <select name="prodi2" value={formData.prodi2} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white">
                          <option value="">-- Pilih Program Studi --</option>
                          <option value="Pendidikan Geografi">Prodi Pendidikan Geografi</option>
                          <option value="Pendidikan Matematika">Prodi Pendidikan Matematika</option>
                          <option value="Pendidikan Olahraga">Prodi Pendidikan Olahraga</option>
                          <option value="PGSD">Prodi Pendidikan Guru Sekolah Dasar</option>
                          <option value="Informatika">Prodi Informatika</option>
                        </select>
                        <div className="ml-2 text-gray-400 cursor-help" title="Pilihan cadangan jika tidak lolos di pilihan pertama"><Info className="w-5 h-5"/></div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md transition-colors shadow-lg">
                      Kirim Pendaftaran
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
