import React from 'react';
import { useNavigation } from './NavigationContext';
import HomeScreen from './HomeScreen';
import FavoritesScreen from './FavoritesScreen';
import AlertsScreen from './AlertsScreen';
import PropertyDetailScreen from './PropertyDetailScreen';
import BottomNav from './BottomNav';

const AppContent = () => {
  const { currentView, currentProperty } = useNavigation();

  const renderScreen = () => {
    switch (currentView) {
      case 'favorites':
        return <FavoritesScreen />;
      case 'alerts':
        return <AlertsScreen />;
      case 'property':
        return <PropertyDetailScreen property={currentProperty} />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {renderScreen()}
      {currentView !== 'property' && <BottomNav />}
    </div>
  );
};

export default AppContent;