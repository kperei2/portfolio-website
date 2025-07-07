import React from 'react';
import { 
  SiJavascript, 
  SiVuedotjs, 
  SiTypescript, 
  SiReact, 
  SiSqlite, 
  SiMysql, 
  SiPython 
} from 'react-icons/si';
import { FaJava, FaMobile } from 'react-icons/fa';

const About: React.FC = () => {
  const skills = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Java', icon: FaJava },
    { name: 'Vue.js', icon: SiVuedotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React.js', icon: SiReact },
    { name: 'React Native', icon: FaMobile },
    { name: 'SQLite', icon: SiSqlite },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Python', icon: SiPython }
  ];

  return (
    <section id="about" className="about-section">
      <div className="content-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I recently graduated with a B.S. in Computer Science from the{' '}
            <a 
              href="https://www.uic.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link"
            >
              University of Illinois at Chicago
            </a>.
            I have always been passionate about creating accessible, user-friendly applications that are easy to use and understand.
          </p>
          <p>In my free time, I enjoy collecting vinyl records, playing video games, and listening to music.</p>
          <p className="skills-intro">Here are some tools I like to use:</p>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="skill-item">
                  <IconComponent />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 