import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="hero-title">Hi, I'm Kevin.</h1>
        <p className="hero-subtitle">I like to design responsive, user-friendly websites and applications.</p>
        <p className="hero-description">
          I'm a software engineer based in Chicago, Illinois. I'm interested in intuitive, user-focused applications. I'm currently pursuing roles in IT, software development, web development, and data science.
        </p>
        <div className="button-container">
          <a href="mailto:krpereira02@gmail.com" className="email-button">
            <FaEnvelope />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home; 