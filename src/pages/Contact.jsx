import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    query: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    // IMPORTANT: Client-side JavaScript cannot directly send emails.
    // You will need a backend service or a third-party email service to send this data.
    // Examples of services: EmailJS, Formspree, Netlify Forms, or a custom Node.js/Python backend.
    alert('Thank you for your message! We will get back to you soon. (Email sending functionality needs to be integrated on the server-side.)');

    // Placeholder for actual email sending logic:
    /*
    try {
      const response = await fetch('YOUR_BACKEND_EMAIL_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', contactNumber: '', query: '' }); // Clear form
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again later.');
    }
    */
  };

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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="query">Your Query</label>
                <textarea id="query" name="query" rows="5" value={formData.query} onChange={handleChange} required></textarea>
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
