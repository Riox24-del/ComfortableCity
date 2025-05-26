import React, { createContext, useState, useContext } from 'react';

const ComparisonContext = createContext();

export const ComparisonProvider = ({ children }) => {
  const [comparisonList, setComparisonList] = useState([]);

  const addToComparison = (property) => {
    if (comparisonList.length < 3 && !comparisonList.some(p => p.id === property.id)) {
      setComparisonList(prev => [...prev, property]);
    }
  };

  const removeFromComparison = (propertyId) => {
    setComparisonList(prev => prev.filter(p => p.id !== propertyId));
  };

  const clearComparison = () => {
    setComparisonList([]);
  };

  return (
    <ComparisonContext.Provider value={{
      comparisonList,
      addToComparison,
      removeFromComparison,
      clearComparison
    }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};