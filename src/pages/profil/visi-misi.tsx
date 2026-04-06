import { motion } from "motion/react";
import { Target, Compass, Flag, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function VisiMisi() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">{t('visimisi.hero.title')}</h1>
            <p className="text-lg max-w-2xl mx-auto">{t('visimisi.hero.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl space-y-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-amber-500">
            <div className="p-10 md:p-16 text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="w-10 h-10 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">{t('visimisi.vision.title')}</h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic">
                {t('visimisi.vision.text')}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                <Flag className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-950">{t('visimisi.mission.title')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(() => {
                const missionItems = t('visimisi.mission.items', { returnObjects: true }) as string[];
                return missionItems.map((mission, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="text-amber-500 font-bold text-4xl mb-4 opacity-50">{String(idx + 1).padStart(2, '0')}</div>
                    <p className="text-gray-700 text-lg leading-relaxed">{mission}</p>
                  </div>
                ));
              })()}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-950" />
              </div>
              <h2 className="text-3xl font-bold text-blue-950">{t('visimisi.objectives.title')}</h2>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {(() => {
                  const objectiveItems = t('visimisi.objectives.items', { returnObjects: true }) as string[];
                  return objectiveItems.map((objective, idx) => (
                    <li key={idx} className="p-6 md:p-8 flex items-start hover:bg-gray-50 transition-colors">
                      <CheckCircle className="w-6 h-6 text-blue-800 mr-4 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{objective}</p>
                    </li>
                  ));
                })()}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
