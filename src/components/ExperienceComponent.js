import React from 'react';
import './Experience.css'

function ExperienceComponent(){
    return(
        <div>
            <div className="experience-container">
                <h3 className="my-heading">Internships</h3>
            </div>

            <div className="experience-card-wrapper">
                <div className="experience-card">
                    <h6 className="company-name">Intellify</h6>
                    <p className="role-title">Android Developer, December 2019 to March 2020 </p>
                    <p className="work-description">Intellify is an educational startup with keeping in mind the idea of making
                    high quality education available to all people around India, irrespective of everything.</p>
                    <p className="work-description">I worked on the android App, and implemented it with MVVM architecture and clean coding, 
                    using external libraries like <b>Retrofit</b>, Glide, etc.</p>
                    <a target="blank" href="https://github.com/Dalakoti07/daphnis-labs">Read More</a>
                </div>

                <div className="experience-card">
                    <h6 className="company-name">Intellify</h6>
                    <p className="role-title">Android Developer, December 2019 to March 2020 </p>
                    <p className="work-description">Intellify is an educational startup with keeping in mind the idea of making
                    high quality education available to all people around India, irrespective of everything.</p>
                    <p className="work-description">I worked on the android App, and implemented it with MVVM architecture and clean coding, 
                    using external libraries like <b>Retrofit</b>, Glide, etc.</p>
                    <a target="blank" href="https://github.com/Dalakoti07/daphnis-labs">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default ExperienceComponent;