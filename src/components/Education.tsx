import { useTranslation } from '../contexts/LanguageContext';
import { GraduationCap, Award, Calendar, BookOpen, ExternalLink } from 'lucide-react';
import { FaGlobe, FaReact, FaGitAlt, FaFreeCodeCamp, FaYoutube } from 'react-icons/fa';
import { SiJavascript, SiCodecademy } from 'react-icons/si';

const Education = () => {
  const { language } = useTranslation();
  
  const education = language === 'fr' ? [
    {
      degree: 'BTS en Génie Logiciel',
      institution: 'Institut Universitaire du Golfe de Guinée',
      period: '2025',
      status: 'Obtenu',
      description: 'Formation approfondie en développement logiciel, programmation et systèmes informatiques.',
      icon: GraduationCap,
      current: false
    },
    {
      degree: 'Baccalauréat',
      institution: 'Collège La Roche',
      period: '2023',
      status: 'Obtenu',
      description: 'Baccalauréat Scientifique (Série C).',
      icon: Award,
      current: false
    }
  ] : [
    {
      degree: 'HND in Software Engineering',
      institution: 'University Institute of the Gulf of Guinea',
      period: '2025',
      status: 'Obtained',
      description: 'In-depth training in software development, programming, and computer systems.',
      icon: GraduationCap,
      current: false
    },
    {
      degree: 'High School Diploma',
      institution: 'La Roche College',
      period: '2023',
      status: 'Obtained',
      description: 'Scientific Baccalaureate (Series C).',
      icon: Award,
      current: false
    }
  ];

  const certifications = language === 'fr' ? [
    {
      name: 'Développement Web Responsive',
      platform: 'freeCodeCamp',
      type: 'Certification',
      icon: FaGlobe,
      platformIcon: FaFreeCodeCamp,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      name: 'JavaScript Algorithms',
      platform: 'freeCodeCamp',
      type: 'Certification',
      icon: SiJavascript,
      platformIcon: FaFreeCodeCamp,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      name: 'React Frontend',
      platform: 'YouTube',
      type: 'Cours en ligne',
      icon: FaReact,
      platformIcon: FaYoutube,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      name: 'Git & GitHub',
      platform: 'Codecademy',
      type: 'Formation',
      icon: FaGitAlt,
      platformIcon: SiCodecademy,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ] : [
    {
      name: 'Responsive Web Development',
      platform: 'freeCodeCamp',
      type: 'Certification',
      icon: FaGlobe,
      platformIcon: FaFreeCodeCamp,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      name: 'JavaScript Algorithms',
      platform: 'freeCodeCamp',
      type: 'Certification',
      icon: SiJavascript,
      platformIcon: FaFreeCodeCamp,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      name: 'React Frontend',
      platform: 'YouTube',
      type: 'Online course',
      icon: FaReact,
      platformIcon: FaYoutube,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      name: 'Git & GitHub',
      platform: 'Codecademy',
      type: 'Training',
      icon: FaGitAlt,
      platformIcon: SiCodecademy,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  return (
    <section id="formations" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll opacity-0">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4 dark:bg-blue-900/30 dark:text-blue-300">
              <BookOpen size={16} className="mr-2" />
              {language === 'fr' ? 'Mon parcours' : 'My journey'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-gray-100">
              {language === 'fr' ? 'Formation & Certifications' : 'Education & Certifications'}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              {language === 'fr' 
                ? 'Mon parcours académique et les certifications qui ont renforcé mes compétences' 
                : 'My academic background and the certifications that strengthened my skills'}
            </p>
          </div>

          {/* Diplômes & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Diplômes */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {language === 'fr' ? 'Parcours Académique' : 'Academic Background'}
                </h3>
              </div>
              
              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800/50"></div>
                
                <div className="space-y-10">
                  {education.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="relative pl-20">
                        <div className="absolute left-6 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 flex items-center justify-center z-10">
                          <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 dark:bg-gray-900">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{item.degree}</h3>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                              {item.status}
                            </span>
                          </div>
                          
                          <p className="text-blue-600 font-medium dark:text-blue-400 mb-2">{item.institution}</p>
                          
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <Calendar size={16} className="mr-2" />
                            {item.period}
                          </div>
                          
                          <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                  <Award className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {language === 'fr' ? 'Certifications' : 'Certifications'}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, idx) => {
                  const Icon = cert.icon;
                  const PlatformIcon = cert.platformIcon;
                  
                  return (
                    <div key={idx} className="relative">
                      <div className="relative bg-white rounded-xl shadow-gray-200 shadow-md p-5 h-full dark:bg-gray-900 dark:shadow-gray-800">
                        <div className="flex justify-between items-start mb-4">
                          <div className={`w-12 h-12 rounded-lg ${cert.bgColor} flex items-center justify-center`}>
                            <Icon size={24} className={cert.color} />
                          </div>
                          <div className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400">
                            <PlatformIcon size={14} className="mr-1" />
                            {cert.platform}
                          </div>
                        </div>
                        
                        <h4 className="font-bold text-gray-900 mb-2 dark:text-gray-100">{cert.name}</h4>
                        
                        <div className="flex justify-between items-center mt-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                            {cert.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 dark:from-blue-900/20 dark:to-purple-900/20">
                <h4 className="font-bold text-gray-900 mb-2 dark:text-gray-100">
                  {language === 'fr' ? 'Apprentissage continu' : 'Continuous learning'}
                </h4>
                <p className="text-gray-700 text-sm dark:text-gray-300">
                  {language === 'fr' 
                    ? 'Je continue à me former sur les nouvelles technologies et frameworks modernes.' 
                    : 'I continue to train on new technologies and modern frameworks.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;