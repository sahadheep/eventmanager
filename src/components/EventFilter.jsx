import React from 'react';
import PropTypes from 'prop-types';
import { Music, Monitor, BookOpen, Activity, Users } from 'lucide-react';

const EventFilter = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'All Events', icon: null },
    { id: 'music', name: 'Music', icon: <Music size={18} /> },
    { id: 'conference', name: 'Conferences', icon: <Monitor size={18} /> },
    { id: 'workshop', name: 'Workshops', icon: <BookOpen size={18} /> },
    { id: 'sports', name: 'Sports', icon: <Activity size={18} /> },
    { id: 'community', name: 'Community', icon: <Users size={18} /> },
  ];

  return (
    <div className="overflow-x-auto px-4 md:px-6 mb-8">
      <div className="inline-flex space-x-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === category.id
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category.icon && <span>{category.icon}</span>}
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

EventFilter.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default EventFilter;