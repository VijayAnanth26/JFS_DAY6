import React from 'react';
import OpportunityCard from './OpportunityCard';

const Opportunity = () => {
  const opportunities = [
    {
      title: 'Volunteer at Local Food Bank',
      description: 'Help distribute food to those in need and make a difference in your community.',
      
    },
    {
      title: 'Support Environmental Cleanup',
      description: 'Join us in cleaning up local parks and preserving the environment.',
      
    },
  ];

  return (
    <div>
      <header>
        <h1>Opportunities</h1>
      </header>
      <main>
        <div className="opportunity-card-container">
          {opportunities.map((opportunity, index) => (
            <OpportunityCard
              key={index}
              title={opportunity.title}
              description={opportunity.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Opportunity;
