import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { doSignOut } from '../firebase/Auth'
import '../components/styles/Home.css';

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();
    return (
        <nav className='nav'>
            {
                userLoggedIn
                    ?
                    <>
                        
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
                    </>
                    :
                    <>
                        <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/register'}>Register Here</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/contact'}>Contact Us</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/flavors'}>Flavors</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/toppings'}>Toppings</Link>
                    </>
            }

        </nav>
    );
}

export default Header;

