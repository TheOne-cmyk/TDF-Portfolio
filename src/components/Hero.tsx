import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { useTranslation } from '../contexts/LanguageContext';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

const Hero = () => {
  const { t } = useTranslation();

  const typingText = useTypingEffect([
    t('hero.typing1'),
    t('hero.typing2'),
    t('hero.typing3'),
  ], 90, 90, 2200);

  const stats = [
    { value: '2+', label: t('hero.statsYears') || 'Ans Exp.' },
    { value: '10+', label: t('hero.statsProjects') || 'Projets' },
    { value: '95%', label: t('hero.statsSatisfaction') || 'Satisfaction' },
  ];

  const socialLinks = [
    { href: 'https://github.com/TheOne-cmyk',   icon: Github,   label: 'GitHub' },
    { href: 'https://linkedin.com/in/warren-tsobgou-21423936', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://x.com/',                   icon: Twitter,  label: 'X (Twitter)' },
  ];

  const expertiseTags = ['React', 'TypeScript', 'PHP', 'PostgreSQL', 'Tailwind', 'Figma'];

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-white dark:bg-[#0a0f1c]" />

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-mesh-light dark:bg-gradient-mesh-dark opacity-70" />
      </div>

      {/* Glowing Orbs */}
      <div
        className="orb w-[500px] h-[500px] top-[-180px] left-[-150px] animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)' }}
      />
      <div
        className="orb w-[400px] h-[400px] bottom-[-100px] right-[-100px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
          animationDelay: '1.5s',
        }}
      />
      <div
        className="orb w-[280px] h-[280px] top-[40%] right-[20%] hidden lg:block"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
          animationDelay: '3s',
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute top-24 right-[8%] w-5 h-5 rounded-full border-2 border-blue-400/40 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 left-[5%] w-3 h-3 rounded-full bg-blue-400/30 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 right-[12%] w-4 h-4 rounded border-2 border-blue-400/30 rotate-45 animate-float-slow" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-2/3 left-[8%] w-6 h-6 rounded-sm border border-primary-300/30 rotate-12 animate-float-slow" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-10 lg:gap-16 xl:gap-20">

          {/* LEFT — Text Content */}
          <div className="w-full lg:w-3/5 xl:w-7/12 text-center lg:text-left">

            {/* Badge */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6
                         bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300
                         border border-primary-200/60 dark:border-primary-700/30"
            >
              <Sparkles size={14} className="text-primary-500" />
              {t('hero.title')}
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-4 tracking-tight text-gray-900 dark:text-white"
            >
              {t('hero.h1')}
            </motion.h1>

            {/* Typing effect */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
              className="h-8 lg:h-10 mb-5 flex justify-center lg:justify-start"
            >
              <p className="text-lg lg:text-xl font-semibold font-display inline-flex items-center gradient-text">
                {typingText}
                <span className="ml-1 w-[2px] h-6 bg-primary-500 animate-pulse inline-block rounded-full" />
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
              className="text-gray-600 dark:text-gray-400 text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.4}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              {stats.map((stat, i) => (
                <div key={i} className="stat-badge min-w-[90px]">
                  <div
                    className="text-2xl lg:text-3xl font-display font-bold mb-0.5 bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              <a href="#contact" className="btn-primary group gap-2 text-sm">
                {t('hero.bookAudit')}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline gap-2 text-sm">
                <Download size={16} />
                {t('hero.viewCV')}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.6}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <span className="text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest font-medium">Follow me</span>
              <div className="w-10 h-px bg-gray-200 dark:bg-white/10" />
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center
                             bg-gray-100 dark:bg-white/5
                             border border-gray-200 dark:border-white/10
                             text-gray-600 dark:text-gray-400
                             hover:text-primary-600 dark:hover:text-primary-400
                             hover:border-primary-400/50 dark:hover:border-primary-500/50
                             hover:bg-primary-50 dark:hover:bg-primary-900/20
                             hover:shadow-glow-sm
                             transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Profile Card */}
          <motion.div
            className="w-full lg:w-2/5 xl:w-5/12 flex justify-center lg:mt-[200px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative w-full max-w-[340px] lg:max-w-[380px]">

              {/* Background glow behind card */}
              <div
                className="absolute -inset-6 rounded-3xl opacity-30 blur-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.4), rgba(59,130,246,0.4))' }}
              />

              {/* Main Glass Card */}
              <div className="relative glass-card rounded-2xl p-6 gradient-border">

                {/* Card Header */}
                <div className="flex items-center gap-3 mb-5">
                  <img
                    src="/logo.png"
                    alt="Logo TDF Portfolio - Développeur Full-Stack"
                    className="w-14 h-14 rounded-xl object-contain shadow-glow flex-shrink-0"
                  />
                  <div>
                    <h2 className="font-display font-bold text-gray-900 dark:text-white text-lg leading-tight">TDF</h2>
                    <p className="text-primary-600 dark:text-primary-400 text-xs font-medium">
                      {t('hero.fullStackDeveloper')}
                    </p>
                  </div>
                  {/* Status dot */}
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-gray-400 dark:text-gray-600">{t('hero.available') || 'Available'}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px mb-5" style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }} />

                {/* Expertise Tags */}
                <div className="mb-5">
                  <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-2">
                    {t('hero.expertise')}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {expertiseTags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg
                                   bg-primary-50 dark:bg-primary-900/20
                                   text-primary-700 dark:text-primary-300
                                   border border-primary-200/40 dark:border-primary-700/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links Row */}
                <div className="flex justify-center gap-2 pt-4 border-t border-gray-100 dark:border-white/5">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-11 h-11 rounded-xl flex items-center justify-center
                                 bg-gray-50 dark:bg-white/5
                                 border border-gray-200 dark:border-white/10
                                 text-gray-600 hover:text-primary-600
                                 dark:text-gray-400 dark:hover:text-primary-400
                                 hover:border-primary-400/50 hover:shadow-glow-sm
                                 transition-all duration-200"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Floating Code Snippet */}
              <motion.div
                className="absolute -bottom-10 -right-4 lg:-right-8 rounded-xl overflow-hidden shadow-card-hover border border-white/20 dark:border-white/5"
                style={{ background: '#1e1e2e' }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  <span className="ml-2 text-[9px] text-white/30 font-mono">portfolio.tsx</span>
                </div>
                <div className="px-3 py-2 font-mono text-[10px] leading-relaxed">
                  <div><span className="text-[#c678dd]">const</span> <span className="text-[#e06c75]">skills</span> <span className="text-white/60">=</span> <span className="text-[#61afef]">[</span></div>
                  <div className="pl-3"><span className="text-[#98c379]">'Dev'</span><span className="text-white/40">,</span> <span className="text-[#98c379]">'Design'</span></div>
                  <div><span className="text-[#61afef]">]</span><span className="text-white/60">;</span></div>
                  <div className="mt-1">
                    <span className="text-[#c678dd]">return</span>{' '}
                    <span className="text-[#e5c07b]">success</span>
                    <span className="text-[#56b6c2]"> ✓</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-5 -left-4 lg:-left-6 rounded-xl px-3 py-2 shadow-card-hover glass-card"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    {t('hero.availableForNewProjects') || 'Open to work'}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-current"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;