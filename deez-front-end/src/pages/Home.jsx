import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function Home() {
    return (
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: 'Event 1', date: '2022-01-01' },
            { title: 'Event 2', date: '2022-01-05' },
            // Add more events...
          ]}
        />
      </div>
    );
  }
  
  export default Home;


//======================================================================================================
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { useAuth } from '../context/AuthContext';
// 
// function Home() {
//   const { currentUser } = useAuth();
//   const [selectedDate, setSelectedDate] = useState(new Date());
// 
//   return (
    // <div>
      {/* {currentUser ? ( */}
        // <>
          {/* <p>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</p> */}
          {/* <p>SORRY WE'RE ALL BOOKED FOR THIS YEAR, BUT HERE'S A CALENDAR</p> */}
          <h1>My Calendar</h1>
          {/* <Calendar */}
            // value={selectedDate}
            // onChange={setSelectedDate}
            // minDate={new Date()}
            // maxDate={new Date("2022-12-31")}
            // calendarType="US"
            // showWeekNumbers
            // tileClassName={({ date, view }) => {
            //   if (view === 'month' && (date.getDay() === 0 || date.getDay() === 6)) {
                // return 'highlight-weekend';
            //   }
            // }}
        //   />
        {/* </> */}
    //   ) : (
        // <p>Loading user data...</p>
    //   )}
    {/* </div> */}
//   );
// }
// 
// export default Home;
// 

//=======================================================================================================
// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../context/AuthContext';
// 
// const Home = () => {
    // const { currentUser } = useAuth();
    // const [loading, setLoading] = useState(true);
    // const [calendarDays, setCalendarDays] = useState([]);
// 
    // useEffect(() => {
        // const currentDate = new Date();
        // const year = currentDate.getFullYear();
        // const month = currentDate.getMonth();
// 
        // const lastDay = new Date(year, month + 1, 0).getDate();
        // const firstDayOfWeek = new Date(year, month, 1).getDay();
        // const daysInMonth = new Date(year, month + 1, 0).getDate();
// 
        // const days = [];
        // for (let i = 0; i < firstDayOfWeek; i++) {
            // days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        // }
        // for (let day = 1; day <= daysInMonth; day++) {
            // days.push(<div key={day} className="calendar-day">{day}</div>);
        // }
// 
        // setCalendarDays(days);
        // setLoading(false);
    // }, []);
// 
    // return (
        // <div className='text-2xl font-bold pt-14'>
            {/* {loading ? <p>Loading Calendar...</p> : */}
                // <>
                    {/* {currentUser ? (  // The truthy to make sure the users email is presented once they are logged in */}
                        // <>
                            {/* <p>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</p> */}
                            {/* <p>SORRY WE'RE ALL BOOKED FOR THIS YEAR, BUT HERE'S A CALENDAR</p> */}
                            {/* <div className="calendar" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '1rem', border: '1px solid black' }}> */}
                            {/* <div className="calendar-header" style={{ marginBottom: '1rem' }}> */}
                                    {/* <h2>{new Date().toLocaleDateString('en-US', { month: 'long' })} {new Date().getFullYear()}</h2> */}
                                {/* </div> */}
                                {/* <div className="weekdays" style={{ display: 'flex' }}> */}
                                    {/* <div className="weekday" style={{ flex: 1, textAlign: 'center', border: '1px solid grey', padding: '0.5rem' }}>Sun</div> */}
                                    {/* <div className="weekday" style={{ flex: 1, textAlign: 'center', border: '1px solid grey', padding: '0.5rem' }}>Mon</div> */}
                                    {/* <div className="weekday" style={{ flex: 1, textAlign: 'center', border: '1px solid grey', padding: '0.5rem' }}>Tue</div> */}
                                    {/* <div className="weekday" style={{ flex: 1, textAlign: 'center', border: '1px solid grey', padding: '0.5rem' }}>Wed</div> */}
                                    {/* <div className="weekday" style={{ flex: 1, textAlign: 'center', border: '1px solid grey', padding: '0.5rem' }}>Thu</div> */}
                                    {/* <div className="weekday" style={{ flex: 1, textAlign: 'center', border: '1px solid grey', padding: '0.5rem' }}>Fri</div> */}
                                    {/* <div className="weekday" style={{ flex: 1, textAlign: 'center', border: '1px solid grey', padding: '0.5rem' }}>Sat</div> */}
                                {/* </div> */}
                                {/* <div className="days" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', marginTop: '1rem' }}> */}
                                {/* <div className="day" style={{ border: '1px solid gray', padding: '0.5rem'}}>1</div> */}
                                {/* <div className="day" style={{ border: '1px solid gray', padding: '0.5rem'}}>2</div> */}
                                {/* <div className="day" style={{ border: '1px solid gray', padding: '0.5rem'}}>3</div> */}
                                {/* <div className="day" style={{ border: '1px solid gray', padding: '0.5rem'}}>4</div> */}
                                {/* <div className="day" style={{ border: '1px solid gray', padding: '0.5rem'}}>5</div> */}
                                {/* <div className="day" style={{ border: '1px solid gray', padding: '0.5rem'}}>6</div> */}
                                {/* <div className="day" style={{ border: '1px solid gray', padding: '0.5rem'}}>7</div> */}
                                    {/* {calendarDays} */}
                                {/* </div> */}
                            {/* </div> */}
                        {/* </> */}
                    // ) : (
                        // <p>Loading user data...</p>
                    // )}
                {/* </> */}
            // }
        {/* </div> */}
    // );
// }
// 
// export default Home;