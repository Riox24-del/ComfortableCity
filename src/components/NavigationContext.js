import React, { createContext, useState, useContext } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('home');
  const [currentProperty, setCurrentProperty] = useState(null);

  return (
    <NavigationContext.Provider value={{ 
      currentView, 
      setCurrentView, 
      currentProperty, 
      setCurrentProperty 
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};