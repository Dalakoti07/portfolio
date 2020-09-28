import React from 'react';
import './Project.css'

function ProjectComponent(props){
    // console.log(props.projectsList," is project list ")
    return(
        <div>
            <div className="project-container">
                <h3 className="my-heading">Projects</h3>
                <div className="tag-container">
                    {props.tags.map(tag => (
                       <div className="chip" key={tag} onClick= {()=> props.tagOnClick(tag)}>{tag}</div>
                    ))}
                </div>
            </div>

            <div className="project-card-wrapper">
                {props.projectsList.map(project=>(
                    <div key={project.title} className="project-card">
                    <img className="thumbnail" alt="" src={project.imageUrl}/>
                    <div className="project-preview">
                        <h6 className="project-title">{project.title}</h6>
                        <p className="project-intro">{project.intro}</p>
                        <div className="project-links">
                            <a target="blank" href={project.sourceCodeUrl}>Source Code</a>
                            <a target="blank" href={project.deployedUrl}>Product</a>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectComponent;