import React from 'react'
import './about.css';
import DataIcon from '../../assets/data_analytics_icon.png';
import WebDevIcon from '../../assets/web-development_icon.png';
import CyberIcon from '../../assets/cyber_security_icon.png';
import AiIcon from '../../assets/machine-learning_icon.png';

const About = () => {
  return (
    <section id='about'>
      <h1 className="aboutTitle">About Me</h1>
      <hr className='titleDivider' style={{ width: '1400px' }}/>
      <div className="aboutBars">
        <div className="aboutBar">
          <img src={DataIcon} alt="DataIcon" className="aboutBarImg" />
          <div className="aboutBarText">
              <h2>Data Analytics</h2>
              <p>I turn data into insights, helping organizations make 
                informed decisions through analysis and visualization.</p>
          </div>
        </div>

        <div className="aboutBar">
          <img src={WebDevIcon} alt="WebDevIcon" className="aboutBarImg" />
          <div className="aboutBarText">
              <h2>Web Development</h2>
              <p>I build responsive and user-friendly web applications, 
                focusing on functionality and seamless experiences.</p>
          </div>
        </div>

        <div className="aboutBar">
          <img src={CyberIcon} alt="CyberIcon" className="aboutBarImg" />
          <div className="aboutBarText">
              <h2>Cyber Security</h2>
              <p>I enhance security by identifying risks 
                and implementing strategies to protect data and systems</p>
          </div>
        </div>

        <div className="aboutBar">
          <img src={AiIcon} alt="AiIcon" className="aboutBarImg" />
          <div className="aboutBarText">
              <h2>Artificial Intelligence</h2>
              <p>I apply AI to automate tasks and 
                improve decision-making through machine learning 
                and data-driven solutions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;