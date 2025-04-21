import React from 'react';
import { Link } from 'react-router-dom';
import { getEventsByIds } from '../data/eventsData';
import { useRSVP } from '../hooks/useRSVP';
import EventCard from '../components/EventCard';
import { CalendarX } from 'lucide-react';

const MyEvents = () => {
  const { rsvpEvents } = useRSVP();
  const myEvents = getEventsByIds(rsvpEvents);

  if (myEvents.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-md mx-auto">
          <CalendarX size={60} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No RSVPs Yet</h2>
          <p className="text-gray-600 mb-6">
            You haven't RSVP'd to any events yet. Browse upcoming events and mark the ones you'd like to attend!
          </p>
          <Link
            to="/"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Browse Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-4 md:pt-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          My Events
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Events you've RSVP'd to are listed here. Manage your registrations and keep track of upcoming events.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {myEvents.map((event) => (
          <div key={event.id} className="h-full">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEvents;