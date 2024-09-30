import React from 'react';
import './intro.css';
import bg from '../../assets/IntroBG.png';
import btnImg from '../../assets/resumeBtn.png'; 

const Intro = () => {
    return (
      <section id="intro">
          <div className='introContent'>
              <span className='hello'>Hello,</span>       
              <span className='introText'>My name is <span className='introName'>Hanzalla Naveed</span><br/> I am a <span className='introName'>Software Engineer</span></span>
              <p className="introPara">
              I’m passionate about creating innovative software solutions and love working with <br /> 
              different technologies to build user-friendly applications and improve system performance. <br /> 
              I'm always excited to connect and share ideas with others in the field!             
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
