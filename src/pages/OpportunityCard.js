import React from 'react';
import '../Assets/css/OpportunityCard.css'; 
import { Link } from 'react-router-dom';
const OpportunityCard = ({ title, description }) => {
  return (
    <div className="opportunity-card">
      <img src='' alt="Opportunity" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link>Learn More</Link>
    </div>
  );
};

export default OpportunityCard;
