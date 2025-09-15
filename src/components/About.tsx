import { Code, Heart, Target, Users } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="apropos" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll opacity-0">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu principal */}
            <div className="space-y-6">
              <div className="text-lg text-gray-700 leading-relaxed dark:text-gray-300 space-y-4">
                <p>{t('about.paragraph1')}</p>
                <p>{t('about.paragraph2')}</p>
                <p>{t('about.paragraph3')}</p>
              </div>

              {/* Informations personnelles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      {t('about.location')}:
                    </span>{' '}
                    <span className="text-gray-700 dark:text-gray-300">Douala, Cameroun</span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      {t('about.education')}:
                    </span>{' '}
                    <span className="text-gray-700 dark:text-gray-300">BTS en Génie Logiciel</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      {t('about.experience')}:
                    </span>{' '}
                    <span className="text-gray-700 dark:text-gray-300">2 {t('about.years')}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      {t('about.projects')}:
                    </span>{' '}
                    <span className="text-gray-700 dark:text-gray-300">10+ {t('about.completed')}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Valeurs et motivations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl dark:bg-blue-900/20">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">
                  {t('about.qualityDev')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('about.qualityDevDesc')}
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl dark:bg-blue-900/20">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">
                  {t('about.teamwork')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('about.teamworkDesc')}
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl dark:bg-blue-900/20">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">
                  {t('about.userCentric')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('about.userCentricDesc')}
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl dark:bg-blue-900/20">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">
                  {t('about.collaboration')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('about.collaborationDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;