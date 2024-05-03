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
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /><br />
                <button type="submit">Submit</button>
            </form>
            {submitted && <p>Thank you, we have received your form and will get back to you in 24-72 hours.</p>}
        </div>
    );
}

export default Contact;