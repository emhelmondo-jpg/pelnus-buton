import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch news from our backend API
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch news:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/backprof.png')" }}
        >
          <div className="absolute inset-0 bg-blue-950/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('home.hero-title')} <span className="text-amber-400">{t('home.welcome')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              {t('home.hero-subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/pendaftaran" className="bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold py-3 px-8 rounded-md transition-all transform hover:scale-105 flex items-center">
                {t('home.register-now')} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-md transition-all">
                {t('home.explore-programs')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats / Info Cards */}
      <section className="relative -mt-16 z-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-800 transform transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mb-6">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">{t('home.featured-programs')}</h3>
            <p className="text-gray-600 mb-4">{t('home.featured-programs-desc')}</p>
            <Link href="#" className="text-amber-500 font-semibold flex items-center hover:text-amber-600">
              {t('home.learn-more')} <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-amber-500 transform transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">{t('home.professional-lecturers')}</h3>
            <p className="text-gray-600 mb-4">{t('home.professional-lecturers-desc')}</p>
            <Link href="#" className="text-amber-500 font-semibold flex items-center hover:text-amber-600">
              {t('home.learn-more')} <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-800 transform transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mb-6">
              <Trophy className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">{t('home.modern-facilities')}</h3>
            <p className="text-gray-600 mb-4">{t('home.modern-facilities-desc')}</p>
            <Link href="#" className="text-amber-500 font-semibold flex items-center hover:text-amber-600">
              {t('home.learn-more')} <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sambutan Rektor */}
      <section className="py-20 bg-gray-50 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img 
                  src="/Rektor.png" 
                  alt="Rektor ITPPN" 
                  className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[500px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-1 bg-amber-500"></div>
                <h4 className="text-amber-500 font-bold uppercase tracking-wider">{t('home.rector-welcome')}</h4>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">{t('home.rector-title')}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {t('home.rector-quote')}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('home.rector-message')}
              </p>
              <div>
                <h5 className="text-xl font-bold text-blue-950">{t('home.rector-name')}</h5>
                <p className="text-gray-500">{t('home.rector-position')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Profil */}
      <section className="py-20 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-1 bg-amber-500"></div>
              <h4 className="text-amber-500 font-bold uppercase tracking-wider">{t('home.campus-profile')}</h4>
              <div className="w-12 h-1 bg-amber-500"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.campus-profile-title')}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t('home.campus-profile-desc')}
            </p>
          </div>
          
          <div className="max-w-md mx-auto bg-black rounded-xl shadow-2xl overflow-hidden border-4 border-blue-900">
            <div className="relative flex justify-center">
              <video 
                className="w-full h-auto max-h-[80vh] object-contain"
                controls
                poster="https://picsum.photos/seed/campus-video/720/1280"
              >
                <source src="/video-profil.mp4" type="video/mp4" />
                Browser Anda tidak mendukung tag video.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Berita & Pengumuman */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-1 bg-amber-500"></div>
                <h4 className="text-amber-500 font-bold uppercase tracking-wider">Informasi Kampus</h4>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Berita & Pengumuman Terbaru</h2>
            </div>
            <Link href="#" className="hidden md:flex items-center text-blue-800 font-semibold hover:text-amber-500 transition-colors">
              Lihat Semua Berita <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 group">
                  <div className="relative h-56 overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img 
                      src={item.image_url || `https://picsum.photos/seed/${item.id}/600/400`} 
                      alt={item.title} 
                      className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-blue-950 text-xs font-bold px-3 py-1 rounded">
                      Berita
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                      <Link href="#">{item.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Link href="#" className="text-blue-800 font-semibold flex items-center hover:text-amber-500 transition-colors">
                      Baca Selengkapnya <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-8 text-center md:hidden">
            <Link href="#" className="inline-flex items-center text-blue-800 font-semibold hover:text-amber-500 transition-colors">
              Lihat Semua Berita <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - PMB */}
      <section className="py-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <GraduationCap className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Penerimaan Mahasiswa Baru</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Wujudkan mimpimu bersama ITPPN Buton. Pendaftaran gelombang pertama telah dibuka.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pendaftaran" className="bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold py-3 px-8 rounded-md transition-all text-lg">
              Daftar Online
            </Link>
            <Link href="/pendaftaran" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-md transition-all text-lg">
              Informasi Pendaftaran
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
