import React from 'react';

const services = [
  {
    title: 'Développement Front-End',
    description: 'Interfaces modernes, rapides et accessibles avec React et Tailwind CSS.',
    features: ['React/Next.js', 'Design responsive', 'Performance et SEO']
  },
  {
    title: 'Développement Back-End',
    description: 'APIs robustes et sécurisées, bases de données et logique métier.',
    features: ['Node/PHP', 'REST APIs', 'Bases de données SQL']
  },
  {
    title: 'Intégration et Déploiement',
    description: 'Mise en ligne fiable et automatisée sur des environnements cloud.',
    features: ['CI/CD', 'Docker', 'Hébergements modernes']
  },
  {
    title: 'Design Graphique',
    description: 'Création d’identités visuelles et supports imprimés de haute qualité.',
    features: [
      'Flyers, affiches, bannières, pancartes, plaques',
      'Cartes de visite et de mariage',
      'Montages photos, banderoles',
      'Logos et chartes graphiques'
    ]
  },
  {
    title: 'Maquettes et Design Patterns (Figma)',
    description: 'Conception de maquettes visuelles et systèmes de design réutilisables.',
    features: [
      'Wireframes et prototypes interactifs',
      'Design System et UI Kit',
      'Design patterns cohérents avec Figma'
    ]
  }
];

const sampleWorks = [
  {
    title: 'Flyer patisserie',
    image: '/images/services/flyer-gateau.png',
    link: '/images/services/flyer-gateau.png'
  },
  {
    title: 'Flyer Service',
    image: '/images/services/ma_pub_1.png',
    link: '/images/services/ma_pub_1.png'
  },
  {
    title: 'Affiche Service',
    image: '/images/services/ma_pub_2.png',
    link: '/images/services/ma_pub_2.png'
  },
  {
    title: 'Logo Minimaliste',
    image: '/images/services/logo_amos.png',
    link: '/images/services/logo_amos.png'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 animate-on-scroll dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Je propose des solutions complètes, de la conception à la mise en production. Et parallèlement des services de design graphiques.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl border border-blue-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 dark:bg-gray-900 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{service.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 dark:text-gray-100">Quelques réalisations</h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Ici vous avez un aperçu de quelques unes de mes réalisations graphiques
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sampleWorks.map((work, index) => (
              <a key={index} href={work.link} className="group block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 dark:bg-gray-900 dark:border-gray-800">
                <div className="relative h-40 bg-gray-100 dark:bg-gray-800">
                  <img src={work.image} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200"></div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 dark:text-gray-100">{work.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
