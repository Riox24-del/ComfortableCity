import React from 'react';
import { useNavigation } from './NavigationContext';
import { useFavorites } from './FavoritesContext';
import PropertyCard from './PropertyCard';

const FavoritesScreen = () => {
  const { favorites } = useFavorites();
  const { setCurrentView, setCurrentProperty } = useNavigation();

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Tus favoritos</h2>
        {favorites.length === 0 ? (
          <div className="text-center py-10">
            <span className="text-5xl mb-4 inline-block">❤️</span>
            <p className="text-gray-600">Aún no tienes propiedades favoritas</p>
          </div>
        ) : (
          <div className="space-y-4">
            {favorites.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={{...property, type: "Favorito"}}
                onClick={() => {
                  setCurrentProperty(property);
                  setCurrentView('property');
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesScreen;