import React from 'react';
import { useHistory } from 'react-router-dom';

function Profile() {
    const history = useHistory();

    function handleLogout() {
    //NEED TO INPUT LOGIC HERE
        history.push('/login');
    }

    return (
        <>
            <h1>Welcome to Your Profile!</h1>
            <p>This is your profile page. You can perform various actions here.</p>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default Profile;