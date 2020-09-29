import React from 'react';
import './Contact.css'

function onClickButton(event) {
    console.log("Button clicked ");
    event.preventDefault();
}

function ContactComponent(){
    return(
        <div>
            <h3 className="contact-heading my-heading">Get In Touch</h3>
            <div className="contact-container">

                <form id="contact-form">
                    <label>Name</label>
                    <input className="input-field" type="text" name="name"/>

                    <label>Subject</label>
                    <input className="input-field" type="text" name="subject"/>

                    <label>Email</label>
                    <input className="input-field" type="text" name="email"/>

                    <label>Message</label>
                    <textarea className="input-field" name="message"></textarea>

                    <input id="submit-btn" onClick={onClickButton} type="submit" value="Send"/>
                </form>

                <h4>Contact Details</h4>
                <div className="footer-contact">
                    <p><a href="mailto:">saurabhdalakoti07@gmail.com</a></p>
                    <p><a href="tel:">91-9643957249</a></p>
                    <p>964/21 Shiv Nagar, Near Sector 10A, Gurgaon, Haryana</p>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent;