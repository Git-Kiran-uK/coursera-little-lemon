import { fetchAPI, submitAPI } from '../BookingAPI';

describe('BookingAPI', () => {
  describe('fetchAPI', () => {
    it('returns a list of available times based on the provided date', () => {
      const date = '2024-07-26';
      const times = fetchAPI(date);
      expect(times).toBeInstanceOf(Array);
      times.forEach(time => {
        expect(typeof time).toBe('string');
        expect(time).toMatch(/^([17-23]):(00|30)$/);
      });
    });

    it('returns consistent results for the same date', () => {
      const date = '2024-07-26';
      const times1 = fetchAPI(date);
      const times2 = fetchAPI(date);
      expect(times1).toEqual(times2);
    });

    it('returns different results for different dates', () => {
      const date1 = '2024-07-26';
      const date2 = '2024-07-27';
      const times1 = fetchAPI(date1);
      const times2 = fetchAPI(date2);
      expect(times1).not.toEqual(times2);
    });
  });

  describe('submitAPI', () => {
    it('returns true for any form data', () => {
      const formData = {
        reservationDate: '2024-07-26',
        reservationTime: '18:00',
        numberOfGuests: 2,
        occasion: 'Birthday',
      };
      expect(submitAPI(formData)).toBe(true);
    });
  });
});
