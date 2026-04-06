import { motion } from "motion/react";
import { MapPin, Building2, Map as MapIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PetaKampus() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">{t('peta.hero.title')}</h1>
            <p className="text-lg max-w-2xl mx-auto">{t('peta.hero.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-900 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Building2 className="w-7 h-7 text-blue-900" />
                </div>
                <h2 className="text-2xl font-bold text-blue-950">{t('peta.main-campus.title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed flex items-start text-lg">
                <MapPin className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                <span>
                  <strong>{t('peta.main-campus.name')}</strong><br/>
                  {t('peta.main-campus.addressLine1')}<br/>
                  {t('peta.main-campus.addressLine2')}<br/>
                  {t('peta.main-campus.addressLine3')}
                </span>
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-amber-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <MapIcon className="w-7 h-7 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-blue-950">{t('peta.extension-campus.title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed flex items-start text-lg">
                <MapPin className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                <span>
                  <strong>{t('peta.extension-campus.name')}</strong><br/>
                  {t('peta.extension-campus.addressLine1')}<br/>
                  {t('peta.extension-campus.addressLine2')}<br/>
                  {t('peta.extension-campus.addressLine3')}
                </span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6 border-b border-gray-100 bg-blue-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-xl font-bold flex items-center text-amber-400">
                <MapPin className="w-6 h-6 mr-2" /> {t('peta.map.title')}
              </h3>
              <div className="flex items-center space-x-2 bg-blue-900/50 px-4 py-2 rounded-lg border border-blue-800">
                <span className="text-sm font-mono tracking-wider">{t('peta.map.latitude')}</span>
                <span className="text-blue-400">|</span>
                <span className="text-sm font-mono tracking-wider">{t('peta.map.longitude')}</span>
              </div>
            </div>
            <div className="w-full h-[500px] relative bg-gray-200">
              <iframe 
                src="https://maps.google.com/maps?q=-5.468540,122.625796&hl=id&z=16&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Kampus ITPPN Buton"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
