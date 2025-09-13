import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91', // Default to India
    contactNumber: '',
    query: '',
  });

  const countryCodes = [
    { name: 'India', code: '+91' },
    { name: 'United States', code: '+1' },
    { name: 'Canada', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    // Add more countries and codes as needed
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullContactNumber = formData.countryCode + formData.contactNumber;
    console.log('Form Data Submitted:', { ...formData, contactNumber: fullContactNumber });

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
        body: JSON.stringify({ ...formData, contactNumber: fullContactNumber }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', countryCode: '+91', contactNumber: '', query: '' }); // Clear form and reset country code
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
          <h1>Get in Touch with Loanawala Consultancy</h1>
          <p className="lead">We're here to help you achieve your global education dreams. Reach out to us for expert guidance and support.</p>
        </div>
      </section>

      <section className="contact-info section-padding">
        <div className="container grid-2-col">
          <div className="contact-details">
            <h2>Our Contact Information</h2>
            <p><strong>Email:</strong> info@loanawala.com</p>
            <p><strong>Phone:</strong> +91 9999999999 / +91 8888888888</p>
            <p><strong>Corporate Office:</strong> # 309, Everest Block, Ameerpet, Hyderabad, Telangana, India</p>
            <p><strong>Business Hours:</strong> Mon-Fri: 10:00 AM - 8:00 PM (IST)</p>
            <img src="/images/contact_office.jpg" alt="Contact Information" />
          </div>
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="contactNumber">Your Contact Number</label>
                <div className="country-code-input">
                  <select name="countryCode" id="countryCode" value={formData.countryCode} onChange={handleChange} className="country-code-select">
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name} ({country.code})
                      </option>
                    ))}
                  </select>
                  <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required className="tel-input" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="query">Your Query / Message</label>
                <textarea id="query" name="query" rows="5" value={formData.query} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn">Submit Your Query</button>
            </form>
            <img src="/images/contact_form.jpg" alt="Send Us a Message" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
