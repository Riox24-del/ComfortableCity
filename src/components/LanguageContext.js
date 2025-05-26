import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    appName: "Comfortable City",
    searchPlaceholder: "Search properties...",
    filters: {
      all: "All",
      sale: "For sale",
      rent: "For rent",
      featured: "Featured"
    },
    propertyDetails: "Details",
    propertyReviews: "Reviews",
    propertyMap: "Map",
    compare: "Compare",
    inComparison: "In comparison",
    contactAgent: "Contact agent",
    scheduleVisit: "Schedule visit",
    mortgageCalculator: "Mortgage Calculator",
    // ... más traducciones
  },
  es: {
    appName: "Comfortable City",
    searchPlaceholder: "Buscar propiedades...",
    filters: {
      all: "Todos",
      sale: "En venta",
      rent: "En renta",
      featured: "Destacados"
    },
    propertyDetails: "Detalles",
    propertyReviews: "Opiniones",
    propertyMap: "Mapa",
    compare: "Comparar",
    inComparison: "En comparación",
    contactAgent: "Contactar asesor",
    scheduleVisit: "Agendar visita",
    mortgageCalculator: "Calculadora de Hipoteca",
    // ... más traducciones
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};