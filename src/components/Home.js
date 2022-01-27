import React from "react";
import HeroSection from "./HeroSection";
import Belief from "./Belief";
import Team from "./Team";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <div className="Home">
      <HeroSection />
      <Belief />
      <Team />
      <Testimonial />
    </div>
  );
}

export default Home;
