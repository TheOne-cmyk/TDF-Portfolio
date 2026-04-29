import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, MapPin } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useTranslation();
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: '#accueil',    label: language === 'fr' ? 'Accueil'        : 'Home' },
    { href: '#apropos',    label: language === 'fr' ? 'À Propos'       : 'About' },
    { href: '#competences',label: language === 'fr' ? 'Compétences'    : 'Skills' },
    { href: '#services',   label: language === 'fr' ? 'Services'       : 'Services' },
    { href: '#formations', label: language === 'fr' ? 'Formations'     : 'Education' },
    { href: '#experience', label: language === 'fr' ? 'Expérience'     : 'Experience' },
    { href: '#projets',    label: language === 'fr' ? 'Études de cas'  : 'Case Studies' },
    { href: '#contact',    label: language === 'fr' ? 'Contact'        : 'Contact' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gray-100 dark:border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-[#080d18]" />
      <div
        className="orb absolute w-[400px] h-[300px] bottom-0 right-0 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.2) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Logo TDF Portfolio - Développeur Full-Stack" 
                className="w-11 h-11 object-contain"
              />
              <span className="font-display font-bold text-gray-900 dark:text-white">
                TDF<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2 pt-1">
              {[
                { href: 'https://github.com/TheOne-cmyk', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/warren-tsobgou-21423936', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:tsobgouwarren@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center
                             bg-gray-100 dark:bg-white/5
                             border border-gray-200 dark:border-blue-500/10
                             text-gray-600 dark:text-gray-400
                             hover:text-primary-600 dark:hover:text-primary-400
                             hover:border-primary-400/50 hover:bg-primary-50 dark:hover:bg-primary-900/20
                             hover:shadow-glow-sm
                             transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              {t('footer.navigation')}
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:tsobgouwarren@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <Mail size={14} className="flex-shrink-0" />
                  tsobgouwarren@gmail.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={14} className="flex-shrink-0 text-primary-500" />
                Rivière-du-Loup, QC, Canada
              </li>
              <li className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{t('footer.available')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {year} Tsobgou Dongmo Francis Warren. {t('footer.copyright')}.
          </p>
          <a
            href="#accueil"
            className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 group"
          >
            {t('footer.backToTop')}
            <div className="w-6 h-6 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-blue-500/10 flex items-center justify-center group-hover:bg-primary-50 group-hover:border-primary-300 dark:group-hover:bg-primary-900/20 transition-all duration-200">
              <ArrowUp size={12} className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
