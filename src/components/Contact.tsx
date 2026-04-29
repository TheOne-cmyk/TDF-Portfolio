import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../contexts/LanguageContext';

const Contact = () => {
  const { language } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Remplacez ces valeurs par vos identifiants EmailJS
      await emailjs.sendForm(
        'service_7dck11k', // Votre SERVICE_ID
        'template_57a186p', // Votre TEMPLATE_ID
        formRef.current!, // Référence au formulaire
        'IZ4Zf8tSgrjj9AHX7' // Votre PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      setSubmitError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: language === 'fr' ? 'Email' : 'Email',
      value: 'tsobgouwarren@gmail.com',
      href: 'mailto:tsobgouwarren@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      label: language === 'fr' ? 'Téléphone' : 'Phone',
      value: '+1 418 709 8053',
      href: 'tel:++1 418 709 8053',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      label: language === 'fr' ? 'Localisation' : 'Location',
      value: language === 'fr' ? 'Basé à Rivière-du-Loup, QC' : 'Based in Rivière-du-Loup, QC',
      href: '#',
      color: 'text-red-600'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/warren-tsobgou-21423936',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/TheOne-cmyk',
      color: 'hover:bg-gray-900'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/237694983862',
      color: 'hover:bg-green-600'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-[#080d18]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center rounded-2xl p-12 max-w-3xl mx-auto
                          bg-white dark:bg-[#0f172a]/60 backdrop-blur-md
                          border border-gray-100 dark:border-blue-500/10
                          shadow-card-light dark:shadow-card-dark">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {language === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {language === 'fr' ? 'Merci pour votre message. Je vous répondrai dans les plus brefs délais.' : 'Thank you for your message. I will get back to you as soon as possible.'}
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary text-sm px-6 py-3"
            >
              {language === 'fr' ? 'Envoyer un nouveau message' : 'Send a new message'}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#080d18]" />
      <div
        className="orb absolute w-[500px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-3">
              {language === 'fr' ? 'Travaillons ensemble' : 'Let\'s work together'}
            </p>
            <h2 className="section-title mb-4">
              {language === 'fr' ? 'Prenons Contact' : 'Contact Me'}
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle mt-4">
              {language === 'fr' ? "Une idée de projet ? Une opportunité professionnelle ? N'hésitez pas à me contacter. Je réponds généralement sous 24h." : 'A project idea? A professional opportunity? Feel free to contact me. I usually reply within 24h.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info card */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl p-6 md:p-8
                              bg-white dark:bg-[#0f172a]/60 backdrop-blur-md
                              border border-gray-100 dark:border-blue-500/10
                              shadow-card-light dark:shadow-card-dark">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 dark:text-gray-100">{language === 'fr' ? 'Mes Coordonnées' : 'My Contact Info'}</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center ${info.color} dark:bg-gray-800`}>
                          <IconComponent size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100">{info.label}</h4>
                          <a
                            href={info.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 dark:text-gray-300"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Réseaux sociaux */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 mb-4 dark:text-gray-100">{language === 'fr' ? 'Suivez-moi' : 'Follow me'}</h4>
                  <div className="space-y-4">
                    <a
                      href="https://linkedin.com/in/warren-tsobgou-21423936"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                      {language === 'fr' ? 'Voir mon LinkedIn' : 'View my LinkedIn'}
                    </a>

                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-12 h-12 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center hover:text-white transition-all duration-200 ${social.color} dark:bg-gray-800 dark:text-gray-200`}
                            aria-label={social.label}
                          >
                            <IconComponent size={20} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Disponibilité */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg dark:bg-blue-900/20">
                  <h4 className="font-semibold text-blue-900 mb-2 dark:text-blue-200">{language === 'fr' ? 'Disponibilité' : 'Availability'}</h4>
                  <p className="text-blue-700 text-sm dark:text-blue-300">
                    {language === 'fr' ? '🟢 Disponible pour de nouveaux projets' : '🟢 Available for new projects'}
                  </p>
                  <p className="text-blue-600 text-sm mt-1 dark:text-blue-400">
                    {language === 'fr' ? 'Temps de réponse moyen : 24h' : 'Average response time: 24h'}
                  </p>
                </div>
              </div>
            </div>

            {/* Form card */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl p-6 md:p-8
                              bg-white dark:bg-[#0f172a]/60 backdrop-blur-md
                              border border-gray-100 dark:border-blue-500/10
                              shadow-card-light dark:shadow-card-dark">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 dark:text-gray-100">{language === 'fr' ? 'Envoyez-moi un message' : 'Send me a message'}</h3>
                
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 dark:bg-red-900/20 dark:border-red-700">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <p className="text-red-700 dark:text-red-300">{submitError}</p>
                    </div>
                  </div>
                )}
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                        {language === 'fr' ? 'Nom complet *' : 'Full name *'}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
                        placeholder={language === 'fr' ? 'Votre nom complet' : 'Your full name'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                        {language === 'fr' ? 'Email *' : 'Email *'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
                        placeholder={language === 'fr' ? 'votre.email@exemple.com' : 'your.email@example.com'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                      {language === 'fr' ? 'Sujet *' : 'Subject *'}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
                      placeholder={language === 'fr' ? 'Objet de votre message' : 'Subject of your message'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                      {language === 'fr' ? 'Message *' : 'Message *'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
                      placeholder={language === 'fr' ? 'Décrivez votre projet ou votre demande...' : 'Describe your project or request...'}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-xl font-semibold
                               hover:bg-blue-700 dark:hover:bg-blue-600
                               focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                               transition-all duration-200 shadow-glow hover:shadow-glow-lg
                               disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        {language === 'fr' ? 'Envoi en cours...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        {language === 'fr' ? 'Envoyer le message' : 'Send message'}
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 p-4 rounded-xl
                                bg-blue-50 dark:bg-blue-900/15
                                border border-blue-100 dark:border-blue-500/15">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>{language === 'fr' ? 'Note :' : 'Note:'}</strong> {language === 'fr' ? 'Vous pouvez aussi me contacter directement par email ou téléphone pour une réponse plus rapide.' : 'You can also contact me directly by email or phone for a faster response.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;