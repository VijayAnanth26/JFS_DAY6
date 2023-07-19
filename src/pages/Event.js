import React, { useState } from 'react';
import "../Assets/css/Event.css";
import Navbar from '../Components/NavBar';

const EventManagement = () => {
  const [events] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleRegistration = (event) => {
    console.log('Registered for event:', event);
  };

  return (
    <div>
      <div>
<Navbar/>
      </div>
      <div className="event-management-container">
      <h1>Event Management</h1>

      <div className="event-list">
        <h2>Upcoming Events</h2>
        {events.length > 0 ? (
          <ul>
            {events.map((event) => (
              <li
                key={event.id}
                className={selectedEvent === event ? 'selected' : ''}
                onClick={() => handleEventClick(event)}
              >
                {event.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming events.</p>
        )}
      </div>

      {selectedEvent && (
        <div className="event-details">
          <h2>Event Details</h2>
          <h3>{selectedEvent.title}</h3>
          <p>Date: {selectedEvent.date}</p>
          <p>Location: {selectedEvent.location}</p>
          <p>Description: {selectedEvent.description}</p>

          <button onClick={() => handleRegistration(selectedEvent)}>
            Register
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default EventManagement;
