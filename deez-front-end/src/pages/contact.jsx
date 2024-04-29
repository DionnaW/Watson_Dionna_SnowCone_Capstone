import React, { useState } from 'react';
import '../components/contact.css';

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
        console.log('Date:', date);
        console.log('Time:', time);
        setSubmitted(true);
    }

    return (
        <div className="container">
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                </ul>
            </nav>
            <h2>We do catering, Birthday Parties, and Much More...</h2>
            <h2>Fill out the form with your idea and we'll let you know if we can pleez you!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /><br />
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required /><br />
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required /><br />
                <button type="submit">Submit</button>
            </form>
            {submitted && <p>Thank you, we have received your form and will get back to you in 24-72 hours.</p>}
            <footer>
                &#169; 2021 Deez Cold Ones LLC. All rights reserved.
            </footer>
        </div>
    );
}

export default Contact;