import React from 'react';
import { NavigationProvider } from './components/NavigationContext';
import { FavoritesProvider } from './components/FavoritesContext';
import { ComparisonProvider } from './components/ComparisonContext';
import { LanguageProvider } from './components/LanguageContext';
import AppContent from './components/AppContent';

const App = () => {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <FavoritesProvider>
          <ComparisonProvider>
            <AppContent />
          </ComparisonProvider>
        </FavoritesProvider>
      </NavigationProvider>
    </LanguageProvider>
  );
};

export default App;

// DONE