import { useContext } from 'react';
import { RSVPContext } from '../contexts/RSVPContext';

export const useRSVP = () => {
  return useContext(RSVPContext);
};