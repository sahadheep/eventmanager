import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useRSVP } from '../hooks/useRSVP';
import { formatDate } from '../utils/dateUtils';

const EventCard = ({ event }) => {
  const { isRSVPd } = useRSVP();
  const hasRSVP = isRSVPd(event.id);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'music': return 'bg-purple-100 text-purple-800';
      case 'conference': return 'bg-blue-100 text-blue-800';
      case 'workshop': return 'bg-amber-100 text-amber-800';
      case 'sports': return 'bg-green-100 text-green-800';
      case 'community': return 'bg-rose-100 text-rose-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
        {hasRSVP && (
          <div className="absolute top-3 right-3 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-md">
            RSVP'd
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-md ${getCategoryColor(event.category)}`}>
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-1">
          {event.title}
        </h3>
        
        <div className="text-gray-600 space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <Calendar size={16} className="mr-2 text-teal-600" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock size={16} className="mr-2 text-teal-600" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin size={16} className="mr-2 text-teal-600" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {event.description}
        </p>
        
        <Link 
          to={`/event/${event.id}`}
          className="block w-full text-center py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors duration-200 mt-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;