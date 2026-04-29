import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';
import { Code2, Globe, Wrench, Palette, CheckCircle2, ExternalLink } from 'lucide-react';

const serviceIcons = [Code2, Globe, Wrench, Palette];

const services = [
  {
    icon: Code2,
    gradient: 'from-indigo-500 to-violet-600',
    glow: 'rgba(99,102,241,0.3)',
    title: { fr: 'Développement de Logiciels (SaaS)', en: 'Software Development (SaaS)' },
    description: {
      fr: 'Automatisation de vos processus métiers, gestion de stocks et analyse de données avec des technologies robustes comme Laravel et React.',
      en: 'Automation of business processes, inventory management, and data analytics with robust technologies like Laravel and React.',
    },
    features: [
      { fr: 'Automatisation & workflows', en: 'Automation & workflows' },
      { fr: 'Tableaux de bord & analytics', en: 'Dashboards & analytics' },
      { fr: 'Auth, rôles, sécurité', en: 'Auth, roles, security' },
    ],
  },
  {
    icon: Globe,
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.3)',
    title: { fr: 'Sites Vitrines Haute Performance', en: 'High-Performance Showcase Websites' },
    description: {
      fr: 'Création de sites web rapides, sécurisés et optimisés pour le SEO, garantissant une visibilité maximale sur Google.',
      en: 'Fast, secure, SEO-optimized websites designed to maximize your visibility on Google.',
    },
    features: [
      { fr: 'SEO technique & contenu', en: 'Technical & content SEO' },
      { fr: 'Performance & accessibilité', en: 'Performance & accessibility' },
      { fr: 'Sécurité & bonnes pratiques', en: 'Security & best practices' },
    ],
  },
  {
    icon: Wrench,
    gradient: 'from-orange-500 to-amber-500',
    glow: 'rgba(249,115,22,0.3)',
    title: { fr: 'Maintenance & Optimisation', en: 'Maintenance & Optimization' },
    description: {
      fr: 'Audit de performance, mise à jour de sécurité et amélioration continue pour que votre outil reste votre meilleur atout 24h/24.',
      en: 'Performance audits, security updates, and continuous improvements so your product stays your best asset 24/7.',
    },
    features: [
      { fr: 'Corrections & évolutions', en: 'Fixes & improvements' },
      { fr: 'Monitoring & stabilité', en: 'Monitoring & reliability' },
      { fr: 'Optimisation SEO/perf', en: 'SEO/performance optimization' },
    ],
  },
  {
    icon: Palette,
    gradient: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.3)',
    title: { fr: 'Design Graphique & Branding', en: 'Graphic Design & Branding' },
    description: {
      fr: 'Création d\'identités visuelles percutantes et de supports de communication (logos, bannières, affiches) pour renforcer l\'image de votre marque.',
      en: 'Creation of striking visual identities and communication materials (logos, banners, posters) to strengthen your brand image.',
    },
    features: [
      { fr: 'Charte visuelle & logo', en: 'Visual identity & logo' },
      { fr: 'Bannières & affiches', en: 'Banners & posters' },
      { fr: 'Stratégie de branding', en: 'Branding strategy' },
    ],
  },
];

const sampleWorks = [
  { title: { fr: 'Meilleures Crêpes', en: 'Best Crepes' }, image: '/images/services/best crepes.webp', link: '/images/services/best crepes.webp' },
  { title: { fr: 'Étiquettes Jus', en: 'Juice Labels' }, image: '/images/services/ettiquettes jus.webp', link: '/images/services/ettiquettes jus.webp' },
  { title: { fr: 'Soirée Blackout', en: 'Blackout Party' }, image: '/images/services/flyer blackout party.webp', link: '/images/services/flyer blackout party.webp' },
  { title: { fr: 'Etiquette de jus', en: 'Juice Label' }, image: '/images/services/juice etiquette.webp', link: '/images/services/juice etiquette.webp' },
  { title: { fr: 'Jus Lety', en: 'Lety Juice' }, image: '/images/services/flyer jus lety.webp', link: '/images/services/flyer jus lety.webp' },
  { title: { fr: 'Vente tableau blanc', en: 'Whiteboard Sale' }, image: '/images/services/flyer vente tableau blanc.webp', link: '/images/services/flyer vente tableau blanc.webp' },
  { title: { fr: 'Arielo', en: 'Arielo' }, image: '/images/services/flyr arielo.webp', link: '/images/services/flyr arielo.webp' },
  { title: { fr: 'Cuisine Délice', en: 'Delicious Cuisine' }, image: '/images/services/flyer cuisine.webp', link: '/images/services/flyer cuisine.webp' },
];

const Services: React.FC = () => {
  const { language } = useTranslation();

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-50 dark:bg-[#080d18]" />
      <div
        className="orb absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-3"
          >
            {language === 'fr' ? 'Ce que je fais' : 'What I do'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-4"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            {language === 'fr'
              ? 'Des services pensés pour générer des résultats concrets : automatiser, gagner en visibilité et maintenir des performances élevées.'
              : 'Services designed for real outcomes: automate, increase visibility, and keep performance high.'}
          </motion.p>
          <div className="section-divider" />
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl overflow-hidden
                           glass-card
                           hover:shadow-card-hover dark:hover:shadow-card-dark-hover
                           transition-all duration-300"
              >
                {/* Glow blob and hover effects kept without top border line */}

                {/* Glow blob */}
                <div
                  className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl pointer-events-none"
                  style={{ background: service.glow }}
                />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-5 shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300">
                  <Icon size={22} className="text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200">
                  {service.title[language as 'fr' | 'en']}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  {service.description[language as 'fr' | 'en']}
                </p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle2 size={14} className="text-primary-500 flex-shrink-0" />
                      {feature[language as 'fr' | 'en']}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Graphic Works Gallery */}
        <div>
          <div className="text-center mb-10">
            <motion.h3
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2"
            >
              {language === 'fr' ? 'Réalisations Graphiques' : 'Graphic Design Works'}
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xl mx-auto">
              {language === 'fr'
                ? 'Un aperçu de quelques-unes de mes créations — flyers, étiquettes, visuels marketing.'
                : 'A preview of some of my graphic creations — flyers, labels, marketing visuals.'}
            </p>
            <div className="section-divider" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sampleWorks.map((work, index) => (
              <motion.a
                key={index}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative block rounded-xl overflow-hidden
                           glass-card
                           hover:shadow-card-hover dark:hover:shadow-card-dark-hover
                           transition-all duration-300"
              >
                <div className="relative h-44 bg-gray-100 dark:bg-white/5 overflow-hidden">
                  <img
                    src={work.image}
                    alt={`${language === 'fr' ? 'Création graphique' : 'Graphic design'}: ${work.title[language as 'fr' | 'en']}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <ExternalLink size={13} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {work.title[language as 'fr' | 'en']}
                  </h4>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Free Analysis Promo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-primary-200 dark:border-primary-800/30">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-white dark:border-gray-900"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <svg className="w-3 h-3 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {language === 'fr'
                ? 'Développement et analyse gratuits pour tous les nouveaux clients !'
                : 'Development and analysis are free for all new clients!'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
