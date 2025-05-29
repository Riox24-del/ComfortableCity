import React from 'react';
import { useNavigation } from './NavigationContext';

const BottomNav = () => {
  const { currentView, setCurrentView } = useNavigation();

  const tabs = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'favorites', icon: '❤️', label: 'Favoritos' },
    { id: 'alerts', icon: '🔔', label: 'Alertas' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3">
      {tabs.map((tab) => (
        <button 
          key={tab.id}
          onClick={() => setCurrentView(tab.id)}
          className="flex flex-col items-center"
        >
          <span className={`text-xl ${currentView === tab.id ? 'text-blue-600' : 'text-gray-500'}`}>
            {tab.icon}
          </span>
          <span className={`text-xs mt-1 ${currentView === tab.id ? 'text-blue-600' : 'text-gray-500'}`}>
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
};


export default BottomNav;