import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function Home() {
    return (
      <div style={{ backgroundColor: 'orchid', padding: '1rem' }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: 'Event 1', date: '2022-01-01' },
            { title: 'Event 1', date: '2022-01-01' },
            { title: 'Wild Turkey Festival', date: '2024-17-05' },
            { title: 'Kids Festival', date: '2024-20-05' },
            // Add more events here when i need to update my calendar... FUTURE USE
          ]}
          eventContent={renderEventContent}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
        />
      </div>
    );
  }

  function renderEventContent(eventInfo) {
    return (
        <div>
            <p>{eventInfo.timeText}</p>
            <p>{eventInfo.event.title}</p>
        </div>
    );
}
  
  export default Home;