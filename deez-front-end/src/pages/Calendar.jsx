import React, { useState, useEffect } from "react";

const Calendar = () => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());

  useEffect(() => {
    const lastDay = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(<div key={day} className="calendar-day">{day}</div>);
    }

    setCalendarDays(calendarDays);
  }, [year, month]);

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  return (
    <div className="calendar" style={{ padding: "1rem", border: "1px solid black", background: "rgba(255, 255, 255, 0.8" }}>
      <div className="calendar-header" style={{ marginBottom: "1rem" }}>
        <button onClick={prevMonth}>Prev</button>
        <h2>{new Date(year, month).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</h2>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className="weekdays">
        <div className="weekday">Sun</div>
        <div className="weekday">Mon</div>
        <div className="weekday">Tue</div>
        <div className="weekday">Wed</div>
        <div className="weekday">Thu</div>
        <div className="weekday">Fri</div>
        <div className="weekday">Sat</div>
      </div>
      <div className="days">{calendarDays}</div>
    </div>
  );
};

export default Calendar;


//===========================================================================================================
// import React from "react";
// 
// const Calendar = () => {
  // const date = new Date();
  // const year = date.getFullYear();
  // const month = date.getMonth();
// 
  // const firstDay = new Date(year, month, 1);
  // const lastDay = new Date(year, month + 1, 0);
  // const daysInMonth = lastDay.getDate();
// 
  // const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// 
  // const calendarDays = [];
// 
  // Generate calendar days
  // for (let day = 1; day <= daysInMonth; day++) {
    // calendarDays.push(
      // <div key={day} className="calendar-day">
        {/* {day} */}
      {/* </div> */}
    // );
  // }
// 
  // return (
    // <div className="calendar" style={{ padding: "1rem", border: "1px solid black", background: "rgba(255, 255, 255, 0.8" }}>
      {/* <div className="calendar-header" style={{ marginBottom: "1rem" }}> */}
        {/* <h2>{date.toLocaleDateString("en-US", { month: "long" })} {year}</h2> */}
      {/* </div> */}
      {/* <div className="weekdays" style={{ display: "flex" }}> */}
        {/* {weekdays.map((weekday) => ( */}
          // <div key={weekday} className="weekday" style={{ flexgrow: 1, textAlign: "center" }}>
            {/* {weekday} */}
          {/* </div> */}
        // ))}
      {/* </div> */}
      {/* <div className="days" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "0.5rem", marginTop: "1rem" }}>{calendarDays}</div> */}
    {/* </div> */}
  // );
// };
// 
// export default Calendar;
// 
// 
// 