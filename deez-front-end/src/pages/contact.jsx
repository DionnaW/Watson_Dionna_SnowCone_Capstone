import React, { useState } from 'react';
// import '../components/contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) { //Need to change this to go to my endpoint server once i get my backend going
        event.preventDefault();
        console.log('Name:', name);
        console.log('Phone Number:', phone);
        setSubmitted(true);
    };

    return (
        <div className="container">
            <h1>We do catering, Birthday Parties, and Much More...</h1>
            <h1>Please fill out the form with your name, phone number, and event details.</h1>
        </div>
    );
}

export default Contact;