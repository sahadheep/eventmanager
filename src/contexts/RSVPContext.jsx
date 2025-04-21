import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const RSVPContext = createContext({
  rsvpEvents: [],
  addRSVP: () => {},
  removeRSVP: () => {},
  isRSVPd: () => false,
});

export const RSVPProvider = ({ children }) => {
  const [rsvpEvents, setRSVPEvents] = useState(() => {
    const saved = localStorage.getItem('rsvpEvents');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('rsvpEvents', JSON.stringify(rsvpEvents));
  }, [rsvpEvents]);

  const addRSVP = (eventId) => {
    if (!rsvpEvents.includes(eventId)) {
      setRSVPEvents([...rsvpEvents, eventId]);
    }
  };

  const removeRSVP = (eventId) => {
    setRSVPEvents(rsvpEvents.filter(id => id !== eventId));
  };

  const isRSVPd = (eventId) => {
    return rsvpEvents.includes(eventId);
  };

  return (
    <RSVPContext.Provider value={{ rsvpEvents, addRSVP, removeRSVP, isRSVPd }}>
      {children}
    </RSVPContext.Provider>
  );
};

RSVPProvider.propTypes = {
  children: PropTypes.node.isRequired,
};