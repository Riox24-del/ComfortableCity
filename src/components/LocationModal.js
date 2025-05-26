import React from 'react';

const LocationModal = ({ property, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-md overflow-hidden shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">Ubicación de {property.title}</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500 mb-4">
            <div className="text-center">
              <p className="text-lg">🌍 Mapa de {property.address}</p>
              <p className="text-sm mt-2">(Simulación de mapa)</p>
              <p className="text-sm mt-2">Lat: 19.4326° N</p>
              <p className="text-sm">Lon: 99.1332° W</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Dirección exacta:</h4>
            <p className="text-gray-600">{property.address}</p>
          </div>
          
          <button
            onClick={onClose}
            className="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;