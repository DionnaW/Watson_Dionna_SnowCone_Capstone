//add error message for when user is already registered
import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { doCreateUserWithEmailAndPassword } from '../firebase/Auth';
import '../components/styles/Register.css';

const Register = () => {
    
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            await doCreateUserWithEmailAndPassword(email, password);
            navigate('/home');
        }
    };

    return (
        <>
            {userLoggedIn && <Navigate to={'/home'} replace={true} />}
            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="register-container">
                    <div className="register-title">
                        <h1>Create A New Account</h1>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="register-input"
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                className="register-input"
                            />
                        </div>
                        <div>
                            <label>Confirm Password</label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                required
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                                className="register-input"
                            />
                        </div>
                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}
                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={`register-button ${isRegistering ? 'disabled' : ''}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="register-login-link">
                            Already have an account? <Link to={'/login'}>Log In</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Register;




























