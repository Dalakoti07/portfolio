import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';


const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

function sendEmail(event) {
    event.preventDefault();
    emailjs.sendForm('gmail', 'template_29vgg0a', event.target, 'user_0Nd5CmhtMO1z3Ctmj135a')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    event.target.reset()
    
}

class ContactComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nameError: '',
            emailError: '',
            subjectError: '',
            messageError:'',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state)) {
          console.info('Valid Form')
          sendEmail(event)
        }else{
          console.error('Invalid Form')
        }
    }

    handleChange = (event) => {
        // console.log(`Monitoring change at ${event.target.name} and current state is`)
        event.preventDefault();
        const { name, value } = event.target;
        let newErrors = this.state;
        // console.log(newErrors)
    
        switch (name) {
          case 'name': 
            newErrors["nameError"] = 
              value.length < 5
                ? 'Full Name must be at least 5 characters long!'
                : '';
            break;
          case 'email': 
            newErrors["emailError"] = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'subject': 
            newErrors["subjectError"] = 
              value.length < 8
                ? 'Subject must be at least 8 characters long!'
                : '';
            break;
          case 'message': 
            newErrors["messageError"] = 
              value.length < 10
                ? 'Message must be at least 10 characters long!'
                : '';
            break;
          default:
            break;
        }
        this.setState(errors=> newErrors)
        // console.log(this.state)
    }

    render(){
        return(
            <div className="outest-div">
            <h3 className="contact-heading my-heading">Get In Touch</h3>
            <div className="contact-container">

                <form id="contact-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input className="input-field" onChange={this.handleChange} type="text" name="name"/>
                        <span className='error'>{this.state["nameError"]}</span>
                    </div>

                    <div>
                        <label>Subject</label>
                        <input className="input-field" onChange={this.handleChange} type="text" name="subject"/>{this.state["subjectError"].length>0 && 
                            <span className='error'>{this.state["subjectError"]}</span>}
                    </div>

                    <div>
                        <label>Email</label>
                        <input className="input-field" onChange={this.handleChange} type="text" name="email"/>{this.state["emailError"].length>0 && 
                            <span className='error'>{this.state["emailError"]}</span>}
                    </div>

                    <div>
                        <label>Message</label>
                        <textarea onChange={this.handleChange} className="input-field send-message-area" name="message"></textarea>
                        <span className='error'>{this.state["messageError"]}</span>
                    </div>


                    <input id="submit-btn" type="submit" value="Send"/>
                </form>

                <h4>Contact Details</h4>
                <div className="footer-contact">
                    <p><a href="mailto:">saurabhdalakoti07@gmail.com</a></p>
                    <p><a href="tel:">91-9643957249</a></p>
                    <p>964/21 Shiv Nagar, Near Sector 10A, Gurgaon, Haryana</p>
                </div>

                <div>
                    <p className="love">Made with <i className="icon-heart fa fa-heart"></i> by Saurabh Dalakoti</p>
                </div>
            </div>

            </div>
        )
    }
}

export default ContactComponent;