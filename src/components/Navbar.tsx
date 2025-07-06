import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <h1>Kevin Pereira</h1>
        </div>
        
        <div className="nav-links">
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
        </div>
        
        <div className="nav-social">
          <a 
            href="https://github.com/kperei2" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            data-tooltip="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/kevin-pereira-1793b31ba/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            data-tooltip="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://drive.google.com/file/d/1ZVe2_2z1BdfXD3JF07HL_0H1hpLkCqe_/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            data-tooltip="My Resume"
          >
            <FaFileAlt />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;