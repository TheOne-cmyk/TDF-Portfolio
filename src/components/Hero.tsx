import { ArrowRight, Eye, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { useTranslation } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useTranslation();
  
  const typingText = useTypingEffect([
    t('hero.typing1'),
    t('hero.typing2'),
    t('hero.typing3')
  ], 100, 2000);

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-4 lg:py-8 dark:from-gray-900 dark:to-gray-950">
      {/* Éléments décoratifs flottants - version plus subtile */}
      <div className="absolute top-10 left-5 lg:top-16 lg:left-16 w-14 h-14 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-1/4 right-8 lg:right-20 w-10 h-10 bg-blue-300 rounded-lg opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-16 lg:bottom-28 lg:left-32 w-16 h-16 bg-blue-400 rounded-full opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12">
          {/* Contenu principal - Prend plus d'espace sur desktop */}
          <div className="w-full lg:w-7/12 xl:w-8/12 text-center lg:text-left">
            <div className="mb-4 lg:mb-6">
              <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 rounded-full text-xs font-medium mb-3 lg:mb-4">
                {t('hero.title')}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 lg:mb-3 dark:text-gray-100">
                <span className="text-blue-600 block">Tsobgou Dongmo</span>
                <span className="text-gray-800 text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-gray-200">Francis Warren</span>
              </h1>
              
              {/* Effet de typing */}
              <div className="h-7 lg:h-8 mb-4 lg:mb-6 flex justify-center lg:justify-start">
                <p className="text-base lg:text-lg text-blue-600 font-medium inline-flex items-center">
                  {typingText}
                  <span className="animate-pulse ml-1">|</span>
                </p>
              </div>
              
              {/* Description concise */}
              <p className="text-gray-600 text-sm lg:text-base max-w-2xl mx-auto lg:mx-0 mb-4 lg:mb-6 dark:text-gray-300">
                {t('hero.description')}
              </p>
            </div>

            {/* Statistiques modernes - alignées horizontalement */}
            <div className="flex justify-center lg:justify-start gap-3 lg:gap-4 mb-6 lg:mb-8">
              <div className="bg-white p-2 lg:p-3 rounded-lg shadow-sm border border-blue-100 flex flex-col items-center min-w-[80px] lg:min-w-[90px] dark:bg-gray-900 dark:border-gray-800">
                <div className="text-xl lg:text-2xl font-bold text-blue-600 mb-1">2+</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Ans d'expérience</div>
              </div>
              <div className="bg-white p-2 lg:p-3 rounded-lg shadow-sm border border-blue-100 flex flex-col items-center min-w-[80px] lg:min-w-[90px] dark:bg-gray-900 dark:border-gray-800">
                <div className="text-xl lg:text-2xl font-bold text-blue-600 mb-1">8+</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Projets réalisés</div>
              </div>
              <div className="bg-white p-2 lg:p-3 rounded-lg shadow-sm border border-blue-100 flex flex-col items-center min-w-[80px] lg:min-w-[90px] dark:bg-gray-900 dark:border-gray-800">
                <div className="text-xl lg:text-2xl font-bold text-blue-600 mb-1">85%</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Satisfaction</div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projets"
                className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 group shadow-md hover:shadow-lg"
              >
                {t('hero.viewProjects')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Mail className="mr-2 w-5 h-5" />
                {t('hero.contactMe')}
              </a>
              <a
                href="/cv.pdf"
                className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200 shadow-sm hover:shadow-md dark:bg-gray-900 dark:text-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="mr-2 w-5 h-5" />
                {t('hero.viewCV')}
              </a>
            </div>
          </div>

          {/* Section visuelle moderne - Prend moins d'espace sur desktop */}
          <div className="w-full lg:w-5/12 xl:w-4/12 flex justify-center relative mt-4 lg:mt-0">
            <div className="relative w-full max-w-xs lg:max-w-sm">
              {/* Carte principale avec effet 3D */}
              <div className="bg-white rounded-xl p-5 shadow-lg border border-blue-100 transform transition-all duration-500 hover:shadow-md z-20 relative dark:bg-gray-900 dark:border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-lg lg:text-xl font-bold text-white">  &lt;/&gt; </span>
                  </div>
                  <div className="ml-3">
                    <h2 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100">TDFW</h2>
                    <p className="text-blue-600 text-xs lg:text-sm">{t('hero.fullStackDeveloper')}</p>
                  </div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent my-4"></div>
                
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide dark:text-gray-400">{t('hero.expertise')}</h3>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 text-xs font-medium rounded-full">React</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 text-xs font-medium rounded-full">PHP</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 text-xs font-medium rounded-full">PostgréSQL</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 text-xs font-medium rounded-full">Tailwind</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 lg:w-2 lg:h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <p className="text-xs text-gray-600 dark:text-gray-300">{t('hero.availableForNewProjects')}</p>
                </div>
                
                {/* Icônes des réseaux sociaux en bas de la carte */}
                <div className="flex justify-center gap-2 pt-3 border-t border-blue-100 dark:border-gray-800">
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/20 group">
                    <Github className="w-3 h-3 lg:w-4 lg:h-4 text-gray-700 group-hover:text-blue-600" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/20 group">
                    <Linkedin className="w-3 h-3 lg:w-4 lg:h-4 text-gray-700 group-hover:text-blue-600" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/20 group">
                    <Twitter className="w-3 h-3 lg:w-4 lg:h-4 text-gray-700 group-hover:text-blue-600" />
                  </a>
                </div>
              </div>
              
              {/* Éléments flottants décoratifs */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-xl opacity-30 z-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-blue-200 rounded-xl opacity-20 z-10 animate-float" style={{ animationDelay: '2.5s' }}></div>
              
              {/* Code flottant décoratif */}
              <div className="absolute -bottom-5 right-2 lg:-bottom-6 lg:right-3 bg-white p-1 lg:p-2 rounded border border-blue-100 transform rotate-3 z-30 shadow-sm dark:bg-gray-900 dark:border-gray-800">
                <div className="text-[10px] text-gray-700 font-mono dark:text-gray-300">
                  <div className="text-blue-600">{t('hero.function')}</div>
                  <div className="ml-3"><span className="text-purple-600">{t('hero.create')}</span><span className="text-blue-600">{t('hero.project')}</span>() {'{'}</div>
                  <div className="ml-6"><span className="text-green-600">{t('hero.return')}</span> <span className="text-yellow-600">{t('hero.success')}</span>;</div>
                  <div className="text-blue-600">function</div>
                  <div className="ml-3"><span className="text-purple-600">create</span><span className="text-blue-600">Project</span>() {'{'}</div>
                  <div className="ml-6"><span className="text-green-600">return</span> <span className="text-yellow-600">"success"</span>;</div>
                  <div className="ml-3">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;