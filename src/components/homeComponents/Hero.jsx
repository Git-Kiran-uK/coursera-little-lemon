import React from 'react';
import Button from '../Button';
import RestaurantFood from '../../assets/restauranfood.jpg';
import '../../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className='hero-content'>
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Button>Reserve a table</Button>
        </div>
        <div className='hero-img'>
          <img src={RestaurantFood} alt='Little lemon restaurant food'/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
