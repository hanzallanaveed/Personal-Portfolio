import React from 'react';
import './skills.css'; // Adjust this if the CSS filename is different
import cSharp from '../../assets/skillsIcons/C_sharp.png';
import angular from '../../assets/skillsIcons/angular.png';
import azure from '../../assets/skillsIcons/azure.png';
import bootstrap from '../../assets/skillsIcons/bootstrap.png';
import cPlusPlus from '../../assets/skillsIcons/c++.png';
import css from '../../assets/skillsIcons/css.png';
import docker from '../../assets/skillsIcons/docker.png';
import entityFramework from '../../assets/skillsIcons/entityframework.png';
import git from '../../assets/skillsIcons/git.png';
import html from '../../assets/skillsIcons/html.png';
import java from '../../assets/skillsIcons/java.png';
import javascript from '../../assets/skillsIcons/javascript.png';
import jira from '../../assets/skillsIcons/jira.png';
import kubernetes from '../../assets/skillsIcons/kubernetes.png';
import linux from '../../assets/skillsIcons/linux.png';
import microsoftBlazor from '../../assets/skillsIcons/microsoftblazor.png';
import mysql from '../../assets/skillsIcons/mysql.png';
import nodejs from '../../assets/skillsIcons/nodejs.png';
import powerapps from '../../assets/skillsIcons/powerapps.png';
import python from '../../assets/skillsIcons/python.png';

// Categorizing the skills
const languages = [
  cSharp, java, javascript, cPlusPlus, python, css,html
];

const technologies = [
  angular, azure, bootstrap, docker, entityFramework,
  git, jira, kubernetes, linux, microsoftBlazor, mysql, nodejs, powerapps,
];

const Skills = () => {
    return (
      <section id='skills'>
        <h1 className="skillsTitle">My Skills</h1>
        <hr className='titleDivider' />
        
        <div className="skillsSection">
          <h2 className="skillsSubtitle">Languages</h2>
          <div className="skillsContainer">
            {languages.map((img, index) => (
              <div className="skillCard" key={index}>
                <img src={img} alt={`Language ${index}`} className="skillImage" />
                <div className="skillName"> {/* New container for skill name */}
                  {['C#', 'Java', 'JavaScript', 'C++', 'Python', 'CSS', 'HTML'][index]} {/* Replace with appropriate names */}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skillsSection">
          <h2 className="skillsSubtitle">Technologies</h2>
          <div className="skillsContainer">
            {technologies.map((img, index) => (
              <div className="skillCard" key={index}>
                <img src={img} alt={`Technology ${index}`} className="skillImage" />
                <div className="skillName"> {/* New container for skill name */}
                  {['Angular', 'Azure', 'Bootstrap', 'Docker', 'Entity Framework', 'Git', 'Jira', 'Kubernetes', 'Linux', 'Microsoft Blazor', 'MySQL', 'Node.js', 'PowerApps'][index]} {/* Replace with appropriate names */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default Skills;
