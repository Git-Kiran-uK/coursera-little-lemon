
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from '../BookingForm';

describe('BookingForm', () => {
  it('displays loading initially', () => {
    render(<BookingForm availableTimes={[]} updateTimes={jest.fn()} submitForm={jest.fn()} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays available times', () => {
    const times = ['17:00', '18:00'];
    render(<BookingForm availableTimes={times} updateTimes={jest.fn()} submitForm={jest.fn()} />);

    times.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  it('calls updateTimes when date is selected', () => {
    const mockUpdateTimes = jest.fn();
    render(<BookingForm availableTimes={[]} updateTimes={mockUpdateTimes} submitForm={jest.fn()} />);

    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2024-07-25' } });
    expect(mockUpdateTimes).toHaveBeenCalledWith('2024-07-25');
  });

  it('calls submitForm when form is submitted', () => {
    const mockSubmitForm = jest.fn();
    render(<BookingForm availableTimes={['17:00']} updateTimes={jest.fn()} submitForm={mockSubmitForm} />);

    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2024-07-25' } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });
    fireEvent.submit(screen.getByRole('form'));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      reservationDate: '2024-07-25',
      reservationTime: '17:00',
      numberOfGuests: 2,
      occasion: 'Birthday',
    });
  });
});
