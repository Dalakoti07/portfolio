import React from 'react';
import './Project.css'

function ProjectComponent(){
    return(
        <div>
            <div className="project-container">
                <h3 className="my-heading">Projects</h3>
                <div className="tag-container">
                    <div class="chip">All</div>
                    <div class="chip">Django</div>
                    <div class="chip">Deep Learning</div>
                    <div class="chip">Android</div>
                    <div class="chip">Kotlin</div>

                    </div>
            </div>

            <div className="project-card-wrapper">
                <div className="project-card">
                    <img class="thumbnail" alt=""/>
                    <div class="project-preview">
                        <h6 class="project-title">Price Comparison App</h6>
                        <p class="project-intro">A kotlin based android app that does the price comparison of various products from different ecommerce sites</p>
                        <div className="project-links">
                            <a target="blank" href="https://github.com/Dalakoti07/daphnis-labs">Source Code</a>
                            <a target="blank" href="https://github.com/Dalakoti07/daphnis-labs">Product</a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <img class="thumbnail" alt=""/>
                    <div class="project-preview">
                        <h6 class="project-title">Tell me Game</h6>
                        <p class="project-intro">A deep learning model which is amazing</p>
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