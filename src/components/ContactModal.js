import React from 'react';
import { useComparison } from './ComparisonContext';

const ComparisonModal = ({ onClose }) => {
  const { comparisonList, removeFromComparison, clearComparison } = useComparison();

  const features = [
    { name: 'Precio', key: 'price' },
    { name: 'Ubicación', key: 'address' },
    { name: 'Habitaciones', key: 'beds' },
    { name: 'Baños', key: 'baths' },
    { name: 'Metros cuadrados', key: 'sqft' },
    { name: 'Tipo', key: 'type' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">Comparar Propiedades</h3>
            <div className="flex space-x-2">
              <button 
                onClick={clearComparison}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Limpiar
              </button>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
          </div>
          
          {comparisonList.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Selecciona propiedades para comparar (máximo 3)</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left py-2">Característica</th>
                    {comparisonList.map(property => (
                      <th key={property.id} className="text-left py-2 px-4">
                        <div className="relative">
                          <button 
                            onClick={() => removeFromComparison(property.id)}
                            className="absolute -top-3 -right-3 text-gray-400 hover:text-red-500"
                          >
                            ✕
                          </button>
                          <div className="font-medium">{property.title}</div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map(feature => (
                    <tr key={feature.key} className="border-t border-gray-100">
                      <td className="py-3 text-gray-700">{feature.name}</td>
                      {comparisonList.map(property => (
                        <td key={`${property.id}-${feature.key}`} className="py-3 px-4">
                          {property[feature.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;