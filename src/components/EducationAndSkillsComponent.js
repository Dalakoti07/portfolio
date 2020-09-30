import React from 'react';
import './EducationAndSkills.css'

function EducationAndSkillsComponent(props){
    return (
        <div>
            <div className="education-skills-container">
                <h1 className="my-heading">Education</h1>
                <div className="education-card-wrapper">
                    <div className="education-card">
                    <h6 className="school-name">Apeejay Stya University</h6>
                        <p className="education-name">Bachelors in Computer Science Engineering</p>
                        <p className="percentage">CGPA of 4.0/4.3</p>
                    </div>

                    <div className="education-card">
                    <h6 className="school-name">Sharda International School</h6>
                        <p className="education-name">Physics Chemistry &amp; Mathematics</p>
                        <p className="percentage">92% CBSE Board</p>
                    </div>
                </div>
            </div>

            <div className="education-skills-container">
                <h1 className="my-heading">Skills</h1>
                <div className="education-card-wrapper">
                {props.skills.map(skill=>(
                        <div key={skill.label} className="skills-card">
                        <p className="skill-label">{skill.label}</p>
                        <div className="skill-container">
                            <div className="skills" style={{width:skill.percentage}}></div>
                        </div>
                        </div>
                    ))}
                
                </div>
            </div>
        </div>

    );
}

export default EducationAndSkillsComponent;