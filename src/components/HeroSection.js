import React from "react";
import newsList from "./news.js";
import "../styles/HeroSection.css"

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="left-hero">
        <h1>Let us take care of you and your family</h1>
        <p>Here’s how you can reach us</p>
        <button>Enquire Now</button>
        <button style={{background: "#E4BE37", color: "white"}}>Book Online</button>
      </div>
      <div className="right-hero">
        <h3 className='news-title'>What's New</h3>
        <div className='list-news'>
        {newsList.map((newsLetter, index) => {
          return (
            <div className="news">
              <h4>{newsLetter.title}</h4>
              <p>{newsLetter.content}</p>
            </div>
          );
        })}</div>
      </div>
    </div>
  );
}

export default HeroSection;
