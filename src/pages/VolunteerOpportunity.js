import React, { useState } from 'react';
import "../Assets/css/VolunteerOpportunity.css"
const VolunteerOpportunityListing = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timeCommitment, setTimeCommitment] = useState('');
  const [location, setLocation] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');
  const [qualifications, setQualifications] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTimeCommitmentChange = (e) => {
    setTimeCommitment(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSkillsRequiredChange = (e) => {
    setSkillsRequired(e.target.value);
  };

  const handleQualificationsChange = (e) => {
    setQualifications(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Time Commitment:', timeCommitment);
    console.log('Location:', location);
    console.log('Skills Required:', skillsRequired);
    console.log('Qualifications:', qualifications);
  };

  return (
    <div className="volunteer-opportunity-listing">
      <h2>Create Volunteer Opportunity Listing</h2>
      <form className="volunteer-opportunity-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} />
        </div>
        <div>
          <label htmlFor="timeCommitment">Time Commitment:</label>
          <input type="text" id="timeCommitment" value={timeCommitment} onChange={handleTimeCommitmentChange} />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={handleLocationChange} />
        </div>
        <div>
          <label htmlFor="skillsRequired">Skills Required:</label>
          <textarea id="skillsRequired" value={skillsRequired} onChange={handleSkillsRequiredChange} />
        </div>
        <div>
          <label htmlFor="qualifications">Qualifications:</label>
          <textarea id="qualifications" value={qualifications} onChange={handleQualificationsChange} />
        </div>
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
};

export default VolunteerOpportunityListing;
