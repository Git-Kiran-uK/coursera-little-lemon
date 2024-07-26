import { IoIosCloudDone } from "react-icons/io";
import React from 'react';

function ConfirmedBooking() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>Your reservation has been confirmed!</h1>
      <IoIosCloudDone size={50} color="green"/>
    </div>
  );
}

export default ConfirmedBooking;
