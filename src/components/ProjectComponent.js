import React from 'react';
import './Project.css'
import ProjectImage from '../static/media/dash.jpg'

function ProjectComponent(props){
    console.log(props.data," is length of data ")
    return(
        <div>
            <div className="project-container">
                <h3 className="my-heading">Projects</h3>
                <div className="tag-container">
                    <div className="chip">All</div>
                    <div className="chip">Django</div>
                    <div className="chip">Deep Learning</div>
                    <div className="chip">Android</div>
                    <div className="chip">Kotlin</div>

                    </div>
            </div>

            <div className="project-card-wrapper">
                <div className="project-card">
                    <img className="thumbnail" alt="" src={ProjectImage}/>
                    <div className="project-preview">
                        <h6 className="project-title">Price Comparison App</h6>
                        <p className="project-intro">A kotlin based android app that does the price comparison of various products from different ecommerce sites</p>
                        <div className="project-links">
                            <a target="blank" href="https://github.com/Dalakoti07/daphnis-labs">Source Code</a>
                            <a target="blank" href="https://github.com/Dalakoti07/daphnis-labs">Product</a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <img className="thumbnail" alt="" src={ProjectImage}/>
                    <div className="project-preview">
                        <h6 className="project-title">Tell me Game</h6>
                        <p className="project-intro">A deep learning model which is amazing</p>
                        <div className="project-links">
                            <a target="blank" href="https://github.com/Dalakoti07/cricketVsBaseball">Read More</a>
                            <a target="blank" href="https://github.com/Dalakoti07/cricketVsBaseball">Product</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent;