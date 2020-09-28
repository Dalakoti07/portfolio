import React from 'react';
import './Contact.css'

function ContactComponent(){
    return(
        <div>
            <h3 className="contact-heading">Get In Touch</h3>
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

                    <input id="submit-btn" type="submit" value="Send"/>
                </form>

                <h4>Contact Details</h4>
                <div class="footer-contact">
                    <p><a href="mailto:">saurabhdalakoti07@gmail.com</a></p>
                    <p><a href="tel:">91-9643957249</a></p>
                    <p><a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/cfD82wVhrUbxUNiV6">964/21 Shiv Nagar<br />Near Sector 10A, Gurgaon, Haryana</a></p>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent;