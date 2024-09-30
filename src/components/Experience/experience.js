import React, { useState } from 'react';
import './experience.css';
import CNL from '../../assets/cnlIcon.png';
import OPG from '../../assets/opgIcon.png';
import Walmart from '../../assets/walmartIcon.png';

const Experience = () => {
    const [hoveredCompany, setHoveredCompany] = useState("CNL");

    const handleMouseEnter = (company) => {
        setHoveredCompany(company);
    };

    const handleMouseLeave = () => {
    };

    const companyInfo = {
        CNL: {
            position: "Cyber Security Student",
            description: (
                <>
                    • Developed a Full-Stack Maturity Model Application using Blazor, JavaScript, HTML, CSS, C#, REST APIs, Entity Framework, while applying Scrum principles to empower critical infrastructure entities with tailored cybersecurity solutions and metrics.<br /> <br />
                    • Conducted research on an ethical hacking and vulnerability detection tool: Wi-Fi Pineapple, to audit Wi-Fi networks and perform penetration tests, enhancing Operational Technology security and maturity. <br /><br />
                    • Implemented Cyber Security policies and procedures in alignment with NIST and CSA frameworks to enhance organizational security posture and maturity. <br /><br />
                    • Collaborated with stakeholders to implement cybersecurity tools, enhancing Operational Technology security.
                </>
            ),
        },
        OPG: {
            position: "Software Engineering Intern",
            description: (
                <>
                    • Developed an advanced Darlington Fuel Handling Simulator using JavaScript, HTML, CSS, resulting in a successful integration into the Fuel Handling Classroom and significantly elevating the training experience for nuclear operations.<br /><br />
                    • Developed multiple dashboards for the Simulator Section utilizing Python, DAX, SQL, and Power BI, incorporating Agile Methodology, resulting in enhanced workflow optimization.<br /><br />
                    • Refactored the Reference Page of the Simulator Internal Website using HTML, CSS, Angular, and Bootstrap UI, resulting in an enhanced user experience.<br /><br />
                    • Orchestrated and executed a targeted campaign to showcase the Darlington Fuel Handling Simulator, resulting in the successful engagement of over 500 OPG Power Expo attendees.
                </>
            )
        },
        Walmart: {
            position: "OMNI Customer Fulfillment Associate",
            description: (
                <>
                    • Utilized strong time management skills to efficiently process and fulfill online grocery orders, ensuring timely delivery and accuracy.<br /><br />
                    • Employed effective communication to address customer inquiries and concerns, actively listening to feedback and resolving issues through critical thinking and problem-solving strategies.<br /><br />
                    • Achieved a significant increase in customer satisfaction ratings, contributing to the overall success of the online grocery service and fostering positive relationships with customers.<br /><br />
                </>
            )
                    },
    };

    return (
        <section id="experience">
            <h1 className='experienceTitle'>Experience</h1>
            <hr className='titleDivider' style={{ width: '1100px' , marginLeft: '220px'}} />
            <div id="companies">
                {['CNL', 'OPG', 'Walmart'].map((company) => (
                    <div 
                        key={company} 
                        className={`companyImgs ${hoveredCompany === company ? 'active' : ''}`}
                        onMouseEnter={() => handleMouseEnter(company)} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <img 
                            src={company === 'CNL' ? CNL : company === 'OPG' ? OPG : Walmart} 
                            alt={company} 
                            className='companyImg' 
                        />
                    </div>
                ))}
            </div>
            <div className='companyInfo'>
                <h2 className='companyPosition'>{companyInfo[hoveredCompany].position}</h2>
                <hr className='divider' />
                <p className='companyDescription'>
                    {companyInfo[hoveredCompany].description}
                </p>
            </div>
        </section>
    );
}

export default Experience;
