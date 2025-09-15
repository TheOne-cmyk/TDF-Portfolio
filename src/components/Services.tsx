import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const services = [
  {
    title: {
      fr: 'Développement Front-End',
      en: 'Front-End Development',
    },
    description: {
      fr: 'Interfaces modernes, rapides et accessibles avec React et Tailwind CSS.',
      en: 'Modern, fast, and accessible interfaces with React and Tailwind CSS.',
    },
    features: [
      { fr: 'React/Next.js', en: 'React/Next.js' },
      { fr: 'Design responsive', en: 'Responsive design' },
      { fr: 'Performance et SEO', en: 'Performance and SEO' },
    ],
  },
  {
    title: {
      fr: 'Développement Back-End',
      en: 'Back-End Development',
    },
    description: {
      fr: 'APIs robustes et sécurisées, bases de données et logique métier.',
      en: 'Robust and secure APIs, databases, and business logic.',
    },
    features: [
      { fr: 'Node/PHP', en: 'Node/PHP' },
      { fr: 'REST APIs', en: 'REST APIs' },
      { fr: 'Bases de données SQL', en: 'SQL Databases' },
    ],
  },
  {
    title: {
      fr: 'Intégration et Déploiement',
      en: 'Integration & Deployment',
    },
    description: {
      fr: 'Mise en ligne fiable et automatisée sur des environnements cloud.',
      en: 'Reliable and automated deployment to cloud environments.',
    },
    features: [
      { fr: 'CI/CD', en: 'CI/CD' },
      { fr: 'Docker', en: 'Docker' },
      { fr: 'Hébergements modernes', en: 'Modern hosting' },
    ],
  },
  {
    title: {
      fr: 'Design Graphique',
      en: 'Graphic Design',
    },
    description: {
      fr: 'Création d’identités visuelles et supports imprimés de haute qualité.',
      en: 'Creation of visual identities and high-quality print materials.',
    },
    features: [
      { fr: 'Flyers, affiches, bannières, pancartes, plaques', en: 'Flyers, posters, banners, signs, plaques' },
      { fr: 'Cartes de visite et de mariage', en: 'Business and wedding cards' },
      { fr: 'Montages photos, banderoles', en: 'Photo montages, banners' },
      { fr: 'Logos et chartes graphiques', en: 'Logos and graphic charters' },
    ],
  },
  {
    title: {
      fr: 'Maquettes et Design Patterns (Figma)',
      en: 'Mockups & Design Patterns (Figma)',
    },
    description: {
      fr: 'Conception de maquettes visuelles et systèmes de design réutilisables.',
      en: 'Design of visual mockups and reusable design systems.',
    },
    features: [
      { fr: 'Wireframes et prototypes interactifs', en: 'Wireframes and interactive prototypes' },
      { fr: 'Design System et UI Kit', en: 'Design System and UI Kit' },
      { fr: 'Design patterns cohérents avec Figma', en: 'Consistent design patterns with Figma' },
    ],
  },
];

const sampleWorks = [
  {
    title: {
      fr: 'Vente de Tableau blanc',
      en: 'Whiteboard Sale',
    },
    image: '/images/services/flyer vente tableau blanc.png',
    link: '/images/services/flyer vente tableau blanc.png'
  },
  {
    title: {
      fr: 'Mes Services',
      en: 'My Services',
    },
    image: '/images/services/ma_pub_1.png',
    link: '/images/services/ma_pub_1.png'
  },
  {
    title: {
      fr: 'Logo Minimaliste',
      en: 'Minimalist Logo',
    },
    image: '/images/services/logo Immo237.png',
    link: '/images/services/logo Immo237.png'
  },
  {
    title: {
      fr: "Location d'accessoires",
      en: 'Accessories Rental',
    },
    image: '/images/services/Flyer NL déco.png',
    link: '/images/services/Flyer NL déco.png'
  },
  {
    title: {
      fr: 'Vente de boissons',
      en: 'Drink Sale',
    },
    image: '/images/services/flyer vente de boissons.png',
    link: '/images/services/flyer vente de boisoons.png'
  },
  {
    title: {
      fr: 'Patisserie',
      en: 'Pastry',
    },
    image: '/images/services/flyer-gateau.png',
    link: '/images/services/flyer-gateau.png'
  },
  {
    title: {
      fr: 'Bonne rentrée scolaire',
      en: 'Happy Back to School',
    },
    image: '/images/services/Bonne rentrée scolaire.png',
    link: '/images/services/Bonne rentrée scolaire.png'
  },
  {
    title: {
      fr: 'Mes Services',
      en: 'My Services',
    },
    image: '/images/services/My_servs.png',
    link: '/images/services/My_servs.png'
  }
];

const Services: React.FC = () => {
  const { language } = useTranslation();
  return (
    <section id="services" className="py-20 bg-gray-50 animate-on-scroll dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">
            {language === 'fr' ? 'Services' : 'Services'}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            {language === 'fr'
              ? 'Je propose des solutions complètes, de la conception à la mise en production. Et parallèlement des services de design graphiques.'
              : 'I offer complete solutions, from design to production. Also, graphic design services.'}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl border border-blue-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 dark:bg-gray-900 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{service.title[language]}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{service.description[language]}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature[language]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 dark:text-gray-100">{language === 'fr' ? 'Quelques réalisations' : 'Some Works'}</h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              {language === 'fr' ? 'Ici vous avez un aperçu de quelques unes de mes réalisations graphiques' : 'Here is a preview of some of my graphic works'}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sampleWorks.map((work, index) => (
              <a key={index} href={work.link} className="group block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 dark:bg-gray-900 dark:border-gray-800">
                <div className="relative h-40 bg-gray-100 dark:bg-gray-800">
                  <img src={work.image} alt={work.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200"></div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 dark:text-gray-100">{work.title[language]}</h4>
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
