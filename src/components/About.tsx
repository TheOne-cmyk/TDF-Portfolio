import { motion } from 'framer-motion';
import { Code, Heart, Target, Users } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const values = [
  { icon: Code, key: 'qualityDev', gradient: 'from-blue-500 to-indigo-600' },
  { icon: Heart, key: 'teamwork', gradient: 'from-pink-500 to-rose-600' },
  { icon: Target, key: 'userCentric', gradient: 'from-orange-500 to-amber-500' },
  { icon: Users, key: 'collaboration', gradient: 'from-emerald-500 to-teal-600' },
];

const About = () => {
  const { t, language } = useTranslation();

  return (
    <section id="apropos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-[#0a0f1c]" />
      <div
        className="orb absolute w-[500px] h-[400px] top-0 right-0 opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-3"
          >
            {language === 'fr' ? 'À mon sujet' : 'About me'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-4"
          >
            {t('about.title')}
          </motion.h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.paragraph1')}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { labelKey: 'about.location', value: 'Rivière-du-Loup, QC' },
                { labelKey: 'about.education', value: 'BTS en Génie Logiciel' },
                { labelKey: 'about.experience', value: `2 ${t('about.years')}` },
                { labelKey: 'about.projects', value: `10+ ${t('about.completed')}` },
              ].map(({ labelKey, value }) => (
                <div
                  key={labelKey}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5"
                >
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1">
                    {t(labelKey)}
                  </p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, key, gradient }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative group p-5 rounded-2xl overflow-hidden
                            bg-white dark:bg-[#0f172a]
                            border border-gray-100 dark:border-white/5
                            shadow-card-light dark:shadow-card-dark
                            hover:shadow-card-hover dark:hover:shadow-card-dark-hover
                            hover:border-primary-200/60 dark:hover:border-primary-700/30
                            transition-all duration-300`}
              >


                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-glow-sm`}>
                  <Icon size={20} className="text-white" />
                </div>

                <h3 className="font-display font-semibold text-base text-gray-900 dark:text-white mb-2">
                  {t(`about.${key}`)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(`about.${key}Desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;