import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CheckCircle, XCircle, Loader } from 'lucide-react';
import { useRSVP } from '../hooks/useRSVP';

const RSVPButton = ({ eventId }) => {
  const { isRSVPd, addRSVP, removeRSVP } = useRSVP();
  const [isLoading, setIsLoading] = useState(false);
  const hasRSVP = isRSVPd(eventId);

  const handleRSVP = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      if (hasRSVP) {
        removeRSVP(eventId);
      } else {
        addRSVP(eventId);
      }
      setIsLoading(false);
    }, 600);
  };

  if (isLoading) {
    return (
      <button
        className="flex items-center justify-center w-full bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium cursor-wait"
        disabled
      >
        <Loader size={20} className="mr-2 animate-spin" />
        Processing...
      </button>
    );
  }

  if (hasRSVP) {
    return (
      <button
        onClick={handleRSVP}
        className="flex items-center justify-center w-full bg-red-100 text-red-700 hover:bg-red-200 py-3 px-6 rounded-lg font-medium transition-colors duration-200"
      >
        <XCircle size={20} className="mr-2" />
        Cancel RSVP
      </button>
    );
  }

  return (
    <button
      onClick={handleRSVP}
      className="flex items-center justify-center w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
    >
      <CheckCircle size={20} className="mr-2" />
      RSVP to Event
    </button>
  );
};

RSVPButton.propTypes = {
  eventId: PropTypes.string.isRequired,
};

export default RSVPButton;