import React from 'react';
import '../Assets/css/VolunteerDetails.css'; 
import Navbar from '../Components/NavBar';

const VolunteerDetailsPage = () => {
  return (
    <div>
      <div>
      <div>
      <Navbar/>
      </div>
      </div>
      <div className="volunteer-details-page">
      <header>
        <h1>Volunteer Details</h1>
      </header>
      <main>
        <div className="volunteer-details-container">
          <image src='' alt="Profile Picture" className="profile-picture" />
          <h2 className="volunteer-name">John Doe</h2>
          <p className="volunteer-info">Age: 25</p>
          <p className="volunteer-info">Email: john.doe@example.com</p>
          <p className="volunteer-info">Phone: (123) 456-7890</p>
          <h2 className="section-heading">Skills</h2>
          <ul className="skill-list">
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Problem-solving</li>
          </ul>
          <h2 className="section-heading">Experience</h2>
          <p className="volunteer-info">Volunteered at Local Animal Shelter for 2 years.</p>
          <h2 className="section-heading">Availability</h2>
          <p className="volunteer-info">Weekdays: 9 AM - 5 PM</p>
        </div>
        <div className="volunteer-details-container">
          <image src='' alt="Profile Picture" className="profile-picture" />
          <h2 className="volunteer-name">Jane Smith</h2>
          <p className="volunteer-info">Age: 30</p>
          <p className="volunteer-info">Email: jane.smith@example.com</p>
          <p className="volunteer-info">Phone: (987) 654-3210</p>
          <h2 className="section-heading">Skills</h2>
          <ul className="skill-list">
            <li>Leadership</li>
            <li>Organization</li>
            <li>Public Speaking</li>
          </ul>
          <h2 className="section-heading">Experience</h2>
          <p className="volunteer-info">Volunteered at Community Center for 3 years.</p>
          <h2 className="section-heading">Availability</h2>
          <p className="volunteer-info">Weekends: 10 AM - 4 PM</p>
        </div>
      </main>
    </div>
    </div>
  );
};

export default VolunteerDetailsPage;
