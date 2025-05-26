import React from 'react';
import { useNavigation } from './NavigationContext';

const AlertItem = ({ alert }) => {
  const { setCurrentView, setCurrentProperty } = useNavigation();

  const handleViewProperty = () => {
    if (alert.property) {
      setCurrentProperty(alert.property);
      setCurrentView('property');
    }
  };

  return (
    <div 
      onClick={handleViewProperty}
      className={`p-4 border-b border-gray-100 ${!alert.read ? 'bg-blue-50' : ''} cursor-pointer hover:bg-gray-50 transition-colors`}
    >
      <div className="flex items-start space-x-3">
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center 
          ${alert.type === 'price' ? 'bg-green-100 text-green-600' : 
            alert.type === 'new' ? 'bg-blue-100 text-blue-600' : 
            'bg-purple-100 text-purple-600'}`}>
          {alert.type === 'price' ? '💲' : alert.type === 'new' ? '🆕' : '🔔'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">{alert.title}</h3>
            <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{alert.time}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
          {alert.property && (
            <div className="mt-2">
              <button 
                onClick={handleViewProperty}
                className="text-sm text-blue-600 font-medium hover:text-blue-800"
              >
                Ver propiedad: {alert.property.title} - {alert.property.price}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AlertsScreen = () => {
  const alerts = [
    {
      id: 1,
      title: "Nuevas propiedades",
      message: "5 propiedades nuevas que coinciden con tu búsqueda",
      time: "Hace 2 horas",
      read: false,
      type: "new",
      property: {
        id: 101,
        title: "Departamento en Polanco",
        price: "$1,200,000",
        image: "polanco-apt",
        beds: 3,
        baths: 2,
        sqft: 120,
        address: "Polanco, CDMX",
        type: "Venta"
      }
    },
    {
      id: 2,
      title: "Precio reducido",
      message: "Se ha reducido el precio de una propiedad que te interesa",
      time: "Ayer",
      read: true,
      type: "price",
      property: {
        id: 205,
        title: "Casa en Condesa",
        price: "$2,500,000",
        image: "condesa-house",
        beds: 4,
        baths: 3,
        sqft: 180,
        address: "Condesa, CDMX",
        type: "Venta"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-white p-4 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">Alertas</h2>
      </div>
      <div className="bg-white mt-1">
        {alerts.map((alert) => (
          <AlertItem key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );
};

export default AlertsScreen;