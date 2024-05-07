import React from 'react';
import ContactForm from '../pages/ContactForm';

function Contact() {
  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8', width: '100%', height: '100%', alignContent: 'center', display: 'flex', flexDirection: 'column' }}>
      <h2>We do Birthday Parties and Special Events. Please fill out the form with your name, phone number, and event details.</h2>
      <p>1300 Snow Cone Blvd</p>
      <p>Columbus, Ohio 43215</p>
      <p>614-259-7789</p>

      <ContactForm />
    </div>
  );
}

export default Contact;


//====================================================================================================================
// import React, { useState } from 'react';
// import '../components/contact.css';
// 
// function Contact() {
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [date, setDate] = useState('');
    // const [time, setTime] = useState('');
    // const [submitted, setSubmitted] = useState(false);
// 
    // function handleSubmit(event) { //Need to change this to go to my endpoint server once i get my backend going
        // event.preventDefault();
        // console.log('Name:', name);
        // console.log('Phone Number:', phone);
        // setSubmitted(true);
    // };
// 
    // return (
        // <div className="container">
            {/* <h1>We do catering, Birthday Parties, and Much More...</h1> */}
            {/* <h1>Please fill out the form with your name, phone number, and event details.</h1> */}
        {/* </div> */}
    // );
// }
// 
// export default Contact;