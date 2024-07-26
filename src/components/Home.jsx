import React from 'react';
// import '../styles/Home.css';
import Hero from './homeComponents/Hero';
import Specials from './homeComponents/Specials';
import Testimonials from './homeComponents/Testimonials';
import AboutHome from './homeComponents/AboutHome';

function Home() {
  return (
    <div className="home">
      <Hero/>
      <Specials/>
      <Testimonials/>
      <AboutHome/>
    </div>
  );
}

export default Home;
