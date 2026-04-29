import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact,
  FaDatabase, FaGitAlt
} from 'react-icons/fa';
import {
  SiMicrosoftoffice, SiAdobe, SiCanva,
  SiFigma, SiVisualstudiocode, SiMysql,
  SiPostgresql, SiMicrosoftword,
  SiMicrosoftexcel, SiMicrosoftpowerpoint,
  SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign,
  SiPython, SiTailwindcss,
  SiTypescript
} from 'react-icons/si';

interface TechnicalSkill {
  name: string;
  icon: React.ReactNode;
  accent: string;
}

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface OtherSkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const Skills = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const technicalSkills: TechnicalSkill[] = [
    { name: 'HTML5',       icon: <FaHtml5 size={44} />,       accent: '#e34f26' },
    { name: 'CSS3',        icon: <FaCss3Alt size={44} />,      accent: '#264de4' },
    { name: 'JavaScript',  icon: <FaJs size={44} />,           accent: '#f7df1e' },
    { name: 'TypeScript',  icon: <SiTypescript size={44} />,   accent: '#3178c6' },
    { name: 'Python',      icon: <SiPython size={44} />,       accent: '#4b8bbe' },
    { name: 'PHP',         icon: <FaPhp size={44} />,          accent: '#777bb4' },
    { name: 'React',       icon: <FaReact size={44} />,        accent: '#61dafb' },
    { name: 'Tailwind CSS',icon: <SiTailwindcss size={44} />,  accent: '#38bdf8' },
  ];

  const otherSkills: OtherSkillCategory[] = [
    {
      category: 'Suite Office',
      icon: <SiMicrosoftoffice size={20} className="text-red-500" />,
      skills: [
        { name: 'Word',       icon: <SiMicrosoftword size={15} className="text-blue-600" /> },
        { name: 'Excel',      icon: <SiMicrosoftexcel size={15} className="text-green-600" /> },
        { name: 'PowerPoint', icon: <SiMicrosoftpowerpoint size={15} className="text-orange-500" /> },
      ],
    },
    {
      category: 'Suite Adobe',
      icon: <SiAdobe size={20} className="text-red-600" />,
      skills: [
        { name: 'Photoshop',  icon: <SiAdobephotoshop size={15} className="text-blue-600" /> },
        { name: 'Illustrator',icon: <SiAdobeillustrator size={15} className="text-orange-600" /> },
        { name: 'InDesign',   icon: <SiAdobeindesign size={15} className="text-pink-600" /> },
      ],
    },
    {
      category: 'Outils',
      icon: <FaGitAlt size={20} className="text-orange-600" />,
      skills: [
        { name: 'Canva',   icon: <SiCanva size={15} className="text-teal-400" /> },
        { name: 'Figma',   icon: <SiFigma size={15} className="text-purple-500" /> },
        { name: 'Git',     icon: <FaGitAlt size={15} className="text-red-500" /> },
        { name: 'VS Code', icon: <SiVisualstudiocode size={15} className="text-blue-500" /> },
      ],
    },
    {
      category: 'Bases de données',
      icon: <FaDatabase size={20} className="text-blue-500" />,
      skills: [
        { name: 'MySQL',      icon: <SiMysql size={15} className="text-blue-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql size={15} className="text-blue-700" /> },
      ],
    },
  ];

  const skillsPerSlide = 4;
  const totalSlides = Math.ceil(technicalSkills.length / skillsPerSlide);

  const handleNext = useCallback(() => {
    if (isHovered || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
      setIsAnimating(false);
    }, 300);
  }, [totalSlides, isHovered, isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
      setIsAnimating(false);
    }, 300);
  }, [totalSlides, isAnimating]);

  useEffect(() => {
    const interval = setInterval(handleNext, 4500);
    return () => clearInterval(interval);
  }, [handleNext]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const getCurrentSkills = useCallback(() => {
    const start = currentSlide * skillsPerSlide;
    return technicalSkills.slice(start, start + skillsPerSlide);
  }, [currentSlide]);

  return (
    <section
      id="competences"
      className="py-24 relative overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-surface-50 dark:bg-[#080d18]" />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-40"
          style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)' }}
        />
      </div>

      <div ref={containerRef} className="animate-on-scroll relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-3"
          >
            Stack & Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-4"
          >
            {t('skills.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            {t('skills.subtitle')}
          </motion.p>
          <div className="section-divider" />
        </div>

        {/* Technical Skills Carousel */}
        <div className="mb-20">
          <h3 className="text-xl font-display font-semibold text-gray-800 dark:text-gray-100 mb-8 text-center">
            {t('skills.technicalSkills')}
          </h3>

          <div
            className="relative rounded-3xl p-1 overflow-visible"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Gradient border ring */}
            <div
              className="absolute inset-0 rounded-3xl opacity-40"
              style={{
                background: 'linear-gradient(135deg, rgba(37,99,235,0.3) 0%, rgba(59,130,246,0.3) 50%, rgba(37,99,235,0.1) 100%)',
                padding: '1px',
              }}
            />

            <div className="relative bg-white dark:bg-transparent rounded-3xl p-8 shadow-card-light dark:shadow-card-dark border border-gray-100/80 dark:border-blue-500/10"
              style={{ backdropFilter: undefined }}
            >

              {/* Gradient edge fades */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-[#0f172a] to-transparent z-10 pointer-events-none rounded-l-3xl" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-[#0f172a] to-transparent z-10 pointer-events-none rounded-r-3xl" />

              {/* Slide */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-5 py-4 px-4"
                >
                  {getCurrentSkills().map((skill, index) => (
                    <motion.div
                      key={`${currentSlide}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.07 }}
                      whileHover={{ y: -6, scale: 1.03 }}
                      className="skill-card spotlight-card min-h-[160px] group"
                    >
                      {/* Glow circle */}
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `radial-gradient(circle, ${skill.accent}, transparent 70%)` }}
                      />

                      {/* Icon */}
                      <div
                        className="mb-4 relative z-10 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.accent }}
                      >
                        {skill.icon}
                      </div>

                      {/* Name */}
                      <h4 className="font-display font-semibold text-sm text-gray-700 dark:text-gray-200 text-center z-10">
                        {skill.name}
                      </h4>

                      {/* Bottom glow line */}
                      <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-500 rounded-full"
                        style={{ background: `linear-gradient(90deg, transparent, ${skill.accent}, transparent)` }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Nav Buttons */}
              <button
                onClick={handlePrev}
                aria-label="Précédent"
                disabled={isAnimating || currentSlide === 0}
                className={`absolute left-3 md:-left-5 top-1/2 -translate-y-1/2 z-20
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-white/10
                  shadow-card-light hover:shadow-glow-sm
                  text-primary-600 dark:text-primary-400
                  hover:border-primary-400 dark:hover:border-primary-500
                  transition-all duration-200
                  ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Suivant"
                disabled={isAnimating || currentSlide === totalSlides - 1}
                className={`absolute right-3 md:-right-5 top-1/2 -translate-y-1/2 z-20
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-white/10
                  shadow-card-light hover:shadow-glow-sm
                  text-primary-600 dark:text-primary-400
                  hover:border-primary-400 dark:hover:border-primary-500
                  transition-all duration-200
                  ${currentSlide === totalSlides - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
              >
                <ChevronRight size={18} />
              </button>

              {/* Dot Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (index !== currentSlide && !isAnimating) {
                        setIsAnimating(true);
                        setTimeout(() => { setCurrentSlide(index); setIsAnimating(false); }, 300);
                      }
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-8 bg-primary-500'
                        : 'w-3 bg-gray-200 dark:bg-white/20 hover:bg-gray-400'
                    }`}
                    disabled={isAnimating}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h3 className="text-xl font-display font-semibold text-gray-800 dark:text-gray-100 mb-8 text-center">
            {t('skills.otherSkills')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {otherSkills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl p-5 overflow-hidden
                           glass-card
                           hover:shadow-card-hover dark:hover:shadow-card-dark-hover
                           hover:border-primary-300/40 dark:hover:border-primary-700/30
                           transition-all duration-300 group"
              >
                {/* Glow and hover effects kept without top border */}

                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-white/5">
                  {category.icon}
                  <h4 className="font-display font-semibold text-sm text-gray-800 dark:text-gray-100">
                    {category.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                                 bg-gray-50 dark:bg-white/5
                                 text-gray-700 dark:text-gray-300
                                 border border-gray-200 dark:border-white/8
                                 hover:border-primary-300 dark:hover:border-primary-700/40
                                 hover:text-primary-700 dark:hover:text-primary-300
                                 transition-all duration-200"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;