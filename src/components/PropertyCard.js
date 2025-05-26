import React from 'react';
import { useFavorites } from './FavoritesContext';
import { useComparison } from './ComparisonContext';
import { useLanguage } from './LanguageContext';

const PropertyCard = ({ property, onClick, onShowReviews, onShowMap }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const { comparisonList, addToComparison } = useComparison();
  const { t } = useLanguage();
  const favorite = isFavorite(property.id);
  const inComparison = comparisonList.some(p => p.id === property.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (favorite) {
      removeFavorite(property.id);
    } else {
      addFavorite(property);
    }
  };

  const handleAddToComparison = (e) => {
    e.stopPropagation();
    addToComparison(property);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <div className={`bg-gray-200 h-full w-full flex items-center justify-center text-gray-400 ${property.image}`}>
          {property.image}
        </div>
        {property.featured && (
          <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            {t('filters.featured')}
          </div>
        )}
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
        >
          <span className={`text-xl ${favorite ? 'text-red-500' : 'text-gray-400'}`}>
            {favorite ? '❤️' : '🤍'}
          </span>
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-800">{property.title}</h3>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{property.type}</span>
        </div>
        <p className="text-gray-600 mt-1">{property.address}</p>
        <div className="flex justify-between mt-4">
          <div className="flex items-center text-gray-500">
            <span className="mr-2">🛏️ {property.beds}</span>
            <span>🛁 {property.baths}</span>
          </div>
          <span className="text-gray-500">{property.sqft} m²</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">{property.price}</span>
          <div className="flex space-x-2">
            <button 
              onClick={onShowReviews}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              {t('propertyReviews')}
            </button>
            <button 
              onClick={onShowMap}
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              {t('propertyMap')}
            </button>
            <button 
              onClick={onClick}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {t('propertyDetails')}
            </button>
          </div>
        </div>
        <button
          onClick={handleAddToComparison}
          disabled={inComparison}
          className={`mt-3 w-full py-1 rounded-lg ${inComparison 
            ? 'bg-gray-200 text-gray-500 cursor-default' 
            : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
        >
          {inComparison ? t('inComparison') : t('compare')}
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;