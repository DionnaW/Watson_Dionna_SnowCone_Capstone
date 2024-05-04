import React from 'react';
import homeImage from '../views/images/IMG_1725.jpg'; 
// import '../components/styles/Home.css';

export default function Home() {
    return (
        <div style={{
            backgroundImage: `url(${homeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* Content goes here */}
        </div>
    
    )
}