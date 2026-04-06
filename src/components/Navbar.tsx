import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Phone, Mail, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

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
            <Link to="/pendaftaran" className="hover:text-amber-400 transition-colors">{t('nav.pmb')}</Link>
            <a href="#" className="hover:text-amber-400 transition-colors">{t('nav.siakad')}</a>
            <a href="#" className="hover:text-amber-400 transition-colors">{t('nav.elearning')}</a>
            <a href="#" className="hover:text-amber-400 transition-colors">{t('nav.webmail')}</a>
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
              <span className="font-bold text-xl leading-tight text-blue-900">{t('nav.institute-short')}</span>
              <span className="text-[10px] font-semibold text-amber-500 tracking-wider uppercase hidden sm:block">{t('nav.institute-name')}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-semibold text-sm text-blue-950">
            <Link to="/" className="hover:text-amber-500 transition-colors">{t('nav.home')}</Link>
            
            <div className="relative group">
              <button className="flex items-center hover:text-amber-500 transition-colors py-2">
                {t('nav.profile')} <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden border-t-2 border-amber-500">
                <Link to="/profil/sejarah" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">{t('nav.history')}</Link>
                <Link to="/profil/visi-misi" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">{t('nav.vision-mission')}</Link>
                <Link to="/profil/struktur-organisasi" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">{t('nav.organization-structure')}</Link>
                <Link to="/profil/peta-kampus" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors">{t('nav.campus-map')}</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center hover:text-amber-500 transition-colors py-2">
                {t('nav.academic')} <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden border-t-2 border-amber-500">
                <Link to="/prodi/pendidikan-geografi" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">{t('nav.education-geography')}</Link>
                <Link to="/prodi/pendidikan-matematika" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">{t('nav.education-mathematics')}</Link>
                <Link to="/prodi/pendidikan-olahraga" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">{t('nav.education-physical')}</Link>
                <Link to="/prodi/pgsd" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">{t('nav.education-elementary')}</Link>
                <Link to="/prodi/informatika" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100">{t('nav.informatics')}</Link>
                <Link to="#" className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors">{t('nav.academic-calendar')}</Link>
              </div>
            </div>

            <Link to="/pendaftaran" className="hover:text-amber-500 transition-colors">{t('nav.registration')}</Link>
            <Link to="#" className="hover:text-amber-500 transition-colors">{t('nav.news')}</Link>
            
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center text-blue-900 hover:text-amber-500 transition-colors">
                <Languages className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">{i18n.language === 'id' ? 'ID' : 'EN'}</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full right-0 w-32 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden border-t-2 border-amber-500">
                <button 
                  onClick={() => i18n.changeLanguage('id')}
                  className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-100 text-left"
                >
                  Bahasa Indonesia
                </button>
                <button 
                  onClick={() => i18n.changeLanguage('en')}
                  className="px-4 py-3 hover:bg-blue-50 hover:text-blue-800 transition-colors text-left"
                >
                  English
                </button>
              </div>
            </div>
            
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
            <Link to="/" className="px-6 py-4 border-b border-gray-100 font-semibold text-blue-900">{t('nav.home')}</Link>
            <div className="flex flex-col border-b border-gray-100">
              <span className="px-6 py-4 font-semibold text-blue-900">{t('nav.profile')}</span>
              <div className="flex flex-col bg-gray-50 px-8 py-2 space-y-3">
                <Link to="/profil/sejarah" className="text-gray-600 hover:text-amber-500">{t('nav.history')}</Link>
                <Link to="/profil/visi-misi" className="text-gray-600 hover:text-amber-500">{t('nav.vision-mission')}</Link>
                <Link to="/profil/struktur-organisasi" className="text-gray-600 hover:text-amber-500">{t('nav.organization-structure')}</Link>
                <Link to="/profil/peta-kampus" className="text-gray-600 hover:text-amber-500">{t('nav.campus-map')}</Link>
              </div>
            </div>
            <div className="flex flex-col border-b border-gray-100">
              <span className="px-6 py-4 font-semibold text-blue-900">{t('nav.academic')}</span>
              <div className="flex flex-col bg-gray-50 px-8 py-2 space-y-3">
                <Link to="/prodi/pendidikan-geografi" className="text-gray-600 hover:text-amber-500">{t('nav.education-geography')}</Link>
                <Link to="/prodi/pendidikan-matematika" className="text-gray-600 hover:text-amber-500">{t('nav.education-mathematics')}</Link>
                <Link to="/prodi/pendidikan-olahraga" className="text-gray-600 hover:text-amber-500">{t('nav.education-physical')}</Link>
                <Link to="/prodi/pgsd" className="text-gray-600 hover:text-amber-500">{t('nav.education-elementary')}</Link>
                <Link to="/prodi/informatika" className="text-gray-600 hover:text-amber-500">{t('nav.informatics')}</Link>
                <Link to="#" className="text-gray-600 hover:text-amber-500">{t('nav.academic-calendar')}</Link>
              </div>
            </div>
            <Link to="/pendaftaran" className="px-6 py-4 border-b border-gray-100 font-semibold text-blue-900">{t('nav.registration')}</Link>
            <Link to="#" className="px-6 py-4 border-b border-gray-100 font-semibold text-blue-900">{t('nav.news')}</Link>
            <div className="bg-blue-50 px-6 py-4 flex flex-col space-y-3">
              <Link to="/pendaftaran" className="font-medium text-blue-800">{t('nav.pmb')}</Link>
              <a href="#" className="font-medium text-blue-800">{t('nav.siakad')}</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
