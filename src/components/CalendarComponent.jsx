import './CalendarComponent.css';
import FullCalendar from '@fullcalendar/react';
import DayGridPlugin from '@fullcalendar/daygrid';

function CalendarComponent() {
  return (
    <div className="calendarComponent">
      <h2>Calendar</h2>
      <FullCalendar
        plugins={[ DayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'Event 1', date: '2023-10-01' },
          { title: 'Event 2', date: '2023-10-02' }
        ]}
      />
    </div>
  );
}

export default CalendarComponent;
