import React, { useState, useEffect } from 'react';
import './intro.css';
import bg from '../../assets/IntroBG.jpg';
import btnImg from '../../assets/resumeBtn.png'; 

const Intro = () => {
    // State to manage the current title
    const [currentTitle, setCurrentTitle] = useState("Software Engineer");
    const [fadeClass, setFadeClass] = useState("fade-in");

    // Array of titles to rotate through
    const titles = [
      "Software Engineer",
      "Data Engineer",
      "Cyber Security Specialist",
      "Web Developer",
      "Full Stack Developer",
      "Cloud Computing Advocate",
      "DevOps Engineer",
      "Tech Enthusiast",
      "Problem Solver",
      "Creative Thinker",
      "Lifelong Learner",
      "Team Player"
  ];
  
    useEffect(() => {
        let index = 0;

        // Set interval to update the title every 3 seconds
        const interval = setInterval(() => {
            setFadeClass("fade-out"); // Start fade-out effect
            setTimeout(() => {
                index = (index + 1) % titles.length; // Update title index
                setCurrentTitle(titles[index]); // Change the title
                setFadeClass("fade-in"); // Start fade-in effect
            }, 500); // Timing matches the CSS animation duration
        }, 3000); // Total duration per title display

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
      <section id="intro">
          <div className='introContent'>
              <span className='hello'>Hello,</span>       
              <span className='introText'>
                My name is <span className='introName'>Hanzalla Naveed</span><br/> 
                I am a <span className={`introName ${fadeClass}`}>{currentTitle}</span>
              </span>
              <p className="introPara">
              I’m deeply passionate about crafting innovative software solutions that make a real difference. <br />
              I love exploring new technologies to create user-friendly applications and enhance system performance. <br />
              I’m always excited to connect and share ideas with others in the tech community!            
              </p>
              <a href="/HanzallaNaveedResume.pdf" target="_blank" rel="noopener noreferrer"> 
                <button className='btn'>
                  <img src={btnImg} alt="Resume Icon" className="btnImg" />
                  <span className="btnText">Resume</span>
                </button>
              </a>        
          </div>
          <img src={bg} alt="Background" className='bg'/>
      </section>
    );
}

export default Intro;
