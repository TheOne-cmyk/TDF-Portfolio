import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
      label: 'Email',
      value: 'tsobgouwarren@gmail.com',
      href: 'mailto:tsobgouwarren@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+237 694 983 862',
      href: 'tel:+237694983862',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Douala, Cameroun',
      href: '#',
      color: 'text-red-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/TheOne-cmyk',
      color: 'hover:bg-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/warren-tsobgou-21423936',
      color: 'hover:bg-blue-600'
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
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-white p-12 rounded-2xl shadow-lg max-w-3xl mx-auto dark:bg-gray-900">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-gray-100">Message envoyé avec succès !</h2>
            <p className="text-gray-600 mb-8 dark:text-gray-300">
              Merci pour votre message. Je vous répondrai dans les plus brefs délais.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Envoyer un nouveau message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll opacity-0">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">
              Prenons Contact
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Une idée de projet ? Une opportunité professionnelle ? N'hésitez pas à me contacter. Je réponds généralement sous 24h.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informations de contact */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg dark:bg-gray-900">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 dark:text-gray-100">Mes Coordonnées</h3>
                
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
                  <h4 className="font-semibold text-gray-900 mb-4 dark:text-gray-100">Suivez-moi</h4>
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

                {/* Disponibilité */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg dark:bg-blue-900/20">
                  <h4 className="font-semibold text-blue-900 mb-2 dark:text-blue-200">Disponibilité</h4>
                  <p className="text-blue-700 text-sm dark:text-blue-300">
                    🟢 Disponible pour de nouveaux projets
                  </p>
                  <p className="text-blue-600 text-sm mt-1 dark:text-blue-400">
                    Temps de réponse moyen : 24h
                  </p>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg dark:bg-gray-900">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 dark:text-gray-100">Envoyez-moi un message</h3>
                
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
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
                      placeholder="Objet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
                      placeholder="Décrivez votre projet ou votre demande..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg dark:bg-gray-900 dark:border dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Note :</strong> Vous pouvez aussi me contacter directement par email ou téléphone pour une réponse plus rapide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;