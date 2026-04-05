import { motion } from "motion/react";
import { Target, Compass, Flag, CheckCircle } from "lucide-react";

export default function VisiMisi() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Visi, Misi & Tujuan</h1>
            <p className="text-lg max-w-2xl mx-auto">Arah dan tujuan strategis Institut Teknologi dan Pendidikan Pelita Nusantara Buton.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl space-y-20">
          
          {/* Visi */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-amber-500">
            <div className="p-10 md:p-16 text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="w-10 h-10 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Visi</h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic">
                "Menjadi perguruan tinggi yang unggul dan berdaya saing global dalam inovasi pendidikan dan teknologi yang berbasis penelitian, teknologi digital dan kewirausahaan pada tahun 2040"
              </p>
            </div>
          </div>

          {/* Misi */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                <Flag className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-950">Misi</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-amber-500 font-bold text-4xl mb-4 opacity-50">01</div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Menyelenggarakan pendidikan, pelatihan, pembelajaran, dan pembimbingan yang inovatif, unggul, dan berdaya saing global berbasis penelitian, teknologi digital dan kewirausahaan yang bersifat adaptif.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-amber-500 font-bold text-4xl mb-4 opacity-50">02</div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Menyelenggarakan penelitian yang inovatif unggul dan berdaya saing global dalam inovasi pendidikan yang berbasis teknologi digital dan kewirausahaan.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-amber-500 font-bold text-4xl mb-4 opacity-50">03</div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Menyelenggarakan pengabdian yang inovatif unggul dan berdaya saing global dalam inovasi pendidikan dan teknologi yang berbasis penelitian, teknologi digital dan kewirausahaan.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-amber-500 font-bold text-4xl mb-4 opacity-50">04</div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Mengembangkan kemitraan untuk mendukung keunggulan, daya saing global, inovasi dalam pendidikan dan teknologi yang berbasis penelitian, teknologi digital dan kewirausahaan.
                </p>
              </div>
            </div>
          </div>

          {/* Tujuan */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-950" />
              </div>
              <h2 className="text-3xl font-bold text-blue-950">Tujuan</h2>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                <li className="p-6 md:p-8 flex items-start hover:bg-gray-50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-blue-800 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">
                    Menghasilkan lulusan yang inovatif, unggul dan berdaya saing global dalam inovasi pendidikan dan teknologi yang berbasis penelitian, teknologi digital dan kewirausahaan.
                  </p>
                </li>
                <li className="p-6 md:p-8 flex items-start hover:bg-gray-50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-blue-800 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">
                    Menghasilkan penelitian yang inovatif, unggul dan berdaya saing global dalam inovasi pendidikan dan teknologi yang berbasis teknologi digital dan kewirausahaan.
                  </p>
                </li>
                <li className="p-6 md:p-8 flex items-start hover:bg-gray-50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-blue-800 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">
                    Menghasilkan dan menyebarluaskan karya inovasi pendidikan yang berbasis penelitian, teknologi dan kewirausahaan melalui kegiatan pengabdian kepada masyarakat yang berorientasi pada pemberdayaan masyarakat.
                  </p>
                </li>
                <li className="p-6 md:p-8 flex items-start hover:bg-gray-50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-blue-800 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">
                    Mewujudkan kerjasama untuk mendukung pengembangan institusi yang unggul dan mendapat kepercayaan luas dari masyarakat tingkat nasional maupun internasional.
                  </p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
