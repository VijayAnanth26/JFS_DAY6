import React from 'react';
import '../Assets/css/OpportunityPage.css';
function OpportunityPage() {
  return (
    <div>
    <div className="opportunity-page">
      <header>
        <h1>Volunteer at Local Food Bank</h1>
      </header>
      <main>
        <div className="opportunity-details">
          <img src="" alt="Opportunity" />
          <h2>Description</h2>
          <p>
            Help distribute food to those in need and make a difference in your community. The local food bank is seeking volunteers to assist with sorting, packaging, and distributing food items. This is a great opportunity to give back and contribute to reducing food insecurity in our area.
          </p>
          <h2>Requirements</h2>
          <ul>
            <li>Minimum age: 18 years</li>
            <li>Ability to lift up to 25 pounds</li>
            <li>Good communication skills</li>
          </ul>
          <h2>Location</h2>
          <p>123 Main Street, Anytown, USA</p>
          <h2>Contact</h2>
          <p>Email: volunteer@foodbank.org</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </main>
    </div>
    <div className="opportunity-page">
    <header>
      <h1>Tutoring Program for Underprivileged Students</h1>
    </header>
    <main>
      <div className="opportunity-details">
        <img src="" alt="Opportunity" />
        <h2>Description</h2>
        <p>
          Join our tutoring program and help underprivileged students succeed academically. We are looking for volunteers who can commit to tutoring sessions on a weekly basis. As a tutor, you will work with students in various subjects, provide guidance, and support their learning journey. Make a positive impact and empower these students to reach their full potential.
        </p>
        <h2>Requirements</h2>
        <ul>
          <li>Passion for education and helping others</li>
          <li>Strong knowledge in at least one subject area</li>
          <li>Ability to commit to weekly tutoring sessions</li>
          <li>Good communication and interpersonal skills</li>
        </ul>
        <h2>Location</h2>
        <p>456 Elm Street, Anytown, USA</p>
        <h2>Contact</h2>
        <p>Email: volunteer@tutoringprogram.org</p>
        <p>Phone: (123) 789-4560</p>
      </div>
    </main>
  </div>
  </div>
  );
}

export default OpportunityPage;
