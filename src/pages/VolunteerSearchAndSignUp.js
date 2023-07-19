import React, { useState } from 'react';
import '../Assets/css/VolunteerSearchAndSignUp.css';
import Navbar from '../Components/NavBar';

const VolunteerOpportunity = ({ opportunity, onSignUp }) => {
  const { id, title, description, location, cause, skillsRequired } = opportunity;

  const handleSignUp = () => {
    onSignUp(id);
  };

  return (
    <div className="volunteer-opportunity">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Cause:</strong> {cause}
      </p>
      <p>
        <strong>Skills Required:</strong> {skillsRequired}
      </p>
      <button onClick={handleSignUp} >
    <span class="box">
    Sign Up
    </span>
</button>
    </div>
  );
};

const VolunteerSearchAndSignup = () => {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [opportunities] = useState([
    {
      id: 1,
      title: 'Opportunity 1',
      description: 'Description of Opportunity 1',
      location: 'Location 1',
      cause: 'Cause 1',
      skillsRequired: 'Skills Required for Opportunity 1',
    },
    {
      id: 2,
      title: 'Opportunity 2',
      description: 'Description of Opportunity 2',
      location: 'Location 2',
      cause: 'Cause 2',
      skillsRequired: 'Skills Required for Opportunity 2',
    },
  ]);

  const handleSearchChange = (e) => {
    setSearchCriteria(e.target.value);
  };

  const handleSignUp = (opportunityId) => {
    console.log('Sign up for opportunity with ID:', opportunityId);
  };

  const filteredOpportunities = opportunities.filter((opportunity) => {
    return (
      opportunity.location.toLowerCase().includes(searchCriteria.toLowerCase()) ||
      opportunity.cause.toLowerCase().includes(searchCriteria.toLowerCase()) ||
      opportunity.skillsRequired.toLowerCase().includes(searchCriteria.toLowerCase())
    );
  });

  return (
    <div>
      <div>
<Navbar/>
      </div>
      <div>
      <div className="volunteer-search-and-signup">
      <h2>Volunteer Search and Sign-up</h2>
      <input
        type="text"
        placeholder="Search opportunities..."
        value={searchCriteria}
        onChange={handleSearchChange}
      />
      {filteredOpportunities.length > 0 ? (
        filteredOpportunities.map((opportunity) => (
          <VolunteerOpportunity key={opportunity.id} opportunity={opportunity} onSignUp={handleSignUp} />
        ))
      ) : (
        <p>No opportunities found.</p>
      )}
    </div>
      </div>
    </div>
  );
};

export default VolunteerSearchAndSignup;
