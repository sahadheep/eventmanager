import React, { useState } from 'react';
import { getEventsByCategory } from '../data/eventsData';
import EventCard from '../components/EventCard';
import EventFilter from '../components/EventFilter';

const UpcomingEvents = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredEvents = getEventsByCategory(activeCategory);

  return (
    <div className="container mx-auto px-4 pt-4 md:pt-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Upcoming Events
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover and RSVP to exciting events happening in your area. Filter by category to find exactly what you're looking for.
        </p>
      </div>

      <EventFilter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No events found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredEvents.map((event) => (
            <div key={event.id} className="h-full">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;