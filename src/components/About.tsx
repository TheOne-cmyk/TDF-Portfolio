import React from 'react';
import { Code, Heart, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll opacity-0">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              À Propos de Moi
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu principal */}
            <div className="space-y-6">
              <div className="text-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Je suis un développeur full-stack junior passionné, diplomé d'un BTS en génie logiciel obtenu à l'Institut Universitaire du Golfe de Guinée. Les expériences acquises jusqu'aujourd'hui m'ont permis de développer des compétences solide dans le développement web moderne.
                </p>
                <p className="mb-4">
                  Ma passion pour la technologie et l'innovation me pousse constamment à explorer de nouvelles solutions et à créer des applications web performantes et intuitives. J'aime transformer des idées complexes en interfaces utilisateur élégantes et fonctionnelles.
                </p>
                <p>
                  Mon objectif est de contribuer à des projets ambitieux qui ont un impact positif, tout en continuant à perfectionner mes compétences techniques et à rester à la pointe des dernières technologies.
                </p>
              </div>

              {/* Informations personnelles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <p><span className="font-semibold text-gray-900">Localisation:</span> <span className="text-gray-700">Douala, Cameroun</span></p>
                  <p><span className="font-semibold text-gray-900">Formation:</span> <span className="text-gray-700">Cycle BTS</span></p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold text-gray-900">Expérience:</span> <span className="text-gray-700">2 ans</span></p>
                  <p><span className="font-semibold text-gray-900">Projets:</span> <span className="text-gray-700">10+ réalisés</span></p>
                </div>
              </div>
            </div>

            {/* Valeurs et motivations */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors duration-200">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <Code size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Propre</h3>
                <p className="text-gray-600 text-sm">J'accorde une grande importance à la qualité du code et aux bonnes pratiques de développement.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors duration-200">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Passion</h3>
                <p className="text-gray-600 text-sm">Passionné par la technologie et l'apprentissage continu de nouvelles compétences.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors duration-200">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <Target size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Orienté Résultats</h3>
                <p className="text-gray-600 text-sm">Focus sur la livraison de solutions efficaces qui répondent aux besoins clients.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors duration-200">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600 text-sm">J'aime travailler en équipe et partager mes connaissances avec d'autres développeurs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;