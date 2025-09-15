import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Info, Languages } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark') ? 'dark' : 'light');
  const [showNotice, setShowNotice] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Init theme from saved pref or system, and ALWAYS show notice on refresh
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (!saved) {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    } else {
      setTheme(saved === 'dark' ? 'dark' : 'light');
    }
    setShowNotice(true);
    const t = setTimeout(() => setShowNotice(false), 10000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sauvegarder la langue préférée
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
  };

  const navItems = [
    // { href: '#home', label: t('header.home') }, // Masqué volontairement
    { href: '#apropos', label: t('header.about') },
    { href: '#competences', label: t('header.skills') },
    { href: '#services', label: t('header.services') },
    { href: '#formations', label: language === 'fr' ? t('header.education') : t('header.education') },
    { href: '#experience', label: t('header.experience') },
    { href: '#projets', label: t('header.projects') },
    { href: '#contact', label: t('header.contact') },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg backdrop-blur-md dark:bg-gray-900' : 'bg-white/90 backdrop-blur-sm dark:bg-gray-900/90'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#accueil" className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg flex items-center justify-center font-bold text-lg hover:scale-105 transition-transform duration-200">
                &lt;/&gt;
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <div className="ml-10 flex items-baseline space-x-8">
                {/* <a href="#home" className="px-3 py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {t('header.home')}
                </a> */}
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group dark:text-gray-200"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={toggleLanguage} aria-label="Changer de langue" className="p-2 rounded-lg border transition-colors duration-200 text-gray-700 border-gray-200 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 flex items-center gap-1">
                  <Languages size={16} />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </button>
                <button onClick={toggleTheme} aria-label="Basculer le thème" className="p-2 rounded-lg border transition-colors duration-200 text-gray-700 border-gray-200 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button onClick={toggleLanguage} aria-label="Changer de langue" className="p-2 rounded-lg border transition-colors duration-200 text-gray-700 border-gray-200 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 flex items-center gap-1">
                <Languages size={16} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 dark:text-gray-200"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <button onClick={toggleTheme} aria-label="Basculer le thème" className="p-2 rounded-lg border transition-colors duration-200 text-gray-700 border-gray-200 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t dark:bg-gray-900 dark:border-gray-800">
                {/* <a href="#home" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                  {t('header.home')}
                </a> */}
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 dark:text-gray-200"
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