import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Biztrack 237',
      description: 'Application web pour la gestion efficace des petites et moyennes entreprises locales.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'PostgreSQL'],
      githubUrl: 'https://github.com/TheOne-cmyk',
      liveUrl: 'https://biztrack237.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'RentHub',
      description: 'Plateforme numérique pour la mise en location et la gestion de biens immobiliers.',
      image: 'https://images.pexels.com/photos/3935336/pexels-photo-3935336.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/TheOne-cmyk',
      liveUrl: 'https://renthub-ten.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'DevSynch+',
      description: 'Plateforme de Collaboration pour Développeurs.',
      image: 'https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/TheOne-cmyk',
      liveUrl: 'https://devsynch.vercel.app/',
      featured: false
    },
    {
      id: 4,
      title: 'GesEquip',
      description: "Outil pour gérer les emprunts, affectations et inventaires de matériel.",
      image: 'https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Tailwind CSS', 'HTML', 'MySQL', 'JavaScript', 'PHP', 'CSS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollInterval = useRef<NodeJS.Timeout>();
  const scrollDirection = useRef<number>(1);
  const scrollSpeed = useRef<number>(1.5);

  useEffect(() => {
    if (!isMobile || !containerRef.current) return;
  
    const container = containerRef.current;
    let animationId: number;
    let direction = 1;
    const speed = 1;
  
    const animate = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
  
      if (currentScroll >= maxScroll - 1) direction = -1;
      else if (currentScroll <= 1) direction = 1;
  
      container.scrollLeft += direction * speed;
      animationId = requestAnimationFrame(animate);
    };
  
    animationId = requestAnimationFrame(animate);
  
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isMobile) return;

    const autoScroll = () => {
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      if (currentScroll >= maxScroll - 5) {
        scrollDirection.current = -1;
      } else if (currentScroll <= 5) {
        scrollDirection.current = 1;
      }

      container.scrollLeft += scrollDirection.current * scrollSpeed.current;
    };

    scrollInterval.current = setInterval(autoScroll, 20);

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [isMobile]);

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll opacity-0">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mes Projets
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez une sélection de mes projets les plus représentatifs.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div 
            ref={containerRef}
            className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 scrollbar-hide"
            style={{ 
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-[85vw] snap-start"
              >
                <div className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full ${
                  project.featured ? 'border-2 border-blue-200' : ''
                }`}>
                  {/* Project content... */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Projet Phare
                      </span>
                    </div>
                  )}

                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.githubUrl}
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <a
                        href={project.githubUrl}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <Github size={18} className="mr-2" />
                        Code source
                      </a>
                      <a
                        href={project.liveUrl}
                        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <Eye size={18} className="mr-2" />
                        Voir le projet
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  project.featured ? 'border-2 border-blue-200' : ''
                }`}
              >
                {/* Desktop project content... */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Projet Phare
                    </span>
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Github size={18} className="mr-2" />
                      Code source
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Eye size={18} className="mr-2" />
                      Voir le projet
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Vous avez aimé mes projets ? Consultez mon profil GitHub pour découvrir d'autres réalisations !
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Github className="mr-2 w-5 h-5" />
              Voir tous mes projets sur GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;