import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useRef } from 'react';

const Projects = () => {
  const { language } = useTranslation();
  const isExternalLink = (url: string) => /^https?:\/\//i.test(url);

  const caseStudies = language === 'fr'
    ? [
        {
          id: 1,
          title: 'BizTrack — Solution de Gestion Commerciale Intégrée.',
          description: 'Centralisation des ventes, des stocks et des indicateurs clés pour piloter l\'activité.',
          image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
          technologies: ['Laravel', 'React', 'PostgreSQL', 'Tailwind CSS'],
          githubUrl: 'https://github.com/TheOne-cmyk',
          liveUrl: 'https://biztrack237.vercel.app/',
          featured: true,
          challenge: 'Centraliser les ventes et les stocks pour éviter les pertes financières liées aux erreurs manuelles.',
          solution: 'Développement d\'un SaaS complet avec tableaux de bord analytiques et suivi en temps réel.',
          result: 'Une interface intuitive permettant une gestion simplifiée et une vision claire de la rentabilité.',
          accent: '#2563eb',
        },
        {
          id: 2,
          title: 'FixIT — Optimisation de la Maintenance d\'Équipements.',
          description: 'Suivi du parc matériel et centralisation des rapports techniques pour réduire les temps d\'arrêt.',
          image: 'https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=800',
          technologies: ['React', 'TypeScript', 'MySQL', 'Tailwind CSS'],
          githubUrl: 'https://github.com/TheOne-cmyk',
          liveUrl: '#',
          featured: false,
          challenge: 'Suivre efficacement l\'état du parc matériel d\'une entreprise pour réduire les temps d\'arrêt.',
          solution: 'Plateforme de rapport et de gestion de données techniques centralisée.',
          result: null,
          accent: '#3b82f6',
        },
      ]
    : [
        {
          id: 1,
          title: 'BizTrack — Integrated Commercial Management Solution.',
          description: 'Consolidating sales, inventory, and key metrics to better manage operations.',
          image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
          technologies: ['Laravel', 'React', 'PostgreSQL', 'Tailwind CSS'],
          githubUrl: 'https://github.com/TheOne-cmyk',
          liveUrl: 'https://biztrack237.vercel.app/',
          featured: true,
          challenge: 'Centralize sales and inventory to avoid financial losses caused by manual errors.',
          solution: 'Built a complete SaaS with analytical dashboards and real-time tracking.',
          result: 'An intuitive interface enabling simpler management and a clear view of profitability.',
          accent: '#2563eb',
        },
        {
          id: 2,
          title: 'FixIT — Equipment Maintenance Optimization.',
          description: 'Tracking equipment fleets and centralizing technical reports to reduce downtime.',
          image: 'https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=800',
          technologies: ['React', 'TypeScript', 'MySQL', 'Tailwind CSS'],
          githubUrl: 'https://github.com/TheOne-cmyk',
          liveUrl: '#',
          featured: false,
          challenge: 'Efficiently track an organization\'s equipment fleet to reduce downtime.',
          solution: 'Centralized reporting platform and technical data management.',
          result: null,
          accent: '#3b82f6',
        },
      ];

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id={language === 'fr' ? 'projets' : 'projects'} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-[#0a0f1c]" />
      <div
        className="orb absolute w-[450px] h-[450px] bottom-0 right-0 opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
      />

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-3"
          >
            {language === 'fr' ? 'Études de Cas' : 'Case Studies'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-4"
          >
            {language === 'fr' ? 'Mes Projets Phares' : 'Featured Work'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            {language === 'fr'
              ? 'Des exemples concrets pour montrer ma méthode : défi, solution, résultats.'
              : 'Concrete examples showing my approach: challenge, solution, outcomes.'}
          </motion.p>
          <div className="section-divider" />
        </div>

        {/* Mobile Carousel */}
        <div
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 -mx-4 px-4 scrollbar-hide"
        >
          {caseStudies.map((project, idx) => (
            <div key={project.id} className="flex-shrink-0 w-[85vw] snap-start">
              <ProjectCard project={project} language={language} isExternalLink={isExternalLink} idx={idx} />
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <ProjectCard project={project} language={language} isExternalLink={isExternalLink} idx={idx} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
            {language === 'fr'
              ? 'Vous avez aimé ces projets ? Découvrez mes autres réalisations sur GitHub.'
              : 'Liked these projects? Discover more on my GitHub profile.'}
          </p>
          <a
            href="https://github.com/TheOne-cmyk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                       bg-gray-900 dark:bg-white text-white dark:text-gray-900
                       hover:bg-gray-800 dark:hover:bg-gray-100
                       shadow-card-light hover:shadow-card-hover
                       transition-all duration-200 group"
          >
            <Github size={18} />
            {language === 'fr' ? 'Voir tous mes projets' : 'See all projects'}
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* ────────────────────────────────────────────────────────── */
/* Project Card Component                                     */
/* ────────────────────────────────────────────────────────── */
interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    featured: boolean;
    challenge: string;
    solution: string;
    result: string | null;
    accent: string;
  };
  language: string;
  isExternalLink: (url: string) => boolean;
  idx: number;
}

const ProjectCard = ({ project, language, isExternalLink }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`group relative rounded-2xl overflow-hidden h-full
                  bg-white dark:bg-[#0f172a]
                  border dark:border-white/5
                  shadow-card-light dark:shadow-card-dark
                  hover:shadow-card-hover dark:hover:shadow-card-dark-hover
                  spotlight-card
                  transition-shadow duration-300
                  ${project.featured ? 'border-primary-200/60' : 'border-gray-100'}`}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.featured ? '#3b82f6' : '#2563eb'})` }}
      />

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-5 left-5 z-20">
          <span
            className="px-3 py-1 text-xs font-semibold text-white rounded-full shadow-glow-sm"
            style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}
          >
            {language === 'fr' ? '★ Projet Phare' : '★ Featured'}
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Action buttons on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={project.githubUrl}
            target={isExternalLink(project.githubUrl) ? '_blank' : undefined}
            rel={isExternalLink(project.githubUrl) ? 'noopener noreferrer' : undefined}
            aria-label={language === 'fr' ? 'Voir le code' : 'View code'}
            className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white
                       flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href={project.liveUrl}
            target={isExternalLink(project.liveUrl) ? '_blank' : undefined}
            rel={isExternalLink(project.liveUrl) ? 'noopener noreferrer' : undefined}
            aria-label={language === 'fr' ? 'Voir la démo' : 'View demo'}
            className="w-11 h-11 rounded-xl text-white flex items-center justify-center transition-all duration-200 shadow-glow-sm"
            style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-display font-bold text-gray-900 dark:text-white text-base md:text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 leading-snug">
          {project.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Case Study Details */}
        <div className="space-y-2 mb-5">
          {[
            { label: language === 'fr' ? 'Défi' : 'Challenge', value: project.challenge },
            { label: language === 'fr' ? 'Solution' : 'Solution', value: project.solution },
            ...(project.result ? [{ label: language === 'fr' ? 'Résultat' : 'Outcome', value: project.result }] : []),
          ].map(({ label, value }) => (
            <div key={label} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <span
                className="font-semibold"
                style={{ color: project.accent }}
              >
                {label} :{' '}
              </span>
              {value}
            </div>
          ))}
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-medium rounded-lg
                         bg-gray-50 dark:bg-white/5
                         text-gray-600 dark:text-gray-300
                         border border-gray-200 dark:border-white/8
                         hover:border-primary-300 hover:text-primary-700 dark:hover:text-primary-300
                         transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
          <a
            href={project.githubUrl}
            target={isExternalLink(project.githubUrl) ? '_blank' : undefined}
            rel={isExternalLink(project.githubUrl) ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <Github size={15} />
            {language === 'fr' ? 'Code source' : 'Source code'}
          </a>
          <a
            href={project.liveUrl}
            target={isExternalLink(project.liveUrl) ? '_blank' : undefined}
            rel={isExternalLink(project.liveUrl) ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white
                       shadow-glow-sm hover:shadow-glow transition-all duration-200 group/btn"
            style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}
          >
            <Eye size={14} />
            {language === 'fr' ? 'Voir la démo' : 'View demo'}
            <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;