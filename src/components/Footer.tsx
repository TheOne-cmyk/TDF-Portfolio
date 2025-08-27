import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const quickLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À Propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#services', label: 'Services' },
  { href: '#formations', label: 'Formations' },
  { href: '#experience', label: 'Expérience' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const name = 'Tsobgou Dongmo Francis Warren';

  return (
    <footer className="mt-16 border-t bg-white dark:bg-gray-950 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3 dark:text-gray-100">Liens rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 dark:text-gray-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3 dark:text-gray-100">Contact</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <a href="mailto:tsobgouwarren@gmail.com" className="inline-flex items-center hover:text-blue-600 transition-colors duration-200">
                  <Mail size={16} className="mr-2" /> tsobgouwarren@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <a href="https://github.com/TheOne-cmyk" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-blue-900/20">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/warren-tsobgou-21423936" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-blue-900/20">
                  <Linkedin size={18} />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <h4 className="text-lg font-semibold text-gray-900 mb-3 dark:text-gray-100">À propos</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Développeur Full-Stack. Création d'expériences web modernes, performantes et accessibles.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between dark:text-gray-300 dark:border-gray-900">
          <p>© {year} {name}. Tous droits réservés.</p>
          <a href="#accueil" className="mt-3 md:mt-0 text-gray-600 hover:text-blue-600 transition-colors duration-200 dark:text-gray-300">
            Retour en haut ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
