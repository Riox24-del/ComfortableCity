import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (property) => {
    setFavorites(prev => [...prev, property]);
  };

  const removeFavorite = (propertyId) => {
    setFavorites(prev => prev.filter(p => p.id !== propertyId));
  };

  const isFavorite = (propertyId) => {
    return favorites.some(p => p.id === propertyId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};