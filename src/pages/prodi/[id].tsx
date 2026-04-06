import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "motion/react";
import { BookOpen, Target, Award, ArrowRight, Users, Monitor, Map, Calculator, Activity } from "lucide-react";
import { useTranslation } from "react-i18next";

const prodiData: Record<string, any> = {
  "pendidikan-geografi": {
    titleKey: "prodi.geography.title",
    icon: Map,
    descriptionKey: "prodi.geography.description",
    visionKey: "prodi.geography.vision",
    competencies: [
      "prodi.geography.competency1",
      "prodi.geography.competency2",
      "prodi.geography.competency3",
      "prodi.geography.competency4"
    ],
    activities: [
      { url: "/pemetaanlapangan.png", captionKey: "prodi.geography.activity1" },
      { url: "/parktikumgis.png", captionKey: "prodi.geography.activity2" },
      { url: "/analisisspasial.png", captionKey: "prodi.geography.activity3" }
    ]
  },
  "pendidikan-matematika": {
    titleKey: "prodi.mathematics.title",
    icon: Calculator,
    descriptionKey: "prodi.mathematics.description",
    visionKey: "prodi.mathematics.vision",
    competencies: [
      "prodi.mathematics.competency1",
      "prodi.mathematics.competency2",
      "prodi.mathematics.competency3",
      "prodi.mathematics.competency4"
    ],
    activities: [
      { url: "https://picsum.photos/seed/mathclass/600/400", captionKey: "prodi.mathematics.activity1" },
      { url: "https://picsum.photos/seed/coding/600/400", captionKey: "prodi.mathematics.activity2" },
      { url: "https://picsum.photos/seed/teaching/600/400", captionKey: "prodi.mathematics.activity3" }
    ]
  },
  "pendidikan-olahraga": {
    titleKey: "prodi.sports.title",
    icon: Activity,
    descriptionKey: "prodi.sports.description",
    visionKey: "prodi.sports.vision",
    competencies: [
      "prodi.sports.competency1",
      "prodi.sports.competency2",
      "prodi.sports.competency3",
      "prodi.sports.competency4"
    ],
    activities: [
      { url: "https://picsum.photos/seed/stadium/600/400", captionKey: "prodi.sports.activity1" },
      { url: "https://picsum.photos/seed/gym/600/400", captionKey: "prodi.sports.activity2" },
      { url: "https://picsum.photos/seed/team/600/400", captionKey: "prodi.sports.activity3" }
    ]
  },
  "pgsd": {
    titleKey: "prodi.pgsd.title",
    icon: Users,
    descriptionKey: "prodi.pgsd.description",
    visionKey: "prodi.pgsd.vision",
    competencies: [
      "prodi.pgsd.competency1",
      "prodi.pgsd.competency2",
      "prodi.pgsd.competency3",
      "prodi.pgsd.competency4"
    ],
    activities: [
      { url: "https://picsum.photos/seed/children/600/400", captionKey: "prodi.pgsd.activity1" },
      { url: "https://picsum.photos/seed/artclass/600/400", captionKey: "prodi.pgsd.activity2" },
      { url: "https://picsum.photos/seed/school/600/400", captionKey: "prodi.pgsd.activity3" }
    ]
  },
  "informatika": {
    titleKey: "prodi.informatics.title",
    icon: Monitor,
    descriptionKey: "prodi.informatics.description",
    visionKey: "prodi.informatics.vision",
    competencies: [
      "prodi.informatics.competency1",
      "prodi.informatics.competency2",
      "prodi.informatics.competency3",
      "prodi.informatics.competency4"
    ],
    activities: [
      { url: "https://picsum.photos/seed/programming/600/400", captionKey: "prodi.informatics.activity1" },
      { url: "https://picsum.photos/seed/network/600/400", captionKey: "prodi.informatics.activity2" },
      { url: "https://picsum.photos/seed/startup/600/400", captionKey: "prodi.informatics.activity3" }
    ]
  }
};

export default function ProgramStudi() {
  const { t } = useTranslation();
  const router = useRouter();
  const id = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;
  const prodi = typeof id === 'string' ? prodiData[id] : null;

  useEffect(() => {
    if (router.isReady && !prodi) {
      router.replace('/');
    }
  }, [router, router.isReady, prodi]);

  if (!router.isReady || !prodi) {
    return null;
  }

  const Icon = prodi.icon;
  const title = t(prodi.titleKey);
  const description = t(prodi.descriptionKey);
  const vision = t(prodi.visionKey);

  return (
    <div className="w-full">
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-amber-400">{t('prodi.page.title')}</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">{description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4 flex items-center border-b-2 border-amber-500 pb-2 inline-flex">
                  <Target className="w-6 h-6 mr-2 text-amber-500" /> {t('prodi.vision.title')}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed italic bg-blue-50 p-6 rounded-r-xl border-l-4 border-blue-800">
                  "{vision}"
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-950 mb-6 flex items-center border-b-2 border-amber-500 pb-2 inline-flex">
                  <Award className="w-6 h-6 mr-2 text-amber-500" /> {t('prodi.competencies.title')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prodi.competencies.map((compKey: string, idx: number) => (
                    <div key={idx} className="bg-white border border-gray-100 shadow-sm p-4 rounded-lg flex items-start hover:shadow-md transition-shadow">
                      <div className="bg-amber-100 p-2 rounded-md mr-3 flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-amber-600" />
                      </div>
                      <p className="text-gray-700">{t(compKey)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-blue-950 rounded-xl p-8 text-white shadow-xl sticky top-24">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">{t('prodi.cta.title')}</h3>
                <p className="text-gray-300 mb-6">{t('prodi.cta.description', { program: title })}</p>
                <Link href="/pendaftaran" className="w-full bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center">
                  {t('prodi.cta.button')} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">{t('prodi.gallery.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('prodi.gallery.description', { program: title })}</p>
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
                    alt={t(act.captionKey)} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-6">{t(act.captionKey)}</p>
                  </div>
                </div>
                <div className="p-4 text-center border-t border-gray-100">
                  <p className="font-medium text-blue-900">{t(act.captionKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
