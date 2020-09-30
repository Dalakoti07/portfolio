import React from 'react';
import './About.css'
import backGroundImage from '../static/media/laptop.jpg'
import StackOverFlowLogo from '../static/media/Stack_Overflow_icon.png'
import linkedInLogo from '../static/media/LinkedIn.jpg'
import twitterLogo from '../static/media/twitter.png'
import githubLogo from '../static/media/github.png'
import ProfilePhoto from '../static/media/profile.jpg'
import Emoji from './Emoji';
import resumePDF from '../resume.pdf'

function AboutComponent(){
    return (
        <div className="about-full-wrapper">
        <div className="about-wrapper" style={{'backgroundImage':`url(${backGroundImage})`}}>
            <h1 className="name-heading">Hi I'm Saurabh Dalakoti</h1>
            <div className="social-wrapper">
                <a rel="noopener noreferrer" href="https://github.com/Dalakoti07/" target="_blank"><img alt="" src={githubLogo} className="social-platform github-logo"/></a> 
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/saurabh-d-990930145/" target="_blank"><img alt="" src={linkedInLogo} className="social-platform linkedIn-logo"/></a>
                <a rel="noopener noreferrer" href="https://stackoverflow.com/users/10386258/dalakoti07" target="_blank"><img alt="" src={StackOverFlowLogo} className="social-platform stackoverflow-logo"/></a>
                <a rel="noopener noreferrer" href="https://twitter.com/SaurabhDalakot5" target="_blank"><img alt="" src={twitterLogo} className="social-platform twitter-logo"/></a>
            </div>
        </div>
        <div className="bio">
            <div className="bio-column-1">
                <img alt="" className="my-image" src={ProfilePhoto}/>
            </div>
            <div className="bio-column-2">
                <h6 className="bio-text">
                    I am an aspiring software developer, I have experience of making android apps, and love to learn new tech stack and appreciate the new way of doing things and what these new frame-works bring to the table. 
                    I know android, django, nodeJS.
                    I think code is like poem, and coders should strive to be poet <Emoji symbol="😀" label="happy"/>.
                </h6>
                <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="download-button"><i className="icon-download fa fa-download"></i> Download Resume</a>
            </div>
        </div>
        </div>
    )
}

export default AboutComponent;