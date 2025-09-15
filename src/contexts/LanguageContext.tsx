import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { fr } from '../i18n/locales/fr';
import { en } from '../i18n/locales/en';

type Language = 'fr' | 'en';
type Translations = {
  header: {
    home: string;
    about: string;
    skills: string;
    services: string;
    portfolio: string;
    contact: string;
    resume: string;
    education: string;
    experience: string;
    projects: string;
  };
  hero: {
    title: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    viewCV: string;
    fullStackDeveloper: string;
    expertise: string;
    availableForNewProjects: string;
    typing1: string;
    typing2: string;
    typing3: string;
    function: string;
    create: string;
    project: string;
    return: string;
    success: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    location: string;
    education: string;
    experience: string;
    years: string;
    projects: string;
    completed: string;
    qualityDev: string;
    qualityDevDesc: string;
    userCentric: string;
    userCentricDesc: string;
    problemSolving: string;
    problemSolvingDesc: string;
    teamwork: string;
    teamworkDesc: string;
    collaboration: string;
    collaborationDesc: string;
  };
  skills: {
    title: string;
    subtitle: string;
    years: string;
    frontend: string;
    backend: string;
    database: string;
    devops: string;
    technicalSkills: string;
    otherSkills: string;
    programmingLanguages: string;
    frameworks: string;
    designTools: string;
    officeTools: string;
    versionControl: string;
    languages: string;
    french: string;
    english: string;
    spanish: string;
    native: string;
    advanced: string;
    intermediate: string;
  };
  services: {
    title: string;
    subtitle: string;
    webDevelopment: string;
    webDevelopmentDesc: string;
    mobileApp: string;
    mobileAppDesc: string;
    apiDevelopment: string;
    apiDevelopmentDesc: string;
    databaseDesign: string;
    databaseDesignDesc: string;
  };
  education: {
    title: string;
    subtitle: string;
    degree: string;
    school: string;
    year: string;
    description: string;
  };
  experience: {
    title: string;
    subtitle: string;
    current: string;
    position: string;
    company: string;
    duration: string;
    responsibilities: string[];
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    project1: string;
    project1Desc: string;
    project2: string;
    project2Desc: string;
    project3: string;
    project3Desc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    contactInfo: string;
    location: string;
    emailLabel: string;
    phone: string;
    success: string;
    error: string;
  };
  footer: {
    copyright: string;
    madeWith: string;
    by: string;
  };
  [key: string]: any; // Pour les futures traductions
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getNestedTranslation = (obj: any, key: string): string => {
  return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : key), obj);
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [translations, setTranslations] = useState<Translations>(fr);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language || 'fr';
    setLanguage(savedLanguage);
    setTranslations(savedLanguage === 'en' ? en : fr);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setTranslations(lang === 'en' ? en : fr);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return getNestedTranslation(translations, key) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
