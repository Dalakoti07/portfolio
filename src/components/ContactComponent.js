import React,{useState} from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';


// state 
var currentState
var setState


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

    if(validateForm(currentState)) {
        console.info('Valid Form')
        event.target.reset()
        /*
        emailjs.sendForm('gmail', 'template_29vgg0a', event.target, 'user_0Nd5CmhtMO1z3Ctmj135a')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        event.target.reset()
        */
    }else{
        console.error('Invalid Form')
    }
}

function handleChange(event){
    console.log(`Monitoring change at ${event.target.name} and current state is`)
    event.preventDefault();
    const { name, value } = event.target;
    // getting the errors in currentstate
    let newErrors = currentState;
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
      default:
        break;
    }
    setState(errors=> newErrors)
    console.log(currentState)
}

function getTheInitialState(){
    return{
        nameError: '',
        emailError: '',
        subjectError: '',
        messageError:'',
    }
}

function ContactComponent(){
    [currentState,setState]= useState(()=> getTheInitialState())
    return(
        <div>
            <h3 className="contact-heading my-heading">Get In Touch</h3>
            <div className="contact-container">

                <form id="contact-form" onSubmit={sendEmail}>
                    <div className="test-box">                    
                    <label>Name</label>
                    <input className="input-field" onChange={handleChange} type="text" name="name"/>
                    <span className='error'>{currentState["nameError"]}</span>
                    </div>

                    <label>Subject</label>
                    <input className="input-field" onChange={handleChange} type="text" name="subject"/>{currentState["subjectError"].length>0 && 
                        <span className='error'>{currentState["subjectError"]}</span>}

                    <label>Email</label>
                    <input className="input-field" onChange={handleChange} type="text" name="email"/>{currentState["emailError"].length>0 && 
                        <span className='error'>{currentState.emailError}</span>}

                    <label>Message</label>
                    <textarea className="input-field" name="message"></textarea>

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

export default ContactComponent;