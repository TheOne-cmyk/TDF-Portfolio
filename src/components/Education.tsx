import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { FaGlobe, FaBolt, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const Education = () => {
  const education = [
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
  ];

  const certifications = [
    {
      name: 'Développement Web Responsive',
      platform: 'freeCodeCamp',
      type: 'Certification gratuite',
      icon: FaGlobe
    },
    {
      name: 'JavaScript Algorithms',
      platform: 'freeCodeCamp',
      type: 'Certification gratuite',
      icon: SiJavascript
    },
    {
      name: 'React Frontend',
      platform: 'Youtube',
      type: 'Cours en ligne',
      icon: FaReact
    },
    {
      name: 'Git & GitHub',
      platform: 'Codecademy',
      type: 'Formation en ligne',
      icon: FaGitAlt
    }
  ];

  return (
    <section id="formations" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll opacity-0">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">
              Formations & Certifications
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Mon parcours académique et mes certifications professionnelles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formations */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center dark:text-gray-100">
                <GraduationCap className="mr-3 text-blue-600" size={28} />
                Formations Académiques
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => {
                  const IconComponent = edu.icon;
                  return (
                    <div key={index} className="relative">
                      {/* Timeline line */}
                      {index < education.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-200 dark:bg-gray-800"></div>
                      )}
                      
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          edu.current ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
                        }`}>
                          <IconComponent size={24} />
                        </div>
                        
                        <div className="flex-1 bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-200 dark:bg-gray-900 dark:hover:bg-gray-800">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{edu.degree}</h4>
                            {edu.current && (
                              <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                                En cours
                              </span>
                            )}
                          </div>
                          <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                          <div className="flex items-center text-gray-500 text-sm mb-3 dark:text-gray-400">
                            <Calendar size={16} className="mr-2" />
                            {edu.period} • {edu.status}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center dark:text-gray-100">
                <Award className="mr-3 text-blue-600" size={28} />
                Certifications & Formations
              </h3>
              
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-200 hover:shadow-lg dark:from-gray-900 dark:to-gray-900 dark:border-gray-800">
                      <div className="flex items-start space-x-4">
                        <div className="text-blue-600">
                          <IconComponent size={28} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1 dark:text-gray-100">{cert.name}</h4>
                          <p className="text-blue-600 font-medium text-sm mb-1">{cert.platform}</p>
                          <span className="inline-block bg-blue-100 dark:bg-blue-900/20 text-blue-600 px-2 py-1 rounded text-xs">
                            {cert.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Plateformes d'apprentissage */}
              <div className="mt-8 bg-gray-50 p-6 rounded-xl dark:bg-gray-900">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center dark:text-gray-100">
                  <BookOpen className="mr-2 text-blue-600" size={20} />
                  Plateformes d'apprentissage
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['freeCodeCamp', 'Coursera', 'Codecademy', 'OpenClassrooms', 'MDN Web Docs', 'W3Schools', 'YouTube'].map((platform, index) => (
                    <span key={index} className="bg-white text-gray-700 px-3 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200 dark:bg-gray-900 dark:text-gray-200 dark:border dark:border-gray-800">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;