import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, CheckCircle, Info } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Pendaftaran() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    phone: "",
    asalSekolah: "",
    prodi1: "",
    prodi2: ""
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(t('pendaftaran.alert-success'));
  };

  return (
    <div className="w-full">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/pensma.png')" }}
        >
          <div className="absolute inset-0 bg-blue-950/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">{t('pendaftaran.title')}</h1>
            <p className="text-lg max-w-2xl mx-auto">{t('pendaftaran.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-500">
                <h3 className="text-xl font-bold text-blue-950 mb-4 flex items-center"><Calendar className="mr-2 text-amber-500"/> {t('pendaftaran.schedule.title')}</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between border-b pb-2"><span>{t('pendaftaran.schedule.wave1')}</span> <span className="font-semibold">{t('pendaftaran.schedule.wave1-date')}</span></li>
                  <li className="flex justify-between border-b pb-2"><span>{t('pendaftaran.schedule.wave2')}</span> <span className="font-semibold">{t('pendaftaran.schedule.wave2-date')}</span></li>
                  <li className="flex justify-between"><span>{t('pendaftaran.schedule.wave3')}</span> <span className="font-semibold">{t('pendaftaran.schedule.wave3-date')}</span></li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-800">
                <h3 className="text-xl font-bold text-blue-950 mb-4 flex items-center"><CheckCircle className="mr-2 text-blue-800"/> {t('pendaftaran.requirements.title')}</h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>{t('pendaftaran.requirements.item1')}</li>
                  <li>{t('pendaftaran.requirements.item2')}</li>
                  <li>{t('pendaftaran.requirements.item3')}</li>
                  <li>{t('pendaftaran.requirements.item4')}</li>
                  <li>{t('pendaftaran.requirements.item5')}</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-blue-950 mb-6 border-b pb-4">{t('pendaftaran.form.title')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('pendaftaran.form.fullName.label')}</label>
                    <div className="flex items-center">
                      <input required type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder={t('pendaftaran.form.fullName.placeholder')} />
                      <div className="ml-2 text-gray-400 cursor-help" title={t('pendaftaran.form.fullName.help')}><Info className="w-5 h-5"/></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t('pendaftaran.form.email.label')}</label>
                      <div className="flex items-center">
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder={t('pendaftaran.form.email.placeholder')} />
                        <div className="ml-2 text-gray-400 cursor-help" title={t('pendaftaran.form.email.help')}><Info className="w-5 h-5"/></div>
                      </div>
                    </div>
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t('pendaftaran.form.phone.label')}</label>
                      <div className="flex items-center">
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder={t('pendaftaran.form.phone.placeholder')} />
                        <div className="ml-2 text-gray-400 cursor-help" title={t('pendaftaran.form.phone.help')}><Info className="w-5 h-5"/></div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('pendaftaran.form.school.label')}</label>
                    <div className="flex items-center">
                      <input required type="text" name="asalSekolah" value={formData.asalSekolah} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder={t('pendaftaran.form.school.placeholder')} />
                      <div className="ml-2 text-gray-400 cursor-help" title={t('pendaftaran.form.school.help')}><Info className="w-5 h-5"/></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t('pendaftaran.form.program1.label')}</label>
                      <div className="flex items-center">
                        <select required name="prodi1" value={formData.prodi1} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white">
                          <option value="">{t('pendaftaran.form.program1.placeholder')}</option>
                          <option value="Pendidikan Geografi">{t('nav.education-geography')}</option>
                          <option value="Pendidikan Matematika">{t('nav.education-mathematics')}</option>
                          <option value="Pendidikan Olahraga">{t('nav.education-physical')}</option>
                          <option value="PGSD">{t('nav.education-elementary')}</option>
                          <option value="Informatika">{t('nav.informatics')}</option>
                        </select>
                        <div className="ml-2 text-gray-400 cursor-help" title={t('pendaftaran.form.program1.help')}><Info className="w-5 h-5"/></div>
                      </div>
                    </div>
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t('pendaftaran.form.program2.label')}</label>
                      <div className="flex items-center">
                        <select name="prodi2" value={formData.prodi2} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white">
                          <option value="">{t('pendaftaran.form.program2.placeholder')}</option>
                          <option value="Pendidikan Geografi">{t('nav.education-geography')}</option>
                          <option value="Pendidikan Matematika">{t('nav.education-mathematics')}</option>
                          <option value="Pendidikan Olahraga">{t('nav.education-physical')}</option>
                          <option value="PGSD">{t('nav.education-elementary')}</option>
                          <option value="Informatika">{t('nav.informatics')}</option>
                        </select>
                        <div className="ml-2 text-gray-400 cursor-help" title={t('pendaftaran.form.program2.help')}><Info className="w-5 h-5"/></div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md transition-colors shadow-lg">
                      {t('pendaftaran.form.submit')}
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
