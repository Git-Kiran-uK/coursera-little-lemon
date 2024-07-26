import React from 'react';
import BookingForm from './BookingForm';

function Reservation({ availableTimes, updateTimes, submitForm }) {
  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </div>
  );
}

export default Reservation;