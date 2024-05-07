import React from 'react';
import { useAuth } from '../context/AuthContext'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

function Home() {
  const { currentUser } = useAuth();
  const loading = false;

  return (
    <div style={{ backgroundColor: 'orchid', padding: '1rem', height: 'auto' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</p>
          <p>SORRY WE'RE ALL BOOKED THIS YEAR. HERE ARE SOME EVENTS YOU CAN FIND US AT; UPDATED MONTHLY!</p>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: 'Wild Turkey Fest', date: '2024-17-05' },
              { title: 'Wild Turkey Fest', date: '2024-18-05' },
              { title: 'Kids Festival', date: '2024-20-05' },
              { title: 'Kids Festival', date: '2024-21-05' },
              { title: 'Kids Festival', date: '2024-22-05' },
              { title: 'Kids Festival', date: '2024-23-05' },
              { title: 'Kids Festival', date: '2024-24-05' },
              { title: 'Kids Festival', date: '2024-25-05' },
              { title: 'Petting Zoo', date: '2024-28-05' },
              { title: 'Petting Zoo', date: '2024-29-05' },
              { title: 'Petting Zoo', date: '2024-30-05' },
              { title: 'Petting Zoo', date: '2024-31-05' },
              // UPDATE MONTHLY FOR CROWD CONTROL
            ]}
            eventContent={renderEventContent}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            eventSources={[
              {
                events: [
                  { title: 'Wild Turkey Fest', start: '2024-05-17' },
                  { title: 'Wild Turkey Fest', start: '2024-05-18' },
                  { title: 'Kids Festival', start: '2024-05-20' },
                  { title: 'Kids Festival', start: '2024-05-21' },
                  { title: 'Kids Festival', start: '2024-05-22' },
                  { title: 'Kids Festival', start: '2024-05-23' },
                  { title: 'Kids Festival', start: '2024-05-24' },
                  { title: 'Kids Festival', start: '2024-05-25' },
                  { title: 'Petting Zoo', start: '2024-05-28' },
                  { title: 'Petting Zoo', start: '2024-05-29' },
                  { title: 'Petting Zoo', start: '2024-05-30' },
                  { title: 'Petting Zoo', start: '2024-05-31' },
                  // UPDATE MONTHLY FOR CROWD CONTROL
                ]
              }
            ]}
          />
        </>
      )}
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