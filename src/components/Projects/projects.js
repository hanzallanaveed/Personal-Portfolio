import React from 'react';
import './projects.css';
import cmsImage from '../../assets/CourseManagementSystem.png';
import galleryImage from '../../assets/artGalleryWebsite.png';
import wordleImage from '../../assets/wordle.png';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectTitle">My Projects</h2>
      <hr className='titleDivider' style={{ width: '1400px' }}/>
      <div className="projectImgs">
      <a href="https://github.com/hanzallanaveed/Course-Management-System" target="_blank" rel="noopener noreferrer">
        <div className="projectContainer">
            <img src={cmsImage} alt="CMS Project" className={`projectImg`} style={{ width: '449px', height: '220px' }} />
            <p className="projectDescription">Course Management System</p>
            <p className="projectDetails">
            Developed a Course Management System using React, HTML, CSS, and Mongoose, 
            incorporating Axios for efficient data handling, allowing users to manage courses and access resources seamlessly.
            </p>
        </div>
        </a>

        <a href="https://github.com/hanzallanaveed/Wordle" target="_blank" rel="noopener noreferrer">
        <div className="wordleContainer">
            <img src={wordleImage} alt="Wordle Project" className={`projectImg`} style={{ width: '290px', height: '400px' }} />
            <p className="projectDescription">Wordle Game</p>
            <p className="projectDetails">
            Designed and developed a word guessing game that allows the user to guess the generated word using HTML, CSS, JavaScript, Node.js, and Express, incorporating asynchronous API calls.
            </p>
        </div>
        </a>


        <a href="https://github.com/hanzallanaveed/Art-Gallery-Website" target="_blank" rel="noopener noreferrer">
        <div className="projectContainer">
            <img src={galleryImage} alt="Gallery Project" className={`projectImg`} style={{ width: '429px', height: '220px' }} />
            <p className="projectDescription">Art Gallery Website</p>
            <p className="projectDetails">
            Designed and developed an Art Gallery Website showcasing iconic art pieces, 
            allowing users to acquire artworks through a blind bidding process facilitated by a submission form, 
            utilizing Bootstrap UI, HTML, and CSS for an intuitive user experience.
            </p>
        </div>
        </a>

      </div>
    </section>
  );
};


export default Projects;