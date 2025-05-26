import React, { createContext, useState, useContext, useEffect } from 'react';
import initialConversations from '../mock/messages';

const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {
  const [conversations, setConversations] = useState(initialConversations);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setConversations(prev => [...prev]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const markAsRead = (conversationId) => {
    setConversations(prev => prev.map(conv => 
      conv.id === conversationId ? {...conv, unread: false} : conv
    ));
  };

  const sendMessage = (conversationId, text) => {
    const newMessage = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      sent: true
    };

    setConversations(prev => prev.map(conv => 
      conv.id === conversationId 
        ? {
            ...conv,
            messages: [...conv.messages, newMessage],
            lastMessage: text,
            time: 'Ahora',
            unread: false
          }
        : conv
    ));
  };

  const filteredConversations = conversations.filter(conv =>
    conv.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MessagesContext.Provider value={{
      conversations: filteredConversations,
      currentConversation,
      setCurrentConversation,
      markAsRead,
      sendMessage,
      searchTerm,
      setSearchTerm
    }}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessages = () => {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error('useMessages must be used within a MessagesProvider');
  }
  return context;
};