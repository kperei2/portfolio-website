import React, { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaRegFile } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  designDocUrl?: string;
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
      description: "A full-stack web application that allows students to check their progress towards graduation requirements. The application uses a MySQL database to store student information and course requirements.",
      technologies: ["HTML", "CSS", "MySQL", "JavaScript"],
      githubUrl: "https://github.com/kperei2/Graduation_Checker",
    },
    {
      id: 2,
      title: "mnml Music",
      description: "A minimalist mobile music player built with React Native and SQlite. The application allows for playlist creation, song playback, and song search. Currently under development.",
      technologies: ["React Native", "SQLite"],
      githubUrl: "https://github.com/kperei2/MNML-music",
    },
    {
      id: 3,
      title: "NBA Betting Analysis",
      description: "An analysis of NBA betting data using Python, pandas, and BeautifulSoup. The analysis includes a comparison of betting odds and actual results, as well as a prediction model for future games.",
      technologies: ["Python", "pandas", "BeautifulSoup"],
      githubUrl: "https://github.com/ihern/418-Project",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and clean design principles.",
      technologies: ["React", "TypeScript", "CSS3", "Vite"],
      githubUrl: "https://github.com/kperei2/portfolio-website",
    },
    {
      id: 5,
      title: "Stellar Sleep",
      description: "A prototype front end application based on Stellar Sleep, a sleep tracking app. The application allows for sleep tracking, a sleep journal, and the ability to play soothing sounds to help users fall asleep.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/kperei2/StellarSleep-422",
      designDocUrl: "https://drive.google.com/file/d/1lku4jUD56IeZ0wHi3d4YuEdo5fqsaPkW/view?usp=drive_link"
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
      <div className="content-container">
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
                    {projects[activeProject].designDocUrl && (
                      <a
                        href={projects[activeProject].designDocUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Design Doc"
                      >
                        <FaRegFile />
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
      </div>
    </section>
  );
};

export default Projects;