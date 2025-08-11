
import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';

const Hero = () => {
  const typingText = useTypingEffect([
    "Passionné par le développement web",
    "Créateur de solutions innovantes",
    "Expert en technologies modernes"
  ], 100, 2000);

  return (
    <section id="accueil" className="min-h-screen lg:min-h-[50vh] flex items-center pt-16 bg-gradient-to-br from-blue-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu à gauche */}
          <div className="animate-on-scroll opacity-0">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Tsobgou Dongmo</span>
                  <br />
                  Francis Warren
                </h1>
                <div className="text-xl md:text-2xl text-gray-600 font-medium">
                  Développeur Full-Stack
                </div>
              </div>
              
              {/* Effet de typing */}
              <div className="h-8">
                <p className="text-lg text-blue-600 font-medium">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              {/* Statistiques */}
              <div className="flex flex-wrap gap-8 py-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Engagement</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col lg:flex-row gap-4">
                <a
                  href="#projets"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
                >
                  Voir mes projets
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Me contacter
                </a>
              </div>
            </div>
          </div>

          {/* Cercle élégant à droite */}
          <div className=" flex justify-center lg:justify-end animate-on-scroll opacity-0">
            <div className="relative">
              {/* Cercles décoratifs en arrière-plan */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-200 rounded-full opacity-30"></div>
              
              {/* Cercle principal */}
              <div className="relative w-64 h-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl border-8 border-white">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">TDFW</div>
                  <div className="text-white/90 text-sm font-medium">Full-Stack Developer</div>
                </div>
              </div>
              
              {/* Points décoratifs */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-blue-300 rounded-full animate-bounce"></div>
              <div className="absolute bottom-12 left-8 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-6 w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;