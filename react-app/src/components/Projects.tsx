import React, { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "UIC CS Credit Checker",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["HTML", "CSS", "MySQL", "JavaScript"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      id: 2,
      title: "mnml Music",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React Native", "SQLite"],
      githubUrl: "https://github.com/yourusername/task-manager",
    },
    {
      id: 3,
      title: "Yelp API",
      description: "A responsive weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful data visualization.",
      technologies: ["Python", "pandas", "BeautifulSoup"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and clean design principles.",
      technologies: ["React", "TypeScript", "CSS3", "Vite"],
      githubUrl: "https://github.com/yourusername/portfolio",
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setActiveProject(index);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextProject();
    }
    if (isRightSwipe) {
      prevProject();
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2>Projects</h2>
        
        <div className="project-showcase">
          <button 
            className="nav-button prev-button" 
            onClick={prevProject}
            aria-label="Previous project"
          >
            ‹
          </button>
          
          <div 
            className="project-window"
            ref={projectRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="project-card">
              <div className="project-header">
                <h3>{projects[activeProject].title}</h3>
                <div className="project-links">
                  {projects[activeProject].githubUrl && (
                    <a 
                      href={projects[activeProject].githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {projects[activeProject].liveUrl && (
                    <a 
                      href={projects[activeProject].liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="project-description">
                {projects[activeProject].description}
              </p>
              
              <div className="project-technologies">
                {projects[activeProject].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            className="nav-button next-button" 
            onClick={nextProject}
            aria-label="Next project"
          >
            ›
          </button>
        </div>
        
        <div className="project-pagination">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === activeProject ? 'active' : ''}`}
              onClick={() => goToProject(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;