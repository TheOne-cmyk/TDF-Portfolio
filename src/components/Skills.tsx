import { useState, useEffect, useCallback, useRef } from 'react';
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
  color: string;
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
  
  // Récupération des traductions

  const technicalSkills: TechnicalSkill[] = [
    { 
      name: 'HTML5', 
      icon: <FaHtml5 size={48} className="text-orange-500" />, 
      color: 'bg-white' 
    },
    { 
      name: 'CSS3', 
      icon: <FaCss3Alt size={48} className="text-blue-500" />, 
      color: 'bg-white' 
    },
    { 
      name: 'JavaScript', 
      icon: <FaJs size={48} className="text-yellow-400" />, 
      color: 'bg-white' 
    },
    { 
      name: 'TypeScript', 
      icon: <SiTypescript size={48} className="text-blue-700" />, 
      color: 'bg-white' 
    },
    { 
      name: 'Python', 
      icon: <SiPython size={48} className="text-blue-600" />, 
      color: 'bg-white' 
    },
    { 
      name: 'PHP', 
      icon: <FaPhp size={48} className="text-purple-500" />, 
      color: 'bg-white' 
    },
    { 
      name: 'React', 
      icon: <FaReact size={48} className="text-blue-400" />, 
      color: 'bg-white' 
    },
    { 
      name: 'Tailwind CSS', 
      icon: <SiTailwindcss size={48} className="text-cyan-400" />, 
      color: 'bg-white' 
    }
  ];

  const otherSkills: OtherSkillCategory[] = [
    { 
      category: 'Suite Office', 
      icon: <SiMicrosoftoffice size={24} className="mr-2 text-red-500" />,
      skills: [
        { name: 'Word', icon: <SiMicrosoftword size={16} className="mr-1 text-blue-600" /> },
        { name: 'Excel', icon: <SiMicrosoftexcel size={16} className="mr-1 text-green-600" /> },
        { name: 'PowerPoint', icon: <SiMicrosoftpowerpoint size={16} className="mr-1 text-orange-500" /> }
      ] 
    },
    { 
      category: 'Suite Adobe', 
      icon: <SiAdobe size={24} className="mr-2 text-red-600" />,
      skills: [
        { name: 'Photoshop', icon: <SiAdobephotoshop size={16} className="mr-1 text-blue-600" /> },
        { name: 'Illustrator', icon: <SiAdobeillustrator size={16} className="mr-1 text-orange-600" /> },
        { name: 'InDesign', icon: <SiAdobeindesign size={16} className="mr-1 text-pink-600" /> }
      ] 
    },
    { 
      category: 'Outils', 
      icon: <FaGitAlt size={24} className="mr-2 text-orange-600" />,
      skills: [
        { name: 'Canva', icon: <SiCanva size={16} className="mr-1 text-teal-400" /> },
        { name: 'Figma', icon: <SiFigma size={16} className="mr-1 text-purple-500" /> },
        { name: 'Git', icon: <FaGitAlt size={16} className="mr-1 text-red-500" /> },
        { name: 'VS Code', icon: <SiVisualstudiocode size={16} className="mr-1 text-blue-500" /> }
      ] 
    },
    { 
      category: 'Bases de données', 
      icon: <FaDatabase size={24} className="mr-2 text-blue-500" />,
      skills: [
        { name: 'MySQL', icon: <SiMysql size={16} className="mr-1 text-blue-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql size={16} className="mr-1 text-blue-700" /> }
      ] 
    }
  ];

  const skillsPerSlide = 4;
  const totalSlides = Math.ceil(technicalSkills.length / skillsPerSlide);

  const handleNext = useCallback(() => {
    if (isHovered) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setIsAnimating(false);
    }, 300);
  }, [totalSlides, isHovered]);

  const handlePrev = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setIsAnimating(false);
    }, 300);
  }, [totalSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [handleNext]);

  const getCurrentSkills = useCallback(() => {
    const start = currentSlide * skillsPerSlide;
    return technicalSkills.slice(start, start + skillsPerSlide);
  }, [currentSlide, technicalSkills]);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="competences" className="py-20 bg-gradient-to-b from-[#f8faff] to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Compétences Techniques - Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center dark:text-gray-100">
            {t('skills.technicalSkills')}
          </h3>
          
          <div 
            className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100 dark:bg-gray-900 dark:border-gray-800"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none dark:from-gray-900"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none dark:from-gray-900"></div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden py-6 px-4">
              <div 
                className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-500 ease-out ${isAnimating ? 'opacity-70 scale-95' : 'opacity-100 scale-100'}`}
                style={{ margin: '1.5rem 0' }} 
              >
                {getCurrentSkills().map((skill, index) => (
                  <div 
                    key={`${currentSlide}-${index}`}
                    className={`
                      ${skill.color}
                      pt-12 pb-12 px-8
                      rounded-2xl
                      transition-all duration-300 ease-in-out
                      flex flex-col items-center justify-center
                      min-h-[200px]
                      border border-gray-100 dark:border-gray-800
                      shadow-lg
                      hover:scale-[1.03]
                      border-blue-200
                      bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800
                      relative
                      overflow-hidden
                      group
                      mx-auto
                      w-full
                      my-2
                    `}
                  >
                    {/* Animated background circle */}
                    <div 
                      className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500
                        ${skill.name === 'HTML5' ? 'bg-orange-500' : ''}
                        ${skill.name === 'CSS3' ? 'bg-blue-500' : ''}
                        ${skill.name === 'JavaScript' ? 'bg-yellow-400' : ''}
                        ${skill.name === 'TypeScript' ? 'bg-blue-700' : ''}
                        ${skill.name === 'Python' ? 'bg-blue-600' : ''}
                        ${skill.name === 'PHP' ? 'bg-purple-500' : ''}
                        ${skill.name === 'React' ? 'bg-blue-400' : ''}
                        ${skill.name === 'Tailwind CSS' ? 'bg-cyan-400' : ''}
                      `}
                    ></div>
                    
                    <div className={`mb-6 p-4 rounded-full bg-${skill.color.replace('bg-', '')} bg-opacity-10 transition-all duration-300 group-hover:bg-opacity-20 z-10`}>
                      {skill.icon}
                    </div>
                    
                    <h4 className="font-semibold text-lg text-gray-900 transition-colors duration-300 z-10 dark:text-gray-100">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className={`
                absolute -left-6 top-1/2 transform -translate-y-1/2 
                bg-white shadow-xl rounded-full p-3 
                hover:bg-blue-600 hover:text-white 
                transition-all duration-300 z-20
                flex items-center justify-center
                ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'} dark:bg-gray-900
              `}
              disabled={isAnimating || currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6 text-blue-600 hover:text-white" />
            </button>
            <button
              onClick={handleNext}
              className={`
                absolute -right-6 top-1/2 transform -translate-y-1/2 
                bg-white shadow-xl rounded-full p-3 
                hover:bg-blue-600 hover:text-white 
                transition-all duration-300 z-20
                flex items-center justify-center
                ${currentSlide === totalSlides - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'} dark:bg-gray-900
              `}
              disabled={isAnimating || currentSlide === totalSlides - 1}
            >
              <ChevronRight className="w-6 h-6 text-blue-600 hover:text-white" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index !== currentSlide) {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentSlide(index);
                        setIsAnimating(false);
                      }, 300);
                    }
                  }}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-200 w-4 hover:bg-gray-400'} dark:bg-gray-700
                  `}
                  disabled={isAnimating}
                />
              ))}
            </div>
          </div>

          {/* Autres Compétences */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center dark:text-gray-100">
              {t('skills.otherSkills')}
            </h3>
            {/* Grille 1 colonne mobile, 4 colonnes desktop */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {otherSkills.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 dark:bg-gray-900 dark:border-gray-800"
                >
                  <div className="flex items-center mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
                    {category.icon}
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center bg-gray-50 text-gray-800 px-3 py-2 rounded-xl text-sm border border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                      >
                        <span className="mr-2">{skill.icon}</span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;