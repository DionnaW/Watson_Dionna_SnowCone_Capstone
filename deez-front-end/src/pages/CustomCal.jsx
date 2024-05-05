import React from 'react';
import Calendar from 'react-calendar'; // 
import 'react-calendar/dist/Calendar.css'; // Import the Calendar CSS

const CustomCalendar = () => {
    // Example logic to render calendar days
    const days = Array.from({ length: 30 }, (_, index) => index + 1);

    return (
        <div className="calendar-container">
            {days.map(day => (
                <div key={day} className="calendar-day">
                    {day % 3 === 0 ? <p className="no-openings">No Openings</p> : <p>{day}</p>}
                </div>
            ))}
        </div>
    );
}

export default CustomCalendar;

// const CustomCalendar = () => {
    // Function to format date in a readable format
    // const formatDate = (date) => {
        // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // return date.toLocaleDateString(undefined, options);
    // };
// 
    // Function to determine if the date has no openings
    // const hasNoOpenings = (date) => {
        // Add your logic here to determine if the date has no openings
        // For example, return true if there are no openings for the date
        // return true;
    // };
// 
    // Function to render the tile content for each date
    // const tileContent = ({ date, view }) => {
        // if (view === 'month' && hasNoOpenings(date)) {
            // return <p className="no-openings">No Openings</p>;
        // }
        // return null;
    // };
// 
    // return (
        // <div className="calendar-container">
            {/* <Calendar */}
                // tileContent={tileContent}
                // formatShortWeekday={(locale, date) => formatDate(date).slice(0, 3)} // Format weekday to 3 letters
            // />
        {/* </div> */}
    // );
// }
// 
// export default CustomCalendar;