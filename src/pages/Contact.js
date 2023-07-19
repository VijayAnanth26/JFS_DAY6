import React, { useState } from 'react';
import Navbar from '../Components/NavBar';
import '../Assets/css/Contact.css';
import '../Assets/css/Footer.css';
import Footer from '../Components/Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <div >
      <div>
        <Navbar />
      </div>
      <div className="contact-container">
        <h1>Contact Us</h1>

        {submitted ? (
          <p className="confirmation-message">
            Thank you for your message. We'll get back to you shortly!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
              />
            </div>

            <button type='submit'>
      <span class="box">
          Submit
      </span>
  </button>
          </form>
        )}
      </div>
      <footer>
      <Footer/>
      </footer>
     
    </div>
  );
};

export default Contact;
