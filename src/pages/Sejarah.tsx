import { motion } from "motion/react";

export default function Sejarah() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Sejarah & Makna Lambang</h1>
            <p className="text-lg max-w-2xl mx-auto">Mengenal lebih dekat perjalanan dan identitas Institut Teknologi dan Pendidikan Pelita Nusantara Buton.</p>
          </motion.div>
        </div>
      </section>

      {/* Sejarah Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-6 border-b-2 border-amber-500 pb-2 inline-block">Sejarah Pendirian</h2>
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-800 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Institut Teknologi dan Pendidikan Pelita Nusantara Buton (ITPPN Buton) didirikan oleh <strong>Yayasan Pendidikan Pelita Nusantara Buton</strong> pada tahun 2014. Pendirian ini berdasarkan Surat Keputusan Menteri Pendidikan dan Kebudayaan Republik Indonesia (Mendikbud RI) Nomor: <strong>376/E/O/2014</strong> tanggal 1 September 2014.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Hari jadi Institut Teknologi dan Pendidikan Pelita Nusantara Buton ditetapkan pada tanggal <strong>20 Desember</strong>.
              </p>
            </div>
          </div>

          {/* Makna Lambang */}
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-8 border-b-2 border-amber-500 pb-2 inline-block">Makna Lambang Institusi</h2>
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-24">
                <img src="/logittpnb.png" alt="Logo ITPPN Buton" className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl" />
              </div>
              <div className="w-full lg:w-2/3 space-y-6">
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Bentuk Bunga Berwarna Biru</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Keindahan dan pertumbuhan ilmu pengetahuan</li>
                    <li>Kedamaian, kebijaksanaan, dan ketenangan dalam berpikir</li>
                    <li>Perkembangan mahasiswa yang terus tumbuh melalui pendidikan</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Warna Biru & Emas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Warna Biru:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Kepercayaan</li>
                        <li>Profesionalitas</li>
                        <li>Integritas akademik</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Warna Emas:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Kemuliaan</li>
                        <li>Keunggulan</li>
                        <li>Prestasi</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Sinar Matahari Emas</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Cahaya ilmu pengetahuan</li>
                    <li>Harapan dan masa depan yang cerah</li>
                    <li>Semangat untuk menerangi masyarakat melalui pendidikan</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Benteng</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Keteguhan dan kekuatan institusi pendidikan</li>
                    <li>Simbol sejarah dan identitas daerah Buton</li>
                    <li>Tempat yang kokoh untuk membangun ilmu pengetahuan dan karakter</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Buku Terbuka & Api Pelita</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Buku Terbuka:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Sumber ilmu pengetahuan</li>
                        <li>Pendidikan yang terbuka bagi semua</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Api Pelita:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Semangat belajar</li>
                        <li>Pencerahan intelektual</li>
                        <li>Energi dalam mencari kebenaran ilmiah</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Peta Indonesia & Bintang</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Peta Indonesia:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Menunjukkan institusi berorientasi nasional</li>
                        <li>Pengabdian pendidikan untuk kemajuan bangsa</li>
                        <li>Semangat persatuan dan kebangsaan</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Bintang:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Ketuhanan Yang Maha Esa</li>
                        <li>Nilai spiritual dalam pendidikan</li>
                        <li>Petunjuk arah menuju kebenaran</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Tulisan Nama Institusi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Identitas resmi lembaga</li>
                    <li>Komitmen dalam pengembangan teknologi dan pendidikan</li>
                    <li>Dedikasi untuk mencerdaskan kehidupan bangsa</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
