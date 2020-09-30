import React from 'react';
import './Experience.css'

function ExperienceComponent(props){
    return(
        <div>
            <a name="experience" href="/#"></a>
            <div className="experience-container">
                <h3 className="my-heading">Internships</h3>
            </div>

            <div className="experience-card-wrapper">
                {props.experiences.map(experience=>(
                    <div key={experience.company_name} className="experience-card">
                    <h6 className="company-name">{experience.company_name}</h6>
                    <p className="role-title">{experience.role_title}</p>
                    {
                        experience.description.map((desc)=> {
                        return <p key={desc} className="work-description">{desc}</p>
                        })
                    }
                    <a target="blank" href={experience.link}>Read More</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperienceComponent;