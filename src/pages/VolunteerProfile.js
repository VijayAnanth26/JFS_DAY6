import React, { useState } from 'react';
import "../Assets/css/Volunteer.css";
import axios from 'axios';

function VolunteerProfileCreation() {
  const handleButtonClick = (event, path) => {
    event.preventDefault();
    window.location.href = path;
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [availability, setAvailability] = useState('');
  const [resume, setResume] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleInterestsChange = (e) => {
    setInterests(e.target.value);
  };

  const handleAvailabilityChange = (e) => {
    setAvailability(e.target.value);
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name : name,
    email : email,
    skills : skills,
    interests : interests,
    availability : availability,
    resume : resume,
    }
    
    axios.post("http://localhost:8080/post", formData)
      .then((response) => {
        console.log(response.formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="volunteer-profile-creation">
      <h2>Create Volunteer Profile</h2>
      <form className="volunteer-profile-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <textarea id="skills" value={skills} onChange={handleSkillsChange} />
        </div>
        <div>
          <label htmlFor="interests">Interests:</label>
          <textarea id="interests" value={interests} onChange={handleInterestsChange} />
        </div>
        <div>
          <label htmlFor="availability">Availability:</label>
          <textarea id="availability" value={availability} onChange={handleAvailabilityChange} />
        </div>
        <div>
          <label htmlFor="resume">Upload Resume:</label>
          <input type="file" id="resume" onChange={handleResumeChange} accept=".pdf,.doc,.docx" />
        </div>
        <button type="submit">
          <span className="box">
            Create Profile
          </span>
        </button>
        <button onClick={(e) => handleButtonClick(e, '/viewdetails')}>
          <span className="box">
            View Details
          </span>
        </button>
      </form>
    </div>
  );
};

export default VolunteerProfileCreation;
