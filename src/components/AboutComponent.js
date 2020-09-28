import React from 'react';
import './About.css'

// TODO put font awesome icon 
// about (name,) and profile(stackoverflow, github, linkedin)
function AboutComponent(){
    return (
        <div className="about-full-wrapper">
        <div className="about-wrapper">
            <h1 className="name-heading">Hi I'm Saurabh Dalakoti</h1>
            <div className="social-wrapper">
                <div className="social-platform github-logo"></div>
                <div className="social-platform linkedIn-logo"></div>
                <div className="social-platform stackoverflow-logo"></div>
                <div className="social-platform twitter-logo"></div>
            </div>
        </div>
        <div className="bio">
            <div className="bio-column-1">
                <div className="my-image">

                </div>
            </div>
            <div className="bio-column-2">
                <h6 className="bio-text">
                    I am a passionate software developer, I have experience of making android apps, and love to solve new interesting problems and make software solutions to them. I know android, django, nodeJS.
                    I have ...
                    I am a passionate software developer, I have experience of making android apps, and love to solve new interesting problems and make software solutions to them. I know android, django, nodeJS.
                    I have ...
                </h6>
            </div>
        </div>

        </div>
    )
}

export default AboutComponent;