import React from 'react';
import "../Assets/css/Resource.css"
import Navbar from '../Components/NavBar';
const ResourceItem = ({ title, description }) => {
  return (
    <div className="resource-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <button  >
    <span class="box">
    Access Resource
    </span>
</button>
      
    </div>
  );
};

const VolunteerTrainingAndResources = () => {
  const resources = [
    {
      title: 'Volunteer Guide',
      description: 'A comprehensive guide for volunteers',
    },
    {
      title: 'Training Video Series',
      description: 'A series of training videos for volunteers',
    },
  ];

  return (
    
    <div>
      <div>
      <Navbar/>
      </div>
      <div>
      <div className="volunteer-training-and-resources">
      <h2>Volunteer Training and Resources</h2>
      <div className="resource-list">
        {resources.map((resource, index) => (
          <ResourceItem
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default VolunteerTrainingAndResources;
