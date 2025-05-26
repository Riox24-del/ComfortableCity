import React from 'react';

const ReviewsModal = ({ property, onClose }) => {
  const reviews = [
    {
      id: 1,
      user: 'Juan Pérez',
      rating: 4,
      date: '2023-05-15',
      comment: 'Excelente ubicación y buen espacio. El edificio necesita un poco de mantenimiento.'
    },
    {
      id: 2,
      user: 'María Gómez',
      rating: 5,
      date: '2023-04-22',
      comment: 'Me encantó la propiedad, muy bien cuidada y con excelentes amenidades.'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[80vh] overflow-hidden shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">Opiniones sobre {property.title}</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          
          <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
            {reviews.length === 0 ? (
              <p className="text-gray-500 text-center py-4">Aún no hay opiniones para esta propiedad</p>
            ) : (
              reviews.map(review => (
                <div key={review.id} className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-gray-900">{review.user}</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-gray-700">{review.rating}/5</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                  <p className="text-gray-600 mt-2">{review.comment}</p>
                </div>
              ))
            )}
          </div>

          <button
            onClick={onClose}
            className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsModal;