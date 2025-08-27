import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Info } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark') ? 'dark' : 'light');
  const [showNotice, setShowNotice] = useState(false);

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

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const navItems = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#apropos', label: 'À Propos' },
    { href: '#competences', label: 'Compétences' },
    { href: '#services', label: 'Services' },
    { href: '#formations', label: 'Formations' },
    { href: '#experience', label: 'Expérience' },
    { href: '#projets', label: 'Projets' },
    { href: '#contact', label: 'Contact' }
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
              <button onClick={toggleTheme} aria-label="Basculer le thème" className="p-2 rounded-lg border transition-colors duration-200 text-gray-700 border-gray-200 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
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

      {/* Notice theme selection (always on refresh) */}
      {showNotice && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999]">
          <div className="flex items-start gap-3 max-w-md bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800 shadow-lg rounded-lg px-4 py-3">
            <div className="mt-0.5"><Info size={18} className="text-blue-600" /></div>
            <div className="text-sm leading-5">
              Le mode d’affichage est actuellement « {theme} ». Par défaut, il suit le thème de votre système. Vous pouvez le changer à tout moment depuis la barre de navigation.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;