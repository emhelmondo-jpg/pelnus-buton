import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logittpnb.png" alt="Logo ITPPN" className="w-16 h-16 md:w-20 md:h-20 object-contain bg-white rounded-full p-1" />
              <div className="flex flex-col justify-center">
                <span className="font-bold text-lg leading-tight">ITPPN BUTON</span>
                <span className="text-[9px] font-semibold text-amber-500 tracking-wider uppercase">Institut Teknologi dan Pendidikan<br/>Pelita Nusantara</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Institut Teknologi dan Pendidikan Pelita Nusantara Buton berkomitmen untuk mencetak generasi unggul yang berdaya saing global dengan landasan iman dan taqwa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-amber-500 pb-2 inline-block">{t('footer.quick-links')}</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/pendaftaran" className="hover:text-amber-400 transition-colors">Penerimaan Mahasiswa Baru</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Sistem Informasi Akademik</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">E-Learning / LMS</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Perpustakaan Digital</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Jurnal Ilmiah</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Tracer Study</Link></li>
            </ul>
          </div>

          {/* Column 3: Program Studi */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-amber-500 pb-2 inline-block">{t('footer.programs')}</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/prodi/pendidikan-geografi" className="hover:text-amber-400 transition-colors">Prodi Pendidikan Geografi</Link></li>
              <li><Link href="/prodi/pendidikan-matematika" className="hover:text-amber-400 transition-colors">Prodi Pendidikan Matematika</Link></li>
              <li><Link href="/prodi/pendidikan-olahraga" className="hover:text-amber-400 transition-colors">Prodi Pendidikan Olahraga</Link></li>
              <li><Link href="/prodi/pgsd" className="hover:text-amber-400 transition-colors">Prodi Pendidikan Guru Sekolah Dasar</Link></li>
              <li><Link href="/prodi/informatika" className="hover:text-amber-400 transition-colors">Prodi Informatika</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-amber-500 pb-2 inline-block">{t('footer.contact')}</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Jl. Pendidikan No. 1, Pasarwajo, Kabupaten Buton, Sulawesi Tenggara, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0" />
                <span>info@itppn.ac.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
