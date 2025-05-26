import React from 'react';
import { useNavigation } from './NavigationContext';
import { useMessages } from './MessagesContext';

const MessagesScreen = () => {
  const { setCurrentView } = useNavigation();
  const { 
    conversations, 
    setSearchTerm, 
    markAsRead,
    setCurrentConversation 
  } = useMessages();

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-white p-4 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mensajes</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar conversaciones..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-8 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-2 top-2 text-gray-500">🔍</span>
        </div>
      </div>
      <div className="bg-white mt-1">
        {conversations.map((conversation) => (
          <div 
            key={conversation.id}
            onClick={() => {
              setCurrentConversation(conversation);
              setCurrentView('conversation');
              markAsRead(conversation.id);
            }}
            className={`p-4 border-b border-gray-100 ${conversation.unread ? 'bg-blue-50' : ''}`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
                {conversation.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-gray-900 truncate">{conversation.contact}</h3>
                  <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{conversation.time}</span>
                </div>
                <p className={`text-sm mt-1 truncate ${conversation.unread ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesScreen;