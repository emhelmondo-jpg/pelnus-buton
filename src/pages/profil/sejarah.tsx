import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Sejarah() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">{t('sejarah.hero.title')}</h1>
            <p className="text-lg max-w-2xl mx-auto">{t('sejarah.hero.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-6 border-b-2 border-amber-500 pb-2 inline-block">{t('sejarah.founding.title')}</h2>
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-800 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                {t('sejarah.founding.paragraph1')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('sejarah.founding.paragraph2')}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-8 border-b-2 border-amber-500 pb-2 inline-block">{t('sejarah.symbol.title')}</h2>
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-24">
                <img src="/logittpnb.png" alt="Logo ITPPN Buton" className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl" />
              </div>
              <div className="w-full lg:w-2/3 space-y-6">
                {['blue-flower', 'colors', 'sunlight', 'fortress', 'book-lamp', 'map-star', 'name-text'].map((key) => (
                  <div key={key} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{t(`sejarah.symbol.${key}.title`)}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {(() => {
                        const points = t(`sejarah.symbol.${key}.points`, { returnObjects: true }) as string[];
                        return points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ));
                      })()}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
