import React from "react";
import '../styles/Team.css';
import Img from '../assets/team.jpg'

function Team() {
  return (
    <div className="team-section">
      <div className="team-content">
        <h3>Our Friendly Team</h3>
        <p>
          The advice left many medical experts scratching their heads. The
          coronavirus is a new pathogen, and little is known about the disease
          it causes, called Covid-19, or how patients respond to common
          medications.
        </p>
      </div >
      <div className='team-img'>
         <img src={Img} />
      </div>
    </div>
  );
}

export default Team;
