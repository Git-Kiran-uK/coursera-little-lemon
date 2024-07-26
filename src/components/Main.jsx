import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingProvider, useBooking } from './BookingContext';

function Main({ children }) {
  const { fetchAvailableTimes } = useBooking();

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    fetchAvailableTimes(today);
  }, [fetchAvailableTimes]);

  return <div>{children}</div>;
}

function MainWrapper({ children }) {
  return (
    <BookingProvider>
      <Main>{children}</Main>
    </BookingProvider>
  );
}

export default MainWrapper;
