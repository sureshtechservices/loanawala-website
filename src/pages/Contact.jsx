import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="hero-contact bg-primary text-center section-padding">
        <div className="container">
          <h1>Get in Touch with Us</h1>
          <p className="lead">We're here to help you achieve your global education dreams.</p>
        </div>
      </section>

      <section className="contact-info section-padding">
        <div className="container grid-2-col">
          <div className="contact-details">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> info@loanawalaconsultancy.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Address:</strong> 123 Education Lane, Global City, GC 12345</p>
            <p><strong>Business Hours:</strong> Mon-Fri: 9:00 AM - 5:00 PM</p>
            <img src="/images/contact_info.jpg" alt="Contact Information" />
          </div>
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
            <img src="/images/contact_form.jpg" alt="Send Us a Message" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
