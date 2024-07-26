import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock components used in App
jest.mock('./components/Navbar', () => () => <div>Navbar</div>);
jest.mock('./components/Footer', () => () => <div>Footer</div>);
jest.mock('./components/Home', () => () => <div>Home</div>);
jest.mock('./components/About', () => () => <div>About</div>);
jest.mock('./components/Menu', () => () => <div>Menu</div>);
jest.mock('./components/Reservation', () => () => <div>Reservation</div>);
jest.mock('./components/OrderOnline', () => () => <div>Order Online</div>);
jest.mock('./components/Login', () => () => <div>Login</div>);
jest.mock('./components/ConfirmedBooking', () => () => <div>Confirmed Booking</div>);
jest.mock('./components/Main', () => ({ children }) => <div>{children}</div>);

describe('App component', () => {
  test('renders Navbar and Footer', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Navbar')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  test('renders Home component on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders About component on /about route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  test('renders Menu component on /menu route', () => {
    render(
      <MemoryRouter initialEntries={['/menu']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Menu')).toBeInTheDocument();
  });

  test('renders Reservation component on /reservation route', () => {
    render(
      <MemoryRouter initialEntries={['/reservation']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Reservation')).toBeInTheDocument();
  });

  test('renders OrderOnline component on /order-online route', () => {
    render(
      <MemoryRouter initialEntries={['/order-online']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Order Online')).toBeInTheDocument();
  });

  test('renders Login component on /login route', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('renders ConfirmedBooking component on /confirmed route', () => {
    render(
      <MemoryRouter initialEntries={['/confirmed']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Confirmed Booking')).toBeInTheDocument();
  });
});
