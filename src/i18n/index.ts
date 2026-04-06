import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip: move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      // Navbar
      "nav.home": "HOME",
      "nav.profile": "PROFILE",
      "nav.academic": "ACADEMIC",
      "nav.registration": "REGISTRATION",
      "nav.news": "NEWS",
      "nav.history": "History",
      "nav.vision-mission": "Vision & Mission",
      "nav.organization-structure": "Organization Structure",
      "nav.campus-map": "Campus Map",
      "nav.education-geography": "Geography Education Program",
      "nav.education-mathematics": "Mathematics Education Program",
      "nav.education-physical": "Physical Education Program",
      "nav.education-elementary": "Elementary School Teacher Education Program",
      "nav.informatics": "Informatics Program",
      "nav.academic-calendar": "Academic Calendar",
      "nav.pmb": "PMB",
      "nav.siakad": "SIAKAD",
      "nav.elearning": "E-Learning",
      "nav.webmail": "Webmail",
      "nav.phone": "Phone",
      "nav.email": "Email",
      "nav.institute-name": "Pelita Nusantara Technology and Education Institute",
      "nav.institute-short": "ITPPN BUTON",

      // Footer
      "footer.about": "About ITPPN",
      "footer.contact": "Contact",
      "footer.quick-links": "Quick Links",
      "footer.follow-us": "Follow Us",
      "footer.address": "Address",
      "footer.phone": "Phone",
      "footer.email": "Email",
      "footer.copyright": "© {{year}} Institut Teknologi dan Pendidikan Pelita Nusantara Buton. All rights reserved.",
      "footer.programs": "Programs",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms & Conditions",

      // Home page
      "home.welcome": "Welcome to ITPPN Buton",
      "home.subtitle": "Leading in Technology and Education",
      "home.explore": "Explore Our Programs",
      "home.about-title": "About Us",
      "home.about-content": "Institut Teknologi dan Pendidikan Pelita Nusantara (ITPPN) Buton is committed to providing quality education and technology development in the region.",
      "home.programs-title": "Our Programs",
      "home.news-title": "Latest News",
      "home.hero-title": "Building an Excellent and Character Generation",
      "home.hero-subtitle": "Institut Teknologi dan Pendidikan Pelita Nusantara Buton is present to print future innovators with quality education standards through the Vision \"To become a college that excels and is globally competitive in educational and technological innovation based on research, digital technology and entrepreneurship by 2040\"",
      "home.register-now": "Register Now",
      "home.explore-programs": "Explore Study Programs",
      "home.featured-programs": "Featured Programs",
      "home.featured-programs-desc": "Adaptive curriculum adjusted to current and future industry needs.",
      "home.professional-lecturers": "Professional Lecturers",
      "home.professional-lecturers-desc": "Supported by experienced educators and expert practitioners in their fields.",
      "home.modern-facilities": "Modern Facilities",
      "home.modern-facilities-desc": "Laboratories, digital libraries, and comfortable classrooms to support learning.",
      "home.learn-more": "Learn More",
      "home.rector-welcome": "Rector's Welcome",
      "home.rector-title": "Welcome to ITPPN Buton",
      "home.rector-quote": "\"Education is the most powerful weapon you can use to change the world. At Institut Teknologi dan Pendidikan Pelita Nusantara Buton, we are committed to not only transferring knowledge, but also shaping character, instilling integrity values, and encouraging innovation.\"",
      "home.rector-message": "We invite the best sons and daughters of the nation to join us, develop their potential, and prepare to become future leaders who bring positive change for society, nation, and country.",
      "home.rector-name": "Armin, S.E., M.Si.",
      "home.rector-position": "Rector of ITPPN Buton",
      "home.campus-profile": "Campus Profile",
      "home.campus-profile-title": "Getting to Know ITPPN Buton More Closely",
      "home.campus-profile-desc": "Watch our profile video to see the facilities, academic activities, and campus environment that support the teaching and learning process.",

      // Other pages will be added as needed
    }
  },
  id: {
    translation: {
      // Navbar
      "nav.home": "BERANDA",
      "nav.profile": "PROFIL",
      "nav.academic": "AKADEMIK",
      "nav.registration": "PENDAFTARAN",
      "nav.news": "BERITA",
      "nav.history": "Sejarah",
      "nav.vision-mission": "Visi & Misi",
      "nav.organization-structure": "Struktur Organisasi",
      "nav.campus-map": "Peta Kampus",
      "nav.education-geography": "Prodi Pendidikan Geografi",
      "nav.education-mathematics": "Prodi Pendidikan Matematika",
      "nav.education-physical": "Prodi Pendidikan Olahraga",
      "nav.education-elementary": "Prodi Pendidikan Guru Sekolah Dasar",
      "nav.informatics": "Prodi Informatika",
      "nav.academic-calendar": "Kalender Akademik",
      "nav.pmb": "PMB",
      "nav.siakad": "SIAKAD",
      "nav.elearning": "E-Learning",
      "nav.webmail": "Webmail",
      "nav.phone": "Telepon",
      "nav.email": "Email",
      "nav.institute-name": "Institut Teknologi dan Pendidikan Pelita Nusantara",
      "nav.institute-short": "ITPPN BUTON",

      // Footer
      "footer.about": "Tentang ITPPN",
      "footer.contact": "Kontak",
      "footer.quick-links": "Tautan Cepat",
      "footer.follow-us": "Ikuti Kami",
      "footer.address": "Alamat",
      "footer.phone": "Telepon",
      "footer.email": "Email",
      "footer.copyright": "© {{year}} Institut Teknologi dan Pendidikan Pelita Nusantara Buton. Seluruh hak cipta.",
      "footer.programs": "Program Studi",
      "footer.privacy": "Kebijakan Privasi",
      "footer.terms": "Syarat & Ketentuan",

      // Home page
      "home.welcome": "Selamat Datang di ITPPN Buton",
      "home.subtitle": "Terdepan dalam Teknologi dan Pendidikan",
      "home.explore": "Jelajahi Program Kami",
      "home.about-title": "Tentang Kami",
      "home.about-content": "Institut Teknologi dan Pendidikan Pelita Nusantara (ITPPN) Buton berkomitmen untuk memberikan pendidikan berkualitas dan pengembangan teknologi di wilayah ini.",
      "home.programs-title": "Program Kami",
      "home.news-title": "Berita Terbaru",
      "home.hero-title": "Membangun Generasi Unggul & Berkarakter",
      "home.hero-subtitle": "Institut Teknologi dan Pendidikan Pelita Nusantara Buton hadir untuk mencetak inovator masa depan dengan standar pendidikan berkualitas melalui Visi \"Menjadi perguruan tinggi yang unggul dan berdaya saing global dalam inovasi pendidikan dan teknologi yang berbasis penelitian, teknologi digital dan kewirausahaan pada tahun 2040\"",
      "home.register-now": "Daftar Sekarang",
      "home.explore-programs": "Jelajahi Program Studi",
      "home.featured-programs": "Program Studi Unggulan",
      "home.featured-programs-desc": "Kurikulum adaptif yang disesuaikan dengan kebutuhan industri masa kini dan masa depan.",
      "home.professional-lecturers": "Dosen Profesional",
      "home.professional-lecturers-desc": "Didukung oleh tenaga pendidik berpengalaman dan praktisi ahli di bidangnya.",
      "home.modern-facilities": "Fasilitas Modern",
      "home.modern-facilities-desc": "Laboratorium, perpustakaan digital, dan ruang kelas yang nyaman untuk mendukung pembelajaran.",
      "home.learn-more": "Selengkapnya",
      "home.rector-welcome": "Rector's Welcome",
      "home.rector-title": "Welcome to ITPPN Buton",
      "home.rector-quote": "\"Education is the most powerful weapon you can use to change the world. At Institut Teknologi dan Pendidikan Pelita Nusantara Buton, we are committed to not only transferring knowledge, but also shaping character, instilling integrity values, and encouraging innovation.\"",
      "home.rector-message": "We invite the best sons and daughters of the nation to join us, develop their potential, and prepare to become future leaders who bring positive change for society, nation, and country.",
      "home.rector-name": "Armin, S.E., M.Si.",
      "home.rector-position": "Rector of ITPPN Buton",
      "home.campus-profile": "Campus Profile",
      "home.campus-profile-title": "Getting to Know ITPPN Buton More Closely",
      "home.campus-profile-desc": "Watch our profile video to see the facilities, academic activities, and campus environment that support the teaching and learning process.",

      // Language switcher
      "lang.indonesian": "Bahasa Indonesia",
      "lang.english": "English",
    }
  }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'id', // language to use, more info here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

export default i18n;