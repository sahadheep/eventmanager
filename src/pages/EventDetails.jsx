import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, ArrowLeft } from 'lucide-react';
import { getEventById } from '../data/eventsData';
import RSVPButton from '../components/RSVPButton';
import { formatDate } from '../utils/dateUtils';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = id ? getEventById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h2>
        <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Events
        </button>
      </div>
    );
  }

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
    <div className="pt-6">
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <button
          onClick={() => navigate(-1)} 
          className="absolute top-4 left-4 bg-white/80 hover:bg-white text-gray-800 backdrop-blur-sm p-2 rounded-full transition-colors duration-200"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="absolute top-4 right-4">
          <span className={`text-sm font-medium px-3 py-1 rounded-full ${getCategoryColor(event.category)}`}>
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 -mt-16 md:-mt-24 relative z-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {event.title}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="text-teal-600 mt-1 mr-3" size={20} />
                  <div>
                    <span className="block text-sm text-gray-500">Date</span>
                    <span className="block font-medium">{formatDate(event.date)}</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-teal-600 mt-1 mr-3" size={20} />
                  <div>
                    <span className="block text-sm text-gray-500">Time</span>
                    <span className="block font-medium">{event.time}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-teal-600 mt-1 mr-3" size={20} />
                  <div>
                    <span className="block text-sm text-gray-500">Location</span>
                    <span className="block font-medium">{event.location}</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User className="text-teal-600 mt-1 mr-3" size={20} />
                  <div>
                    <span className="block text-sm text-gray-500">Organizer</span>
                    <span className="block font-medium">{event.organizer}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-xs mb-8">
              <RSVPButton eventId={event.id} />
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">About this event</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden bg-gray-200 h-64 mb-6">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <span className="flex items-center">
                  <MapPin className="mr-2" />
                  Map view for {event.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;