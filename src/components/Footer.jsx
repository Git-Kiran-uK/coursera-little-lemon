import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import footerlogo from '../assets/footerlogo.png';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className='footer-img'>
        <img src={footerlogo} alt='little lemon logo'/>
      </div>
      <div className="footer-nav">
        <h4>Doormat Navigation</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h4>Contact</h4>
        <p>123 Lemon Street, Lemon City, LS 45678</p>
        <p>(123) 456-7890</p>
        <p>contact@littlelemon.com</p>
      </div>
      <div className="footer-social">
        <h4>Social Media Links</h4>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"><FaFacebookF /></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"><FaXTwitter /></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"><FaInstagram /></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
