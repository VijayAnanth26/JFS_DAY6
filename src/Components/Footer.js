import React from 'react';
import "../Assets/css/Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="about">
      <h2>About Us</h2>
          <p>Find volunteer opportunities near you and make a difference in your community!</p>
      </div>

      <div className="contact">
        <h3>Contact Information</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +1234567890</p>
      </div>

      <div className="legal">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-use">Terms of Use</a>
      </div>
    </footer>
  );
};

export default Footer;
