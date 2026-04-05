import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import { BookOpen, Target, Award, ArrowRight, Users, Monitor, Map, Calculator, Activity } from "lucide-react";

const prodiData: Record<string, any> = {
  "pendidikan-geografi": {
    title: "Pendidikan Geografi",
    icon: Map,
    description: "Mencetak pendidik dan tenaga profesional di bidang geografi yang menguasai ilmu kebumian, pemetaan, dan lingkungan hidup.",
    vision: "Menjadi program studi unggul dalam inovasi pembelajaran geografi dan riset spasial yang berwawasan lingkungan.",
    competencies: [
      "Penguasaan Sistem Informasi Geografis (SIG) dan Penginderaan Jauh",
      "Kemampuan analisis fenomena geosfer dan mitigasi bencana",
      "Metodologi pengajaran geografi modern dan interaktif",
      "Perencanaan dan pengembangan wilayah"
    ],
    activities: [
      { url: "/pemetaanlapangan.png", caption: "Praktik Pemetaan Lapangan" },
      { url: "/parktikumgis.png", caption: "Analisis Data Spasial" },
      { url: "/analisisspasial.png", caption: "Observasi Lingkungan" }
    ]
  },
  "pendidikan-matematika": {
    title: "Pendidikan Matematika",
    icon: Calculator,
    description: "Mengembangkan pendidik matematika yang inovatif, analitis, dan mampu mengintegrasikan teknologi dalam pembelajaran.",
    vision: "Menjadi pusat keunggulan dalam pendidikan matematika yang menghasilkan lulusan berdaya saing global dan berjiwa technopreneur.",
    competencies: [
      "Penguasaan konsep dan struktur matematika tingkat lanjut",
      "Pengembangan media dan alat peraga matematika digital",
      "Kemampuan berpikir logis, analitis, dan pemecahan masalah",
      "Desain kurikulum dan evaluasi pembelajaran matematika"
    ],
    activities: [
      { url: "https://picsum.photos/seed/mathclass/600/400", caption: "Diskusi Pemecahan Masalah" },
      { url: "https://picsum.photos/seed/coding/600/400", caption: "Pengembangan Media Digital" },
      { url: "https://picsum.photos/seed/teaching/600/400", caption: "Praktik Mengajar Mikro" }
    ]
  },
  "pendidikan-olahraga": {
    title: "Pendidikan Olahraga",
    icon: Activity,
    description: "Mencetak guru pendidikan jasmani, pelatih olahraga, dan praktisi kesehatan yang profesional dan berkarakter.",
    vision: "Menjadi pelopor dalam inovasi pendidikan jasmani, keolahragaan, dan kesehatan berbasis ilmu pengetahuan terapan.",
    competencies: [
      "Penguasaan teknik dasar dan lanjutan berbagai cabang olahraga",
      "Ilmu kepelatihan, anatomi, dan fisiologi olahraga",
      "Manajemen penyelenggaraan acara olahraga (Sport Event Management)",
      "Pendidikan kesehatan dan kebugaran masyarakat"
    ],
    activities: [
      { url: "https://picsum.photos/seed/stadium/600/400", caption: "Praktik Atletik Lapangan" },
      { url: "https://picsum.photos/seed/gym/600/400", caption: "Latihan Kebugaran Fisik" },
      { url: "https://picsum.photos/seed/team/600/400", caption: "Manajemen Tim Olahraga" }
    ]
  },
  "pgsd": {
    title: "Pendidikan Guru Sekolah Dasar",
    icon: Users,
    description: "Mempersiapkan guru kelas SD yang kreatif, inspiratif, dan memahami perkembangan psikologi anak secara komprehensif.",
    vision: "Menghasilkan pendidik tingkat dasar yang unggul dalam pedagogik, berkarakter, dan adaptif terhadap perkembangan teknologi pendidikan.",
    competencies: [
      "Penguasaan materi lima mata pelajaran pokok SD",
      "Pemahaman psikologi perkembangan dan karakter anak",
      "Pengembangan strategi pembelajaran tematik terpadu",
      "Keterampilan seni, budaya, dan kepramukaan"
    ],
    activities: [
      { url: "https://picsum.photos/seed/children/600/400", caption: "Pembelajaran Interaktif" },
      { url: "https://picsum.photos/seed/artclass/600/400", caption: "Praktik Seni dan Kreativitas" },
      { url: "https://picsum.photos/seed/school/600/400", caption: "Kegiatan Ekstrakurikuler" }
    ]
  },
  "informatika": {
    title: "Informatika",
    icon: Monitor,
    description: "Menghasilkan sarjana komputer yang ahli dalam rekayasa perangkat lunak, kecerdasan buatan, dan jaringan komputer.",
    vision: "Menjadi program studi terkemuka dalam riset dan pengembangan teknologi informasi yang mendukung transformasi digital.",
    competencies: [
      "Rekayasa perangkat lunak (Software Engineering) & Web Development",
      "Kecerdasan Buatan (Artificial Intelligence) dan Data Science",
      "Keamanan Siber (Cyber Security) dan Jaringan Komputer",
      "Technopreneurship dan inovasi digital"
    ],
    activities: [
      { url: "https://picsum.photos/seed/programming/600/400", caption: "Praktikum Pemrograman" },
      { url: "https://picsum.photos/seed/network/600/400", caption: "Konfigurasi Jaringan" },
      { url: "https://picsum.photos/seed/startup/600/400", caption: "Pengembangan Startup Digital" }
    ]
  }
};

