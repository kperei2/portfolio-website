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
      <div className="content-container">
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
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/kevin-pereira-1793b31ba/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://drive.google.com/file/d/1QoG-47LcYw7_FH4PJmOu5oVND65xaRjC/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              title="My Resume"
            >
              <FaFileAlt />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
