import React from 'react';
import { MdDeliveryDining } from "react-icons/md";
import '../styles/SpecialItem.css';

function SpecialItem({ children, price, image, title }) {
  return (
    <div className="special-item">
      <div className="special-item-img">
        <img src={image} alt={title} />
      </div>
      <div className="special-item-text">
        <div className="special-item-price">
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
        <p>{children}</p>
        <button type="button" className="order-button">
          Order Delivery <MdDeliveryDining />
        </button>
      </div>
    </div>
  );
}

export default SpecialItem;
