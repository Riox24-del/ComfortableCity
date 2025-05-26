import React, { useState } from 'react';
import { useNavigation } from './NavigationContext';
import { useFavorites } from './FavoritesContext';
import ContactModal from './ContactModal';
import MortgageCalculator from './MortgageCalculator';
import ScheduleVisitModal from './ScheduleVisitModal';
import LocationModal from './LocationModal';

const PropertyDetailScreen = ({ property }) => {
  const { setCurrentView } = useNavigation();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const [showContactModal, setShowContactModal] = useState(false);
  const [showVisitModal, setShowVisitModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const favorite = isFavorite(property.id);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(property.id);
    } else {
      addFavorite(property);
    }
  };

  const handleSubmitContact = (formData) => {
    console.log('Formulario enviado:', { property, contact: formData });
  };

  const handleSubmitVisit = (formData) => {
    console.log('Visita agendada:', { property, visit: formData });
  };

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Propiedad no encontrada</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {showContactModal && (
        <ContactModal 
          property={property}
          onClose={() => setShowContactModal(false)}
          onSubmit={handleSubmitContact}
        />
      )}
      
      {showVisitModal && (
        <ScheduleVisitModal 
          property={property}
          onClose={() => setShowVisitModal(false)}
          onSubmit={handleSubmitVisit}
        />
      )}

      {showLocationModal && (
        <LocationModal
          property={property}
          onClose={() => setShowLocationModal(false)}
        />
      )}
      
      <div className="relative">
        <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400">
          {property.image}
        </div>
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md"
        >
          <span className={`text-2xl ${favorite ? 'text-red-500' : 'text-gray-400'}`}>
            {favorite ? '❤️' : '🤍'}
          </span>
        </button>
        <button 
          onClick={() => setCurrentView('home')}
          className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md"
        >
          <span className="text-2xl">⬅️</span>
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
          <span className="text-xl font-bold text-gray-900">{property.price}</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">{property.address}</p>
          <button 
            onClick={() => setShowLocationModal(true)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Ver mapa
          </button>
        </div>

        <div className="flex space-x-4 mb-6">
          <div className="flex items-center">
            <span className="mr-2">🛏️</span>
            <span>{property.beds} habitaciones</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🛁</span>
            <span>{property.baths} baños</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">📏</span>
            <span>{property.sqft} m²</span>
          </div>
        </div>

        <MortgageCalculator />

        <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <h2 className="font-bold text-lg mb-2">Descripción</h2>
          <p className="text-gray-600">
            {property.description || 'Esta impresionante propiedad cuenta con amplios espacios, acabados de lujo y una ubicación privilegiada. Perfecta para quienes buscan comodidad y estilo de vida.'}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setShowVisitModal(true)}
            className="py-3 bg-white border border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Agendar visita
          </button>
          <button 
            onClick={() => setShowContactModal(true)}
            className="py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Contactar asesor
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailScreen;