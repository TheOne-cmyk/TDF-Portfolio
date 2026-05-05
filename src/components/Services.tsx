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
                ? 'Analyse gratuite pour tous les nouveaux clients !'
                : 'Free analysis for all new clients!'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
