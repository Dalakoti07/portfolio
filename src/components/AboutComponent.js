import React from 'react';
import './About.css'
import StackOverFlowLogo from '../static/media/Stack_Overflow_icon.png'
import linkedInLogo from '../static/media/LinkedIn.jpg'
import twitterLogo from '../static/media/twitter.png'
import githubLogo from '../static/media/github.png'

function AboutComponent(){
    return (
        <div className="about-full-wrapper">
        <div className="about-wrapper">
            <h1 className="name-heading">Hi I'm Saurabh Dalakoti</h1>
            <div className="social-wrapper">
                <a rel="noopener noreferrer" href="https://github.com/Dalakoti07/" target="_blank"><img alt="" src={githubLogo} className="social-platform github-logo"/></a> 
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/saurabh-d-990930145/" target="_blank"><img alt="" src={linkedInLogo} className="social-platform linkedIn-logo"/></a>
                <img alt="" src={StackOverFlowLogo} className="social-platform stackoverflow-logo"/>
                <a rel="noopener noreferrer" href="https://twitter.com/SaurabhDalakot5" target="_blank"><img alt="" src={twitterLogo} className="social-platform twitter-logo"/></a>
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