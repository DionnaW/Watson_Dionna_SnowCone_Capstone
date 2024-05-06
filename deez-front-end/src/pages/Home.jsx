import React from 'react';
import Calendar from '../pages/Calendar';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const { currentUser } = useAuth();
    return (
        <div>
            <p>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</p> 
            <p>SORRY WE'RE ALL BOOKED FOR THIS YEAR</p>
            <Calendar />
        </div>
    );
}

export default Home;


// import React from 'react';
// import CustomCalendar from './CustomCal';
// import '../components/styles/Calendar.css';
// import { useAuth } from '../context/AuthContext';
// 
// const Home = () => {
    // const { currentUser } = useAuth();
    // return (
        // <div className='text-2xl font-bold pt-14'>
            // AFTER THI WORKS SEE ABOUT DISPLAYING LOGIN INFO SAYINH UR LOGGED IN
            {/* <p>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</p>  */}
            {/* <p>SORRY WE'RE ALL BOOKED FOR THIS YEAR</p> */}
            {/* <CustomCalendar /> */}
        {/* </div> */}
    // );
// }
// 
// export default Home;