import React from 'react';
import { useHistory } from 'react-router-dom';

function Profile() {
    const history = useHistory();

    function handleLogout() {
        // Perform logout logic here
        // For demo purposes, redirect to the login page after logout
        history.push('/login');
    }

    return (
        <>
            <h1>Welcome to Your Profile!</h1>
            <p>This is your profile page. You can perform various actions here.</p>
            <button onClick={handleLogout}>Logout</button>
            <footer>
                &#169; 2021 Deez Cold Ones LLC. All rights reserved.
            </footer>
        </>
    );
}

export default Profile;