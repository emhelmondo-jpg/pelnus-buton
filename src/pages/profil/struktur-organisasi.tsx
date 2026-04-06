import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Users, Building, ShieldCheck, GraduationCap, BookOpen, Settings } from "lucide-react";

export default function StrukturOrganisasi() {
  const { t } = useTranslation();

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">{t('struktur.hero.title')}</h1>
            <p className="text-lg max-w-2xl mx-auto">{t('struktur.hero.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-4 border-b-2 border-amber-500 pb-2 inline-block">{t('struktur.main.title')}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">{t('struktur.main.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { key: 'organizer', icon: Building, borderClass: 'border-blue-900' },
              { key: 'policy', icon: Users, borderClass: 'border-amber-500' },
              { key: 'quality', icon: ShieldCheck, borderClass: 'border-green-600' },
              { key: 'academic', icon: GraduationCap, borderClass: 'border-purple-600' },
              { key: 'administrative', icon: BookOpen, borderClass: 'border-red-500' },
              { key: 'support', icon: Settings, borderClass: 'border-teal-500' }
            ].map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.key} className={`bg-white rounded-xl shadow-md p-8 border-t-4 ${section.borderClass} hover:-translate-y-1 transition-transform duration-300`}>
                  <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-slate-800" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-3">{t(`struktur.${section.key}.title`)}</h3>
                  {t(`struktur.${section.key}.subtitle`) && <p className="text-gray-600 mb-4">{t(`struktur.${section.key}.subtitle`)}</p>}
                  {(() => {
                    const listItems = t(`struktur.${section.key}.list`, { returnObjects: true }) as string[];
                    return listItems.length > 0 ? (
                      <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                        {listItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : null;
                  })()}
                  {t(`struktur.${section.key}.description`) && <p className="text-sm text-gray-500">{t(`struktur.${section.key}.description`)}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
