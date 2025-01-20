import React from 'react';
import './projects.css';
import TomoAiImage from '../../assets/TomoAiImage.png';
import MarketplaceImage from '../../assets/MarketplaceImg.png';
import wordleImage from '../../assets/wordle.png';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectTitle">My Projects</h2>
      <hr className='titleDivider' style={{ width: '1400px' }}/>
      <div className="projectImgs">
  <a href="https://github.com/hanzallanaveed/TomoAI" target="_blank" rel="noopener noreferrer">
    <div className="projectContainer">
      <img src={TomoAiImage} alt="CMS Project" className={`projectImg`} style={{ width: '449px', height: '220px'}} />
      <p className="projectDescription">Generative AI Prompt-Based Web Application</p>
      <p className="projectDetails">
        Built an AI-driven web app with <b style={{ color: '#00C2F3' }}>Next.js</b>, <b style={{ color: '#00C2F3' }}>Express.js</b>, <b style={{ color: '#00C2F3' }}>LangChain</b>, and <b style={{ color: '#00C2F3' }}>MongoDB</b>, integrating <b style={{ color: '#00C2F3' }}>OpenAI GPT</b> for context-aware query responses, streamlining course material management and reducing student query resolution time.
      </p>
    </div>
  </a>

  <a href="https://github.com/hanzallanaveed/Wordle" target="_blank" rel="noopener noreferrer">
    <div className="wordleContainer">
      <img src={wordleImage} alt="Wordle Project" className={`projectImg`} style={{ width: '290px', height: '400px' }} />
      <p className="projectDescription">Wordle Game</p>
      <p className="projectDetails">
        Designed and developed a word guessing game that allows the user to guess the generated word using <b style={{ color: '#00C2F3' }}>HTML</b>, <b style={{ color: '#00C2F3' }}>CSS</b>, <b style={{ color: '#00C2F3' }}>JavaScript</b>, <b style={{ color: '#00C2F3' }}>Node.js</b>, and <b style={{ color: '#00C2F3' }}>Express</b>, incorporating asynchronous API calls.
      </p>
    </div>
  </a>

  <a href="https://github.com/hanzallanaveed/BazaarMarketplaceApp" target="_blank" rel="noopener noreferrer">
    <div className="projectContainer">
      <img src={MarketplaceImage} alt="Gallery Project" className={`projectImg`} style={{ width: '190px', height: '400px' }} />
      <p className="projectDescription">Bazaar Marketplace App</p>
      <p className="projectDetails">
        Created a mobile marketplace app using <b style={{ color: '#00C2F3' }}>React Native</b>, <b style={{ color: '#00C2F3' }}>Express.js</b>, and <b style={{ color: '#00C2F3' }}>MongoDB</b>, with <b style={{ color: '#00C2F3' }}>Firebase Authentication</b>, enabling secure profiles to buy and sell items, add photos via mobile camera, search listings, and view locations through <b style={{ color: '#00C2F3' }}>Google Maps API</b>, offering a modern, intuitive, and seamless user experience.
      </p>
    </div>
  </a>
</div>

    </section>
  );
};


export default Projects;