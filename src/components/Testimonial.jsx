import React from 'react';
import '../styles/Testimonial.css';
import starImage from '../assets/star.png';

function Testimonial({ reviewerName, reviewerImage, rating, review }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={starImage} alt="star" className="star" key={i} />);
    }
    return stars;
  };

  return (
    <div className="testimonial-item">
      <div className="reviewer-info">
        <img src={reviewerImage} alt={reviewerName} className="reviewer-image" />
        <div>
          <h3>{reviewerName}</h3>
          <div className="stars">
            {renderStars()}
          </div>
        </div>
      </div>
      <p>{review}</p>
    </div>
  );
}

export default Testimonial;
