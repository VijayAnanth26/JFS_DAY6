import React from 'react';
import "../Assets/css/Profile.css";
import Navbar from '../Components/NavBar';
const ProfilePage = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className="profile">
      <h1>Profile: John Smith</h1>

      <div className="personal-info">
        <h2>Personal Information</h2>
        <p>Name: John Smith</p>
        <p>Age: 32</p>
        <p>Gender: Male</p>
        <p>Location: New York, USA</p>
        <p>Email: john.smith@example.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>

      <div className="about-me">
        <h2>About Me</h2>
        <p>
          I am a passionate individual dedicated to making a positive impact in the world.
          With a background in social work and a deep sense of empathy, I strive to contribute
          my skills and knowledge to help those in need. I strongly believe that volunteering
          is a powerful way to create change and build stronger communities.
        </p>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <ol>
          <li>Social Work: Experienced in providing support and assistance to vulnerable populations...</li>
          <li>Event Planning: Proficient in organizing and coordinating community events...</li>
          <li>Communication: Strong interpersonal and communication skills, both written and verbal...</li>
          <li>Leadership: Skilled in leading teams and coordinating volunteer efforts...</li>
          <li>Problem Solving: Capable of identifying challenges and finding innovative solutions...</li>
        </ol>
      </div>

      <div className="volunteer-experience">
        <h2>Volunteer Experience</h2>
        <ol>
          <li>
            <strong>Volunteer, Homeless Shelter, New York City (2016-2018)</strong>
            <ul>
              <li>Assisted in providing meals, organizing donations, and supporting residents in their transition...</li>
              <li>Conducted workshops on life skills and employment readiness for shelter residents.</li>
            </ul>
          </li>
          <li>
            <strong>Fundraising Volunteer, Red Cross Society (2019-present)</strong>
            <ul>
              <li>Participated in organizing fundraising campaigns to support disaster relief efforts...</li>
              <li>Engaged with the local community to promote awareness of the organization's mission and services.</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="education">
        <h2>Education</h2>
        <p>Bachelor's Degree in Social Work, University of New York, USA (2015)</p>
        <p>Master's Degree in Nonprofit Management, City University of New York, USA (2017)</p>
      </div>

      <div className="interests">
        <h2>Interests</h2>
        <ul>
          <li>Humanitarian causes</li>
          <li>Community development</li>
          <li>Environmental sustainability</li>
          <li>Youth empowerment</li>
        </ul>
      </div>

      <div className="availability">
        <h2>Availability</h2>
        <p>I am available to volunteer remotely on evenings and weekends. For local opportunities...</p>
      </div>

      <div className="additional-info">
        <h2>Additional Information</h2>
        <p>I am fluent in English and have basic proficiency in Spanish. I am technologically proficient...</p>
      </div>

      <div className="references">
        <h2>References</h2>
        <p>Available upon request.</p>
      </div>

      <div className="contact">
        <p>Feel free to reach out if you have any questions or if you think my skills align with any volunteer opportunities.</p>
        <p>Together, let's make a difference!</p>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
