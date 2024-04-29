import React from 'react';
import '../components/login.css';

function Login() {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/register">REGISTER HERE</a></li>
                    <li><a href="/contact">CONTACT US</a></li>
                </ul>
            </nav>
            <h1>Welcome Back!</h1>
            <p>Don't have an account? <br /> Click the registration button to create an account.</p>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required /><br />
                <input type="submit" value="Log In" />
            </form>
            <footer>
                &#169; 2021 Deez Cold Ones LLC. All rights reserved.
            </footer>
        </>
    );
}

export default Login;