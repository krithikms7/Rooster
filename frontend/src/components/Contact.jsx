import React from 'react';

function Contact() {
  return (
    <div className='cc-bg'>
    <div className='c-bg'>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <h2>Our Address</h2>
        <p></p>
        <p>Food City, FC 45678</p>

        <h2>Phone</h2>
        <p>8838-261-676</p>

        <h2>Email</h2>
        <p><a href="mailto:info@restaurant.com">krithikms7@gmail.com</a></p>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className='buttons'>Send</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Contact;
