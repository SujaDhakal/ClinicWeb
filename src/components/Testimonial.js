import React from "react";
import "../styles/Testimonial.css";
import Img from "../assets/patient.jpg";

function Testimonial() {
  return (
    <div className="testimonial-sec">
      <h3>What our Patients are saying</h3>
      <p className="testimonial">
        We were attended to quickly and the staff were helpful and organised.
      </p>
      <img src={Img} />
    </div>
  );
}

export default Testimonial;