export default function ProgramStudi() {
  const { id } = useParams();
  const prodi = prodiData[id as string];

  if (!prodi) {
    return <Navigate to="/" />;
  }

  const Icon = prodi.icon;

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
            <div className="flex justify-center mb-4">
              <div className="bg-amber-500/20 p-4 rounded-full backdrop-blur-sm border border-amber-500/30">
                <Icon className="w-12 h-12 text-amber-400" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-amber-400">Program Studi</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{prodi.title}</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">{prodi.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4 flex items-center border-b-2 border-amber-500 pb-2 inline-flex">
                  <Target className="w-6 h-6 mr-2 text-amber-500" /> Visi Program Studi
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed italic bg-blue-50 p-6 rounded-r-xl border-l-4 border-blue-800">
                  "{prodi.vision}"
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-950 mb-6 flex items-center border-b-2 border-amber-500 pb-2 inline-flex">
                  <Award className="w-6 h-6 mr-2 text-amber-500" /> Kompetensi Lulusan
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prodi.competencies.map((comp: string, idx: number) => (
                    <div key={idx} className="bg-white border border-gray-100 shadow-sm p-4 rounded-lg flex items-start hover:shadow-md transition-shadow">
                      <div className="bg-amber-100 p-2 rounded-md mr-3 flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-amber-600" />
                      </div>
                      <p className="text-gray-700">{comp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: CTA */}
            <div className="lg:col-span-1">
              <div className="bg-blue-950 rounded-xl p-8 text-white shadow-xl sticky top-24">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">Tertarik Bergabung?</h3>
                <p className="text-gray-300 mb-6">
                  Jadilah bagian dari <strong>{prodi.title}</strong> dan wujudkan masa depan gemilang Anda bersama ITPPN Buton.
                </p>
                <Link to="/pendaftaran" className="w-full bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center">
                  Daftar Sekarang <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Activities Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Galeri Aktivitas Mahasiswa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Potret kegiatan akademik dan non-akademik mahasiswa {prodi.title}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prodi.activities.map((act: any, idx: number) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-md group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={act.url} 
                    alt={act.caption} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-6">{act.caption}</p>
                  </div>
                </div>
                <div className="p-4 text-center border-t border-gray-100">
                  <p className="font-medium text-blue-900">{act.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
