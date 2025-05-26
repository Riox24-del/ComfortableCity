import React from 'react';
import { useLanguage } from './LanguageContext';

const SearchHeader = () => {
  const { t, toggleLanguage } = useLanguage();

  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-900">{t('appName')}</h1>
        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 bg-gray-100 rounded-lg text-sm hover:bg-gray-200"
          >
            {t('English/Español')}
          </button>
          <button className="p-2 rounded-full bg-gray-100">
            <span className="text-gray-600">👤</span>
          </button>
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          className="w-full p-3 pl-10 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-3 top-3 text-gray-500">🔍aaaa</span>
      </div>
    </div>
  );
};

export default SearchHeader;