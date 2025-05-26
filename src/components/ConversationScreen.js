import React, { useState } from 'react';
import { useNavigation } from './NavigationContext';
import { useMessages } from './MessagesContext';

const ConversationScreen = () => {
  const { setCurrentView } = useNavigation();
  const { currentConversation, sendMessage } = useMessages();
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage(currentConversation.id, newMessage);
      setNewMessage('');
    }
  };

  if (!currentConversation) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Conversación no encontrada</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16 flex flex-col">
      <div className="bg-white p-4 shadow-sm flex items-center">
        <button 
          onClick={() => setCurrentView('messages')}
          className="mr-2"
        >
          <span className="text-xl">⬅️</span>
        </button>
        <div className="flex-1">
          <h2 className="text-lg font-bold text-gray-900">{currentConversation.contact}</h2>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {currentConversation.messages.map((message) => (
          <div 
            key={message.id}
            className={`mb-4 ${message.sent ? 'text-right' : 'text-left'}`}
          >
            <div 
              className={`inline-block px-4 py-2 rounded-lg ${message.sent ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              <p>{message.text}</p>
              <p className={`text-xs mt-1 ${message.sent ? 'text-blue-100' : 'text-gray-500'}`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="bg-white border-t border-gray-200 p-4">
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConversationScreen;