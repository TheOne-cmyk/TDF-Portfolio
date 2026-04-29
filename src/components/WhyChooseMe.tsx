import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Layers, MapPin } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const WhyChooseMe: React.FC = () => {
  const { language } = useTranslation();
  return (
    <section id="pourquoi" className="py-16 md:py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">
              {language === 'fr' ? 'Pourquoi me choisir ?' : 'Why choose me?'}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              {language === 'fr' ? 'Une approche orientée performance, clarté et résultats.' : 'A performance, clarity, and results-oriented approach.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm dark:bg-gray-900 dark:border-gray-800">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                <Clock size={22} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-gray-100">
                {language === 'fr' ? 'Performance mesurable.' : 'Measurable performance.'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'fr' ? 'Mes créations atteignent des scores de performance supérieurs à 90% sur Google PageSpeed.' : 'My creations achieve performance scores above 90% on Google PageSpeed.'}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm dark:bg-gray-900 dark:border-gray-800">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                <Layers size={22} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-gray-100">
                {language === 'fr' ? 'Expertise Double.' : 'Dual Expertise.'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'fr' ? 'Une maîtrise du Design UI/UX alliée à la puissance du développement Full-Stack : un seul interlocuteur pour tout votre projet.' : 'UI/UX Design mastery combined with Full-Stack development power: a single contact for your entire project.'}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm dark:bg-gray-900 dark:border-gray-800">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                <MapPin size={22} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-gray-100">
                {language === 'fr' ? 'Accompagnement Local.' : 'Local Support.'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'fr' ? 'Je ne livre pas seulement du code ; je vous accompagne dans l\'évolution de votre solution ici, au Québec.' : 'I don\'t just deliver code; I support you in the evolution of your solution locally.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
