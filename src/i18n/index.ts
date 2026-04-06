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
      "footer.name": "ITPPN BUTON",
      "footer.institute-fullname": "Institut Teknologi dan Pendidikan<br/>Pelita Nusantara",
      "footer.about-text": "Institut Teknologi dan Pendidikan Pelita Nusantara Buton is committed to developing generations of excellence with a foundation of faith and piety to compete globally.",
      "footer.pmb": "New Student Admission",
      "footer.siakad": "Academic Information System",
      "footer.elearning": "E-Learning / LMS",
      "footer.digital-library": "Digital Library",
      "footer.journal": "Scientific Journal",
      "footer.tracer-study": "Tracer Study",
      "footer.address-text": "Jl. Pendidikan No. 1, Pasarwajo, Buton District, Southeast Sulawesi, Indonesia",
      "footer.phone-text": "+62 812-3456-7890",
      "footer.email-text": "info@itppn.ac.id",

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
      "home.information-title": "Campus Information",
      "home.news-section-title": "Latest News & Announcements",
      "home.view-all-news": "View All News",
      "home.news-label": "News",
      "home.read-more": "Read More",
      "home.pmb-title": "Student Admission",
      "home.pmb-subtitle": "Realize your dreams with ITPPN Buton. The first admission wave is now open.",
      "home.pmb-apply": "Apply Online",
      "home.pmb-info": "Admission Info",
      "home.video-fallback": "Your browser does not support HTML5 video.",
      
      // Promotional video
      "home.promo-video-title": "Discover ITPPN Buton",
      "home.promo-video-subtitle": "Watch our institution's story and join a community of innovators and leaders",

      // Registration Page
      "pendaftaran.alert-success": "Registration successfully submitted! (This is a demo)",
      "pendaftaran.title": "New Student Admission",
      "pendaftaran.subtitle": "Join Institut Teknologi dan Pendidikan Pelita Nusantara Buton and realize your future.",
      "pendaftaran.schedule.title": "Registration Schedule",
      "pendaftaran.schedule.wave1": "Wave 1",
      "pendaftaran.schedule.wave1-date": "Jan - Mar 2026",
      "pendaftaran.schedule.wave2": "Wave 2",
      "pendaftaran.schedule.wave2-date": "Apr - Jun 2026",
      "pendaftaran.schedule.wave3": "Wave 3",
      "pendaftaran.schedule.wave3-date": "Jul - Aug 2026",
      "pendaftaran.requirements.title": "Requirements",
      "pendaftaran.requirements.item1": "High school graduate (SMA/SMK/MA or equivalent)",
      "pendaftaran.requirements.item2": "Copy of diploma (legalized)",
      "pendaftaran.requirements.item3": "Copy of ID & family card",
      "pendaftaran.requirements.item4": "Color passport photo 3x4 (4 pieces)",
      "pendaftaran.requirements.item5": "Pay registration fee",
      "pendaftaran.form.title": "Online Registration Form",
      "pendaftaran.form.fullName.label": "Full Name *",
      "pendaftaran.form.fullName.placeholder": "As per diploma",
      "pendaftaran.form.fullName.help": "Enter your full name as it appears on your diploma",
      "pendaftaran.form.email.label": "Active Email *",
      "pendaftaran.form.email.placeholder": "email@example.com",
      "pendaftaran.form.email.help": "Active email to receive registration information",
      "pendaftaran.form.phone.label": "WhatsApp Number *",
      "pendaftaran.form.phone.placeholder": "081234567890",
      "pendaftaran.form.phone.help": "Active WhatsApp number for official communication",
      "pendaftaran.form.school.label": "Previous School *",
      "pendaftaran.form.school.placeholder": "Name of SMA/SMK/MA",
      "pendaftaran.form.school.help": "Name of the school where you graduated",
      "pendaftaran.form.program1.label": "Program Choice 1 *",
      "pendaftaran.form.program1.placeholder": "-- Select Study Program --",
      "pendaftaran.form.program1.help": "Primary choice of study program",
      "pendaftaran.form.program2.label": "Program Choice 2",
      "pendaftaran.form.program2.placeholder": "-- Select Study Program --",
      "pendaftaran.form.program2.help": "Backup choice if not accepted in first choice",
      "pendaftaran.form.submit": "Submit Registration",

      // Profile pages
      "visimisi.hero.title": "Vision & Mission",
      "visimisi.hero.subtitle": "ITPPN Buton is committed to academic excellence and community empowerment.",
      "visimisi.vision.title": "Our Vision",
      "visimisi.vision.text": "To be a leading higher education institution that nurtures innovation, character, and global competitiveness.",
      "visimisi.mission.title": "Our Mission",
      "visimisi.mission.items": [
        "Deliver high-quality education with a strong technology foundation.",
        "Empower students with critical thinking and entrepreneurship skills.",
        "Strengthen community service and research collaboration in the region."
      ],
      "visimisi.objectives.title": "Strategic Objectives",
      "visimisi.objectives.items": [
        "Expand academic programs aligned with industry needs.",
        "Enhance learning facilities and digital infrastructure.",
        "Increase partnerships with local and national stakeholders."
      ],
      "sejarah.hero.title": "Our History",
      "sejarah.hero.subtitle": "The story of ITPPN Buton and the values that guide our institution.",
      "sejarah.founding.title": "Founding Principles",
      "sejarah.founding.paragraph1": "ITPPN Buton was founded to bridge technology and education in the Southeast region, preparing graduates to contribute responsibly to society.",
      "sejarah.founding.paragraph2": "Since its inception, the institution has focused on research-driven learning, character development, and community service.",
      "sejarah.symbol.title": "Symbolism of the Logo",
      "sejarah.symbol.blue-flower.title": "Blue Flower",
      "sejarah.symbol.blue-flower.points": [
        "Represents knowledge and the pursuit of scientific excellence.",
        "Reflects educational growth and intellectual beauty."
      ],
      "sejarah.symbol.colors.title": "Colors",
      "sejarah.symbol.colors.points": [
        "The blue shade symbolizes trust and professionalism.",
        "The gold accent reflects optimism and achievement."
      ],
      "sejarah.symbol.sunlight.title": "Sunlight",
      "sejarah.symbol.sunlight.points": [
        "Symbolizes hope, energy, and the future of our students.",
        "Represents a bright path of learning and innovation."
      ],
      "sejarah.symbol.fortress.title": "Fortress",
      "sejarah.symbol.fortress.points": [
        "Represents strength, stability, and protection of knowledge.",
        "Highlights the institution's commitment to resilience."
      ],
      "sejarah.symbol.book-lamp.title": "Book & Lamp",
      "sejarah.symbol.book-lamp.points": [
        "The book stands for education and scientific inquiry.",
        "The lamp stands for enlightenment and continuous learning."
      ],
      "sejarah.symbol.map-star.title": "Map & Star",
      "sejarah.symbol.map-star.points": [
        "Indicates our regional roots and national aspirations.",
        "The star symbolizes the spirit of excellence and leadership."
      ],
      "sejarah.symbol.name-text.title": "Institution Name",
      "sejarah.symbol.name-text.points": [
        "Displays our official identity and commitment to the community.",
        "Affirms our role in advancing technology and education."
      ],
      "struktur.hero.title": "Organization Structure",
      "struktur.hero.subtitle": "A clear plan for academic leadership and operational support.",
      "struktur.main.title": "Organizational Overview",
      "struktur.main.subtitle": "A governance structure designed to serve students, faculty, and the region.",
      "struktur.organizer.title": "Campus Leadership",
      "struktur.organizer.subtitle": "Academic and institutional leaders who guide the campus.",
      "struktur.organizer.list": [
        "Rector and senior academic staff.",
        "Campus strategic planning and oversight.",
        "Academic quality and curriculum leadership."
      ],
      "struktur.policy.title": "Policy & Governance",
      "struktur.policy.subtitle": "Teams responsible for institutional policies and standards.",
      "struktur.policy.list": [
        "Academic policy development.",
        "Compliance and accreditation oversight.",
        "Data-driven decision making."
      ],
      "struktur.quality.title": "Quality Assurance",
      "struktur.quality.subtitle": "Ensuring academic excellence and continuous improvement.",
      "struktur.quality.list": [
        "Monitoring teaching quality.",
        "Curriculum evaluation and review.",
        "Student learning assessment."
      ],
      "struktur.academic.title": "Academic Units",
      "struktur.academic.subtitle": "Faculties and programs delivering teaching and research.",
      "struktur.academic.list": [
        "Geography Education Program.",
        "Mathematics Education Program.",
        "Physical Education and PGSD programs."
      ],
      "struktur.administrative.title": "Administrative Support",
      "struktur.administrative.subtitle": "Operations that keep the campus running smoothly.",
      "struktur.administrative.list": [
        "Student services and finance.",
        "Facilities and campus operations.",
        "Administration and communication."
      ],
      "struktur.support.title": "Support Services",
      "struktur.support.subtitle": "Related services for students and faculty success.",
      "struktur.support.list": [
        "Library and digital resources.",
        "IT and technology services.",
        "Community engagement and outreach."
      ],

      // Study Programs (Prodi)
      "prodi.page.title": "Study Program",
      "prodi.vision.title": "Program Vision",
      "prodi.competencies.title": "Graduate Competencies",
      "prodi.cta.title": "Interested in Joining?",
      "prodi.cta.description": "Join {{program}} and realize your bright future with ITPPN Buton.",
      "prodi.cta.button": "Register Now",
      "prodi.gallery.title": "Student Activities Gallery",
      "prodi.gallery.description": "Snapshot of academic and non-academic activities of {{program}} students.",

      // Geography Education Program
      "prodi.geography.title": "Geography Education Program",
      "prodi.geography.description": "Developing innovative and analytical geography educators capable of integrating technology.",
      "prodi.geography.vision": "To become an excellence center in geography education innovation and spatial research with environmental awareness.",
      "prodi.geography.competency1": "Mastery of Geographic Information Systems (GIS) and Remote Sensing",
      "prodi.geography.competency2": "Ability to analyze geospheric phenomena and disaster mitigation",
      "prodi.geography.competency3": "Modern and interactive geography teaching methodology",
      "prodi.geography.competency4": "Regional planning and development",
      "prodi.geography.activity1": "Field Mapping Practice",
      "prodi.geography.activity2": "Spatial Data Analysis",
      "prodi.geography.activity3": "Environmental Observation",

      // Mathematics Education Program
      "prodi.mathematics.title": "Mathematics Education Program",
      "prodi.mathematics.description": "Developing innovative mathematics educators capable of integrating technology in learning.",
      "prodi.mathematics.vision": "To become a leading center in mathematics education producing globally competitive graduates with entrepreneurial spirit.",
      "prodi.mathematics.competency1": "Mastery of advanced mathematics concepts and structures",
      "prodi.mathematics.competency2": "Development of digital mathematics media and tools",
      "prodi.mathematics.competency3": "Logical, analytical and problem-solving thinking",
      "prodi.mathematics.competency4": "Curriculum design and learning evaluation",
      "prodi.mathematics.activity1": "Problem-Solving Discussion",
      "prodi.mathematics.activity2": "Digital Media Development",
      "prodi.mathematics.activity3": "Micro Teaching Practice",

      // Physical Education Program
      "prodi.sports.title": "Physical Education Program",
      "prodi.sports.description": "Producing PE teachers, sports coaches and health professionals who are professional and of good character.",
      "prodi.sports.vision": "To be a pioneer in innovation of physical education, sports and health based on applied science.",
      "prodi.sports.competency1": "Mastery of basic and advanced techniques in various sports",
      "prodi.sports.competency2": "Sports coaching science, anatomy and physiology",
      "prodi.sports.competency3": "Sports event management (Sport Event Management)",
      "prodi.sports.competency4": "Health education and community fitness",
      "prodi.sports.activity1": "Field Athletics Practice",
      "prodi.sports.activity2": "Physical Fitness Training",
      "prodi.sports.activity3": "Sports Team Management",

      // PGSD Program
      "prodi.pgsd.title": "Elementary School Teacher Education Program",
      "prodi.pgsd.description": "Preparing creative and inspirational elementary teachers who understand child psychology comprehensively.",
      "prodi.pgsd.vision": "Producing excellent elementary teachers in pedagogy, of good character, and adaptive to educational technology.",
      "prodi.pgsd.competency1": "Mastery of five main elementary subjects",
      "prodi.pgsd.competency2": "Understanding of child development and character psychology",
      "prodi.pgsd.competency3": "Development of integrated thematic learning strategies",
      "prodi.pgsd.competency4": "Art, culture and scouting skills",
      "prodi.pgsd.activity1": "Interactive Learning",
      "prodi.pgsd.activity2": "Arts and Creativity Practice",
      "prodi.pgsd.activity3": "Extracurricular Activities",

      // Informatics Program
      "prodi.informatics.title": "Informatics Program",
      "prodi.informatics.description": "Producing computer experts in software engineering, artificial intelligence and computer networks.",
      "prodi.informatics.vision": "To be a leading program in research and development of information technology supporting digital transformation.",
      "prodi.informatics.competency1": "Software Engineering & Web Development",
      "prodi.informatics.competency2": "Artificial Intelligence (AI) and Data Science",
      "prodi.informatics.competency3": "Cyber Security and Computer Networks",
      "prodi.informatics.competency4": "Technopreneurship and digital innovation",
      "prodi.informatics.activity1": "Programming Lab",
      "prodi.informatics.activity2": "Network Configuration",
      "prodi.informatics.activity3": "Digital Startup Development",

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
      "footer.name": "ITPPN BUTON",
      "footer.institute-fullname": "Institut Teknologi dan Pendidikan<br/>Pelita Nusantara",
      "footer.about-text": "Institut Teknologi dan Pendidikan Pelita Nusantara Buton berkomitmen untuk mencetak generasi unggul yang berdaya saing global dengan landasan iman dan taqwa.",
      "footer.pmb": "Penerimaan Mahasiswa Baru",
      "footer.siakad": "Sistem Informasi Akademik",
      "footer.elearning": "E-Learning / LMS",
      "footer.digital-library": "Perpustakaan Digital",
      "footer.journal": "Jurnal Ilmiah",
      "footer.tracer-study": "Tracer Study",
      "footer.address-text": "Jl. Pendidikan No. 1, Pasarwajo, Kabupaten Buton, Sulawesi Tenggara, Indonesia",
      "footer.phone-text": "+62 812-3456-7890",
      "footer.email-text": "info@itppn.ac.id",

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
      "home.rector-welcome": "Sambutan Rektor",
      "home.rector-title": "Selamat Datang di ITPPN Buton",
      "home.rector-quote": "\"Pendidikan adalah senjata paling ampuh yang dapat Anda gunakan untuk mengubah dunia. Di Institut Teknologi dan Pendidikan Pelita Nusantara Buton, kami berkomitmen tidak hanya mentransfer pengetahuan, tetapi juga membentuk karakter, menanamkan nilai integritas, dan mendorong inovasi.\"",
      "home.rector-message": "Kami mengundang putra-putri terbaik bangsa untuk bergabung bersama kami, mengembangkan potensi, dan menjadi pemimpin masa depan yang membawa perubahan positif bagi masyarakat, bangsa, dan negara.",
      "home.rector-name": "Armin, S.E., M.Si.",
      "home.rector-position": "Rektor ITPPN Buton",
      "home.campus-profile": "Profil Kampus",
      "home.campus-profile-title": "Kenali ITPPN Buton Lebih Dekat",
      "home.campus-profile-desc": "Tonton video profil kami untuk melihat fasilitas, aktivitas akademik, dan lingkungan kampus yang mendukung proses pembelajaran.",
      "home.information-title": "Informasi Kampus",
      "home.news-section-title": "Berita & Pengumuman Terbaru",
      "home.view-all-news": "Lihat Semua Berita",
      "home.news-label": "Berita",
      "home.read-more": "Baca Selengkapnya",
      "home.pmb-title": "Penerimaan Mahasiswa Baru",
      "home.pmb-subtitle": "Wujudkan mimpimu bersama ITPPN Buton. Pendaftaran gelombang pertama telah dibuka.",
      "home.pmb-apply": "Daftar Online",
      "home.pmb-info": "Informasi Pendaftaran",
      "home.video-fallback": "Browser Anda tidak mendukung pemutaran video HTML5.",
      
      // Promotional video
      "home.promo-video-title": "Temukan ITPPN Buton",
      "home.promo-video-subtitle": "Tonton kisah institusi kami dan bergabunglah dengan komunitas inovator dan pemimpin",

      // Halaman Pendaftaran
      "pendaftaran.alert-success": "Pendaftaran berhasil disubmit! (Ini adalah demo)",
      "pendaftaran.title": "Penerimaan Mahasiswa Baru",
      "pendaftaran.subtitle": "Bergabunglah bersama Institut Teknologi dan Pendidikan Pelita Nusantara Buton dan wujudkan masa depan gemilang Anda.",
      "pendaftaran.schedule.title": "Jadwal Pendaftaran",
      "pendaftaran.schedule.wave1": "Gelombang 1",
      "pendaftaran.schedule.wave1-date": "Jan - Mar 2026",
      "pendaftaran.schedule.wave2": "Gelombang 2",
      "pendaftaran.schedule.wave2-date": "Apr - Jun 2026",
      "pendaftaran.schedule.wave3": "Gelombang 3",
      "pendaftaran.schedule.wave3-date": "Jul - Agu 2026",
      "pendaftaran.requirements.title": "Persyaratan",
      "pendaftaran.requirements.item1": "Lulusan SMA/SMK/MA sederajat",
      "pendaftaran.requirements.item2": "Fotokopi Ijazah dilegalisir",
      "pendaftaran.requirements.item3": "Fotokopi KTP & KK",
      "pendaftaran.requirements.item4": "Pas foto berwarna 3x4 (4 lembar)",
      "pendaftaran.requirements.item5": "Membayar biaya pendaftaran",
      "pendaftaran.form.title": "Formulir Pendaftaran Online",
      "pendaftaran.form.fullName.label": "Nama Lengkap *",
      "pendaftaran.form.fullName.placeholder": "Sesuai Ijazah",
      "pendaftaran.form.fullName.help": "Masukkan nama lengkap Anda sesuai dengan ijazah terakhir",
      "pendaftaran.form.email.label": "Email Aktif *",
      "pendaftaran.form.email.placeholder": "email@contoh.com",
      "pendaftaran.form.email.help": "Email yang aktif untuk menerima informasi pendaftaran",
      "pendaftaran.form.phone.label": "No. WhatsApp *",
      "pendaftaran.form.phone.placeholder": "0812xxxx",
      "pendaftaran.form.phone.help": "Nomor WhatsApp yang aktif untuk komunikasi panitia",
      "pendaftaran.form.school.label": "Asal Sekolah *",
      "pendaftaran.form.school.placeholder": "Nama SMA/SMK/MA",
      "pendaftaran.form.school.help": "Nama sekolah asal tempat Anda lulus",
      "pendaftaran.form.program1.label": "Pilihan Prodi 1 *",
      "pendaftaran.form.program1.placeholder": "-- Pilih Program Studi --",
      "pendaftaran.form.program1.help": "Pilihan utama program studi yang ingin Anda masuki",
      "pendaftaran.form.program2.label": "Pilihan Prodi 2",
      "pendaftaran.form.program2.placeholder": "-- Pilih Program Studi --",
      "pendaftaran.form.program2.help": "Pilihan cadangan jika tidak lolos di pilihan pertama",
      "pendaftaran.form.submit": "Kirim Pendaftaran",

      // Profile pages
      "visimisi.hero.title": "Visi & Misi",
      "visimisi.hero.subtitle": "ITPPN Buton berkomitmen pada keunggulan akademik dan pemberdayaan masyarakat.",
      "visimisi.vision.title": "Visi Kami",
      "visimisi.vision.text": "Menjadi perguruan tinggi unggulan yang membentuk inovasi, karakter, dan daya saing global.",
      "visimisi.mission.title": "Misi Kami",
      "visimisi.mission.items": [
        "Menyelenggarakan pendidikan berkualitas dengan dasar teknologi yang kuat.",
        "Memberdayakan mahasiswa dengan keterampilan berpikir kritis dan kewirausahaan.",
        "Menguatkan pengabdian kepada masyarakat dan kolaborasi penelitian di wilayah.",
      ],
      "visimisi.objectives.title": "Tujuan Strategis",
      "visimisi.objectives.items": [
        "Memperluas program akademik yang sesuai kebutuhan industri.",
        "Meningkatkan fasilitas pembelajaran dan infrastruktur digital.",
        "Meningkatkan kemitraan dengan pemangku kepentingan lokal dan nasional."
      ],
      "sejarah.hero.title": "Sejarah Kami",
      "sejarah.hero.subtitle": "Kisah ITPPN Buton dan nilai-nilai yang menjadi panduan institusi.",
      "sejarah.founding.title": "Prinsip Pendiri",
      "sejarah.founding.paragraph1": "ITPPN Buton didirikan untuk menjembatani teknologi dan pendidikan di wilayah Timur Indonesia, mempersiapkan lulusan yang bertanggung jawab bagi masyarakat.",
      "sejarah.founding.paragraph2": "Sejak berdiri, institusi ini fokus pada pembelajaran berbasis penelitian, pengembangan karakter, dan pengabdian kepada masyarakat.",
      "sejarah.symbol.title": "Makna Logo",
      "sejarah.symbol.blue-flower.title": "Bunga Biru",
      "sejarah.symbol.blue-flower.points": [
        "Melambangkan pengetahuan dan semangat keunggulan ilmiah.",
        "Mencerminkan pertumbuhan pendidikan dan keindahan intelektual."
      ],
      "sejarah.symbol.colors.title": "Warna",
      "sejarah.symbol.colors.points": [
        "Warna biru melambangkan kepercayaan dan profesionalisme.",
        "Aksen emas mencerminkan optimisme dan pencapaian."
      ],
      "sejarah.symbol.sunlight.title": "Sinar Matahari",
      "sejarah.symbol.sunlight.points": [
        "Melambangkan harapan, energi, dan masa depan mahasiswa kami.",
        "Mewakili jalan belajar dan inovasi yang cerah."
      ],
      "sejarah.symbol.fortress.title": "Benteng",
      "sejarah.symbol.fortress.points": [
        "Melambangkan kekuatan, stabilitas, dan perlindungan ilmu.",
        "Menegaskan komitmen institusi terhadap ketahanan."
      ],
      "sejarah.symbol.book-lamp.title": "Buku & Lampu",
      "sejarah.symbol.book-lamp.points": [
        "Buku mewakili pendidikan dan pencarian ilmiah.",
        "Lampu mewakili pencerahan dan pembelajaran berkelanjutan."
      ],
      "sejarah.symbol.map-star.title": "Peta & Bintang",
      "sejarah.symbol.map-star.points": [
        "Menunjukkan akar regional dan aspirasi nasional kami.",
        "Bintang melambangkan semangat keunggulan dan kepemimpinan."
      ],
      "sejarah.symbol.name-text.title": "Nama Institusi",
      "sejarah.symbol.name-text.points": [
        "Menampilkan identitas resmi kami dan komitmen kepada masyarakat.",
        "Menegaskan peran kami dalam memajukan teknologi dan pendidikan."
      ],
      "struktur.hero.title": "Struktur Organisasi",
      "struktur.hero.subtitle": "Rencana yang jelas untuk kepemimpinan akademik dan dukungan operasional.",
      "struktur.main.title": "Gambaran Organisasi",
      "struktur.main.subtitle": "Struktur tata kelola yang dirancang untuk melayani mahasiswa, dosen, dan daerah.",
      "struktur.organizer.title": "Kepemimpinan Kampus",
      "struktur.organizer.subtitle": "Pemimpin akademik dan institusional yang memandu kampus.",
      "struktur.organizer.list": [
        "Rektor dan staf akademik senior.",
        "Perencanaan strategis dan pengawasan kampus.",
        "Kepemimpinan mutu akademik dan kurikulum."
      ],
      "struktur.policy.title": "Kebijakan & Tata Kelola",
      "struktur.policy.subtitle": "Tim yang bertanggung jawab atas kebijakan dan standar institusi.",
      "struktur.policy.list": [
        "Perumusan kebijakan akademik.",
        "Pengawasan kepatuhan dan akreditasi.",
        "Pengambilan keputusan berbasis data."
      ],
      "struktur.quality.title": "Jaminan Mutu",
      "struktur.quality.subtitle": "Menjamin keunggulan akademik dan perbaikan berkelanjutan.",
      "struktur.quality.list": [
        "Pemantauan kualitas pengajaran.",
        "Evaluasi dan review kurikulum.",
        "Penilaian hasil belajar mahasiswa."
      ],
      "struktur.academic.title": "Unit Akademik",
      "struktur.academic.subtitle": "Fakultas dan program yang menyelenggarakan pendidikan dan penelitian.",
      "struktur.academic.list": [
        "Program Pendidikan Geografi.",
        "Program Pendidikan Matematika.",
        "Program Pendidikan Olahraga dan PGSD."
      ],
      "struktur.administrative.title": "Dukungan Administratif",
      "struktur.administrative.subtitle": "Operasi yang menjaga kampus berjalan lancar.",
      "struktur.administrative.list": [
        "Layanan kemahasiswaan dan keuangan.",
        "Fasilitas dan operasional kampus.",
        "Administrasi dan komunikasi."
      ],
      "struktur.support.title": "Layanan Dukungan",
      "struktur.support.subtitle": "Layanan terkait untuk keberhasilan mahasiswa dan dosen.",
      "struktur.support.list": [
        "Perpustakaan dan sumber daya digital.",
        "Layanan TI dan teknologi.",
        "Pengabdian masyarakat dan outreach."
      ],

      // Program Studi (Prodi)
      "prodi.page.title": "Program Studi",
      "prodi.vision.title": "Visi Program Studi",
      "prodi.competencies.title": "Kompetensi Lulusan",
      "prodi.cta.title": "Tertarik Bergabung?",
      "prodi.cta.description": "Jadilah bagian dari {{program}} dan wujudkan masa depan gemilang Anda bersama ITPPN Buton.",
      "prodi.cta.button": "Daftar Sekarang",
      "prodi.gallery.title": "Galeri Aktivitas Mahasiswa",
      "prodi.gallery.description": "Potret kegiatan akademik dan non-akademik mahasiswa {{program}}.",

      // Program Pendidikan Geografi
      "prodi.geography.title": "Program Pendidikan Geografi",
      "prodi.geography.description": "Mengembangkan pendidik geografi yang inovatif, analitis, dan mampu mengintegrasikan teknologi.",
      "prodi.geography.vision": "Menjadi program studi unggulan dalam inovasi pembelajaran geografi dan riset spasial yang berwawasan lingkungan.",
      "prodi.geography.competency1": "Penguasaan Sistem Informasi Geografis (SIG) dan Penginderaan Jauh",
      "prodi.geography.competency2": "Kemampuan analisis fenomena geosfer dan mitigasi bencana",
      "prodi.geography.competency3": "Metodologi pengajaran geografi modern dan interaktif",
      "prodi.geography.competency4": "Perencanaan dan pengembangan wilayah",
      "prodi.geography.activity1": "Praktik Pemetaan Lapangan",
      "prodi.geography.activity2": "Analisis Data Spasial",
      "prodi.geography.activity3": "Observasi Lingkungan",

      // Program Pendidikan Matematika
      "prodi.mathematics.title": "Program Pendidikan Matematika",
      "prodi.mathematics.description": "Mengembangkan pendidik matematika yang inovatif, analitis, dan mampu mengintegrasikan teknologi dalam pembelajaran.",
      "prodi.mathematics.vision": "Menjadi pusat keunggulan dalam pendidikan matematika yang menghasilkan lulusan berdaya saing global dan berjiwa technopreneur.",
      "prodi.mathematics.competency1": "Penguasaan konsep dan struktur matematika tingkat lanjut",
      "prodi.mathematics.competency2": "Pengembangan media dan alat peraga matematika digital",
      "prodi.mathematics.competency3": "Kemampuan berpikir logis, analitis, dan pemecahan masalah",
      "prodi.mathematics.competency4": "Desain kurikulum dan evaluasi pembelajaran matematika",
      "prodi.mathematics.activity1": "Diskusi Pemecahan Masalah",
      "prodi.mathematics.activity2": "Pengembangan Media Digital",
      "prodi.mathematics.activity3": "Praktik Mengajar Mikro",

      // Program Pendidikan Olahraga
      "prodi.sports.title": "Program Pendidikan Olahraga",
      "prodi.sports.description": "Mencetak guru pendidikan jasmani, pelatih olahraga, dan praktisi kesehatan yang profesional dan berkarakter.",
      "prodi.sports.vision": "Menjadi pelopor dalam inovasi pendidikan jasmani, keolahragaan, dan kesehatan berbasis ilmu pengetahuan terapan.",
      "prodi.sports.competency1": "Penguasaan teknik dasar dan lanjutan berbagai cabang olahraga",
      "prodi.sports.competency2": "Ilmu kepelatihan, anatomi, dan fisiologi olahraga",
      "prodi.sports.competency3": "Manajemen penyelenggaraan acara olahraga (Sport Event Management)",
      "prodi.sports.competency4": "Pendidikan kesehatan dan kebugaran masyarakat",
      "prodi.sports.activity1": "Praktik Atletik Lapangan",
      "prodi.sports.activity2": "Latihan Kebugaran Fisik",
      "prodi.sports.activity3": "Manajemen Tim Olahraga",

      // Program Pendidikan Guru Sekolah Dasar
      "prodi.pgsd.title": "Program Pendidikan Guru Sekolah Dasar",
      "prodi.pgsd.description": "Mempersiapkan guru kelas SD yang kreatif, inspiratif, dan memahami perkembangan psikologi anak secara komprehensif.",
      "prodi.pgsd.vision": "Menghasilkan pendidik tingkat dasar yang unggul dalam pedagogik, berkarakter, dan adaptif terhadap perkembangan teknologi pendidikan.",
      "prodi.pgsd.competency1": "Penguasaan materi lima mata pelajaran pokok SD",
      "prodi.pgsd.competency2": "Pemahaman psikologi perkembangan dan karakter anak",
      "prodi.pgsd.competency3": "Pengembangan strategi pembelajaran tematik terpadu",
      "prodi.pgsd.competency4": "Keterampilan seni, budaya, dan kepramukaan",
      "prodi.pgsd.activity1": "Pembelajaran Interaktif",
      "prodi.pgsd.activity2": "Praktik Seni dan Kreativitas",
      "prodi.pgsd.activity3": "Kegiatan Ekstrakurikuler",

      // Program Informatika
      "prodi.informatics.title": "Program Informatika",
      "prodi.informatics.description": "Menghasilkan sarjana komputer yang ahli dalam rekayasa perangkat lunak, kecerdasan buatan, dan jaringan komputer.",
      "prodi.informatics.vision": "Menjadi program studi terkemuka dalam riset dan pengembangan teknologi informasi yang mendukung transformasi digital.",
      "prodi.informatics.competency1": "Rekayasa perangkat lunak (Software Engineering) & Web Development",
      "prodi.informatics.competency2": "Kecerdasan Buatan (Artificial Intelligence) dan Data Science",
      "prodi.informatics.competency3": "Keamanan Siber (Cyber Security) dan Jaringan Komputer",
      "prodi.informatics.competency4": "Technopreneurship dan inovasi digital",
      "prodi.informatics.activity1": "Praktikum Pemrograman",
      "prodi.informatics.activity2": "Konfigurasi Jaringan",
      "prodi.informatics.activity3": "Pengembangan Startup Digital",

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