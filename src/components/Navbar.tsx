import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full z-50 transition-all duration-300">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-blue-900 text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="flex items-center hover:text-amber-400 transition-colors"><Phone className="w-3 h-3 mr-1" /> +62 812-3456-7890</a>
            <a href="#" className="flex items-center hover:text-amber-400 transition-colors"><Mail className="w-3 h-3 mr-1" /> info@itppn.ac.id</a>
          </div>
          <div className="flex space-x-4 font-medium">
            <Link to="/pendaftaran" className="hover:text-amber-400 transition-colors">PMB</Link>
            <a href="#" className="hover:text-amber-400 transition-colors">SIAKAD</a>
            <a href="#" className="hover:text-amber-400 transition-colors">E-Learning</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Webmail</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? "shadow-md py-2 sticky top-0" : "py-4"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logittpnb.png" alt="Logo ITPPN" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-xl leading-tight text-blue-900">ITPPN BUTON</span>
              <span className="text-[10px] font-semibold text-amber-500 tracking-wider uppercase hidden sm:block">Institut Teknologi dan Pendidikan Pelita Nusantara</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-semibold text-sm text-blue-950">
            <Link to="/" className="hover:text-amber-500 transition-colors">BERANDA</Link>
            
            <div className="relative group">
              <button className="flex items-center hover:text-amber-500 transition-colors py-2">
                PROFIL <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden border-t-2 border-amber-500">
                <Link to="/profil/sejarah" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">Sejarah</Link>
                <Link to="/profil/visi-misi" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">Visi & Misi</Link>
                <Link to="/profil/struktur-organisasi" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">Struktur Organisasi</Link>
                <Link to="/profil/peta-kampus" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors">Peta Kampus</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center hover:text-amber-500 transition-colors py-2">
                AKADEMIK <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden border-t-2 border-amber-500">
                <Link to="/prodi/pendidikan-geografi" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">Prodi Pendidikan Geografi</Link>
                <Link to="/prodi/pendidikan-matematika" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">Prodi Pendidikan Matematika</Link>
                <Link to="/prodi/pendidikan-olahraga" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">Prodi Pendidikan Olahraga</Link>
                <Link to="/prodi/pgsd" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">Prodi Pendidikan Guru Sekolah Dasar</Link>
                <Link to="/prodi/informatika" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">Prodi Informatika</Link>
                <Link to="#" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors">Kalender Akademik</Link>
              </div>
            </div>

            <Link to="/pendaftaran" className="hover:text-amber-500 transition-colors">PENDAFTARAN</Link>
            <Link to="#" className="hover:text-amber-500 transition-colors">BERITA</Link>
            
            <button className="text-blue-900 hover:text-amber-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-blue-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col">
            <Link to="/" className="px-6 py-4 border-b border-gray-100 font-semibold text-blue-900">BERANDA</Link>
            <div className="flex flex-col border-b border-gray-100">
              <span className="px-6 py-4 font-semibold text-blue-900">PROFIL</span>
              <div className="flex flex-col bg-gray-50 px-8 py-2 space-y-3">
                <Link to="/profil/sejarah" className="text-gray-600 hover:text-amber-500">Sejarah</Link>
                <Link to="/profil/visi-misi" className="text-gray-600 hover:text-amber-500">Visi & Misi</Link>
                <Link to="/profil/struktur-organisasi" className="text-gray-600 hover:text-amber-500">Struktur Organisasi</Link>
                <Link to="/profil/peta-kampus" className="text-gray-600 hover:text-amber-500">Peta Kampus</Link>
              </div>
            </div>
            <div className="flex flex-col border-b border-gray-100">
              <span className="px-6 py-4 font-semibold text-blue-900">AKADEMIK</span>
              <div className="flex flex-col bg-gray-50 px-8 py-2 space-y-3">
                <Link to="/prodi/pendidikan-geografi" className="text-gray-600 hover:text-amber-500">Prodi Pendidikan Geografi</Link>
                <Link to="/prodi/pendidikan-matematika" className="text-gray-600 hover:text-amber-500">Prodi Pendidikan Matematika</Link>
                <Link to="/prodi/pendidikan-olahraga" className="text-gray-600 hover:text-amber-500">Prodi Pendidikan Olahraga</Link>
                <Link to="/prodi/pgsd" className="text-gray-600 hover:text-amber-500">Prodi Pendidikan Guru Sekolah Dasar</Link>
                <Link to="/prodi/informatika" className="text-gray-600 hover:text-amber-500">Prodi Informatika</Link>
                <Link to="#" className="text-gray-600 hover:text-amber-500">Kalender Akademik</Link>
              </div>
            </div>
            <Link to="/pendaftaran" className="px-6 py-4 border-b border-gray-100 font-semibold text-blue-900">PENDAFTARAN</Link>
            <Link to="#" className="px-6 py-4 border-b border-gray-100 font-semibold text-blue-900">BERITA</Link>
            <div className="bg-blue-50 px-6 py-4 flex flex-col space-y-3">
              <Link to="/pendaftaran" className="font-medium text-blue-800">PMB</Link>
              <a href="#" className="font-medium text-blue-800">SIAKAD</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
