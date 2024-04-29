import React from 'react';
import '../components/register.css';

function Register() {
    function validateForm() {
        // Add your form validation logic here
        return true; // Return true for now to submit the form
    }

    return (
        <>
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/contact">CONTACT US</a></li>
                </ul>
            </nav>
            <h2>Thank you for registering with us!</h2>
            <form onSubmit={validateForm}>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required /><br /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required /><br /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required /><br /><br />

                <button type="submit">Register</button>
            </form>
            <footer>
                &#169; 2021 Deez Cold Ones LLC. All rights reserved.
            </footer>
        </>
    );
}

export default Register;