import React, { createContext, useReducer, useContext } from 'react';
import { fetchAPI, submitAPI } from './BookingAPI';
import { useNavigate } from 'react-router-dom';

const BookingContext = createContext();

const initialAvailableTimes = [];

function availableTimesReducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.payload;
    case 'FETCH_FAILURE':
      console.error(action.payload);
      return [];
    case 'SET_LOADING':
      return [];
    default:
      return state;
  }
}

export function BookingProvider({ children }) {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialAvailableTimes);

  const fetchAvailableTimes = (selectedDate) => {
    dispatch({ type: 'SET_LOADING' });
    console.log('fetchAvailableTimes called with date:', selectedDate);

    try {
      const times = fetchAPI(new Date(selectedDate));
      dispatch({ type: 'FETCH_SUCCESS', payload: times });
      console.log('Fetched times:', times);
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE', payload: error.message });
    }
  };

  const submitForm = async (formData) => {
    try {
      const success = submitAPI(formData);
      return success; 
    } catch (error) {
      console.error('Error submitting booking:', error);
      return false;
    }
  };

  return (
    <BookingContext.Provider value={{ availableTimes, fetchAvailableTimes, submitForm }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
