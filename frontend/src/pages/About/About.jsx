import React from "react";
import './About.scss'
import Footer from '../../components/footer/Footer.jsx'
const About = () => {
  return (
    <div className="about-page">
      <header className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>We are committed to innovation and excellence.</p>
          <p></p>
        </div>
      </header>
      <section className="about-section">
        <div className="container">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Welcome to SEEKER, your go-to solution for connecting with local freelancers to tackle everyday tasks with ease. Our mission is simple: to bridge the gap between individuals seeking help with daily chores and skilled freelancers eager to lend a hand. Whether you need a grocery pickup, help with appliance installations, indoor gardening, or even construction and renovations, we have got you covered.
            </p>
          </div>


          <div className="about-image">
            
          </div>
        </div>


      </section>
      
      
      
      <Footer />
    </div>
    
  );
};

export default About