import React from 'react';
import '../Assets/css/Analytics.css';
import Navbar from '../Components/NavBar';

const Analytics = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="analytics-container">
      <h1>Analytics and Reporting</h1>

      <div className="metrics">
        <h2>Volunteer Engagement Metrics</h2>
      </div>

      <div className="hours-tracking">
        <h2>Hours Tracking</h2>
      </div>

      <div className="event-impact">
        <h2>Event Impact Assessment</h2>
      </div>

      <div className="custom-reports">
        <h2>Customizable Reports</h2>
      </div>
    </div>
    </div>
  );
};

export default Analytics;
