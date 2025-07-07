import React, { useState, useEffect } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Home: React.FC = () => {
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setGradientPos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, #4a7c59 0%, #2d5016 100%)`,
    color: 'white',
  };

  return (
    <section id="home" className="home-section" style={gradientStyle}>
      <div className="content-container">
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
      </div>
    </section>
  );
};

export default Home; 