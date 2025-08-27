import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: 'Stagiaire au Service IT',
    company: 'Faya Hotel',
    location: 'Douala, Cameroun',
    period: 'Juillet 2024 - Août 2024',
    duration: 'Deux mois',
    description: 'Stage de formation pratique dans le domaine de l\'informatique et du développement d\'applications Web.',
    tasks: [
      'Conception et Réalisation d\'une application de gestion des équipements techniques',
      'Assistance dans la maintenance du réseau informatique de l\'hôtel',
      'Support technique et résolution de problèmes informatiques',
    
     
    ],
    skills: [
      'Développement d\'applications Web',
      'Bases pratique en réseau informatique',
      'Support technique',
      'Gestion des demandes de services',
      'Notions de base en maintenance informatique',
     
    ],
    achievements: [
      'Implémentation d\'une application de gestion des équipements techniques',
      'Amélioration de l\'efficacité opérationnelle de 30%',
      'Maintenances matérielles des desktops de l\'entreprise ', 
      'Maintenance du système de vidéo-surveillance de l\'hotel',
      'Mise en place d\'une solution logicielle de tri de données dans les fichiers',
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll opacity-0">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">
              Expérience Professionnelle
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Mon expérience pratique et les compétences développées en entreprise
            </p>
          </div>

          {/* Experience Card */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden dark:bg-gray-900">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <Briefcase size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                      <p className="text-xl text-blue-100 font-medium mb-2">{experience.company}</p>
                      <div className="flex flex-wrap gap-4 text-blue-100">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-lg">
                    <span className="font-medium">{experience.duration}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-700 text-lg mb-8 leading-relaxed dark:text-gray-300">
                  {experience.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Tâches principales */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 dark:text-gray-100">Tâches principales</h4>
                    <ul className="space-y-3">
                      {experience.tasks.map((task, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Réalisations */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 dark:text-gray-100">Réalisations clés</h4>
                    <ul className="space-y-3 mb-6">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Compétences développées */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 dark:text-gray-100">Compétences développées</h4>
                  <div className="flex flex-wrap gap-3">
                    {experience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-200 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4 dark:text-gray-300">
              Intéressé par mon profil ? Discutons de votre prochain projet !
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Briefcase className="mr-2 w-5 h-5" />
              Collaborons ensemble
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;