import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from './BookingContext';
import '../styles/BookingForm.css';

function BookingForm() {
  const { availableTimes, fetchAvailableTimes, submitForm } = useBooking();
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const navigate = useNavigate();
  useEffect(() => {
    if (reservationDate) {
      fetchAvailableTimes(reservationDate);
    }
  }, [reservationDate, fetchAvailableTimes]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      reservationDate,
      reservationTime,
      numberOfGuests,
      occasion,
    };
    const success = await submitForm(formData);
    if (success) {
      navigate('/confirmed');
    } else {
      console.error('Booking submission failed');
    }
  };

  return (
    <div className='form-container'>
      <h1 className='form-heading'>Table reservation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
          min={today}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={reservationTime}
          onChange={(e) => setReservationTime(e.target.value)}
        >
          {availableTimes.length === 0 ? (
            <option>Loading...</option>
          ) : (
            availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))
          )}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(Number(e.target.value))}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

export default BookingForm;
