import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const FilterBar = ({ onFilter, onSearch, onOpenComparison }) => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', label: t('filters.all') },
    { id: 'sale', label: t('filters.sale') },
    { id: 'rent', label: t('filters.rent') },
    { id: 'featured', label: t('filters.featured') }
  ];

  const handleFilter = (filterId) => {
    setActiveFilter(filterId);
    onFilter(filterId);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="mb-4">
      <div className="relative mb-3">
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-3 pl-10 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-3 top-3 text-gray-500">🔍</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex overflow-x-auto pb-2 hide-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilter(filter.id)}
              className={`px-4 py-2 mr-2 rounded-full whitespace-nowrap transition-colors ${
                activeFilter === filter.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <button
          onClick={onOpenComparison}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
        >
          {t('compare')}
        </button>
      </div>
    </div>
  );
};

export default FilterBar;

// DONE