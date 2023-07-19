import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Assets/css/get.css";

function VolunteerDetails() {
  const [volunteer, setVolunteers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/get')
      .then(response => {
        setVolunteers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>VOLUNTEER DETAILS</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Skills</th>
            <th>Interests</th>
            <th>Availability</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {volunteer.map(volunteer => (
            <tr key={volunteer.id}>
              <td>{volunteer.id}</td>
              <td>{volunteer.name}</td>
              <td>{volunteer.email}</td>
              <td>{volunteer.skills}</td>
              <td>{volunteer.interests}</td>
              <td>{volunteer.availability}</td>
              <td>{volunteer.resume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VolunteerDetails;
