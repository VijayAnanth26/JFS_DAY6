import React from 'react';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import "../Assets/css/About.css";
import "../Assets/css/Footer.css";
const About = () => {
  const handleButtonClick = (event, path) => {
    event.preventDefault();
    window.location.href = path;
  };
  return (
    <div>
      <div>
      <Navbar />
      <div className="about-page">
        <header>
          <h1>About Us</h1>
        </header>
        <main>
          <section>
            <h2>Our Mission</h2>
            <p>
              At our Online Volunteer Platform, our mission is to connect individuals and organizations, enabling them to contribute their time, skills, and resources to make a positive impact on communities worldwide. We strive to create a seamless and accessible platform that empowers people to engage in meaningful volunteer work from anywhere in the world.
            </p>
          </section>
          <section>
            <h2>How It Works</h2>
            <p>
              Our platform provides a user-friendly interface where both volunteers and organizations can register and create profiles. Volunteers can browse through a wide range of volunteer opportunities based on their interests, skills, and location. They can then apply for opportunities, track their volunteer hours, and receive recognition for their contributions.
            </p>
            <p>
              Organizations can create and manage their projects, post volunteer opportunities, and communicate with potential volunteers. Our platform streamlines the volunteer recruitment process, making it easier for organizations to connect with passionate individuals who want to make a difference.
            </p>
          </section>
          <section>
            <h2>Get Involved</h2>
            <p>
              Whether you are an individual looking to volunteer your time or an organization seeking dedicated volunteers, our Online Volunteer Platform is here to support you. Join our community today and start making a positive impact on the causes that matter to you.
            </p>
            <button type='submit' onClick={(e) => handleButtonClick(e, '/Home')}>
    <span class="box">Register
    </span>
</button>
          </section>
        </main>
      </div>
      <footer>
      <Footer />
      </footer>
      
    </div>
    </div>
  );
};

export default About;
