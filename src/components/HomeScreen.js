import React, { useState } from 'react';
import { useNavigation } from './NavigationContext';
import SearchHeader from './SearchHeader';
import FilterBar from './FilterBar';
import PropertyCard from './PropertyCard';
import ReviewsModal from './ReviewsModal';
import LocationModal from './LocationModal';
import ComparisonModal from './ComparisonModal';
import properties from '../mock/properties';

const HomeScreen = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showReviews, setShowReviews] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const { setCurrentView, setCurrentProperty } = useNavigation();

  const handleFilter = (filter) => {
    let filtered = properties;
    if (filter === 'sale') {
      filtered = properties.filter(p => p.type === 'Venta');
    } else if (filter === 'rent') {
      filtered = properties.filter(p => p.type === 'Renta');
    } else if (filter === 'featured') {
      filtered = properties.filter(p => p.featured);
    }
    setFilteredProperties(filtered);
  };

  const handleSearch = (query) => {
    const filtered = properties.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const handleShowReviews = (property) => {
    setSelectedProperty(property);
    setShowReviews(true);
  };

  const handleShowMap = (property) => {
    setSelectedProperty(property);
    setShowMap(true);
  };

  const handleOpenComparison = () => {
    setShowComparison(true);
  };

  return (
    <>
      <SearchHeader />
      <div className="p-4">
        <FilterBar 
          onFilter={handleFilter} 
          onSearch={handleSearch}
          onOpenComparison={handleOpenComparison}
        />
        <div className="space-y-4">
          {filteredProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property}
              onClick={() => {
                setCurrentProperty(property);
                setCurrentView('property');
              }}
              onShowReviews={() => handleShowReviews(property)}
              onShowMap={() => handleShowMap(property)}
            />
          ))}
        </div>
      </div>

      {showReviews && selectedProperty && (
        <ReviewsModal 
          property={selectedProperty}
          onClose={() => setShowReviews(false)}
        />
      )}

      {showMap && selectedProperty && (
        <LocationModal
          property={selectedProperty}
          onClose={() => setShowMap(false)}
        />
      )}

      {showComparison && (
        <ComparisonModal 
          onClose={() => setShowComparison(false)}
        />
      )}
    </>
  );
};

export default HomeScreen;