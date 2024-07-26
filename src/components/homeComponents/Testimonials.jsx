import React from "react";
import Testimonial from "../Testimonial";
import reviewer1 from "../../assets/reviewer1.png";
import reviewer2 from "../../assets/reviewer2.png";
import reviewer3 from "../../assets/reviewer3.png";
import reviewer4 from "../../assets/reviewer4.png";
import '../../styles/Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-content">
        <Testimonial
          reviewerName="John Doe"
          reviewerImage={reviewer1}
          rating={5}
          review="This is an amazing place! Highly recommended."
        />
        <Testimonial
          reviewerName="Jane Smith"
          reviewerImage={reviewer2}
          rating={4}
          review="Great food and excellent service."
        />
        <Testimonial
          reviewerName="Amanda"
          reviewerImage={reviewer3}
          rating={5}
          review="Amazing food. The service was a bit slow, but overall a fantastic experience."
        />
        <Testimonial
          reviewerName="Brain"
          reviewerImage={reviewer4}
          rating={4}
          review="The pasta was delicious, but the portions were a bit small for the price. Cozy atmosphere."
        />
      </div>
    </section>
  );
}

export default Testimonials;
