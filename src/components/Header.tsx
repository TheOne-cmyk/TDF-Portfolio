import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    (typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark') ? 'dark' : 'light'
  );
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (!saved) {
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    } else {
      setTheme(saved === 'dark' ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  const navItems = [
    { href: '#apropos', label: t('header.about') },
    { href: '#competences', label: t('header.skills') },
    { href: '#services', label: t('header.services') },
    { href: '#formations', label: t('header.education') },
    { href: '#experience', label: t('header.experience') },
    { href: '#projets', label: t('header.projects') },
    { href: '#contact', label: t('header.contact') },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-white/80 dark:bg-[#0a0f1c]/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(99,102,241,0.15)] dark:shadow-[0_1px_0_0_rgba(99,102,241,0.1)]'
            : 'bg-transparent'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#accueil" className="group flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Logo TDF Portfolio - Développeur Full-Stack"
                  className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="font-display font-bold text-gray-900 dark:text-white text-base hidden sm:block tracking-tight">
                  TDF<span className="gradient-text">.</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 group rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/10"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full group-hover:w-4 transition-all duration-300"
                    style={{ background: 'linear-gradient(90deg, #2563eb, #3b82f6)' }}
                  />
                </a>
              ))}

              {/* Controls */}
              <div className="flex items-center gap-2 ml-3 pl-3 border-l border-gray-200 dark:border-white/10">
                <button
                  onClick={toggleLanguage}
                  aria-label="Changer de langue"
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                >
                  <Languages size={14} />
                  <span>{language.toUpperCase()}</span>
                </button>
                <button
                  onClick={toggleTheme}
                  aria-label="Basculer le thème"
                  className="p-2.5 rounded-lg text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                aria-label="Changer de langue"
                className="flex items-center gap-1 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-primary-400 transition-all duration-200"
              >
                <Languages size={14} />
                <span>{language.toUpperCase()}</span>
              </button>
              <button
                onClick={toggleTheme}
                aria-label="Basculer le thème"
                className="p-2.5 rounded-lg text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-primary-400 transition-all duration-200"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                className="p-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-[#0a0f1c]/95 backdrop-blur-xl border-b border-gray-100 dark:border-white/10 shadow-xl">
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;