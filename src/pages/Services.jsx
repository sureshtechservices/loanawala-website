import React from 'react';

const Services = () => {
  return (
    <div className="services-page">
      <section className="hero-services bg-primary text-center section-padding">
        <div className="container">
          <h1>Our Comprehensive Services</h1>
          <p className="lead">We provide end-to-end support for your international education journey.</p>
        </div>
      </section>

      <section className="service-categories section-padding">
        <div className="container">
          <h2 className="text-center">How We Can Help You</h2>
          <div className="grid-3-col">
            <div className="service-card">
              <h3>Education Loan Assistance</h3>
              <p>Secure the best financial aid and education loans with our expert guidance and extensive network of lending partners.</p>
              <img src="/images/loan_assistance.jpg" alt="Education Loan Assistance" />
            </div>
            <div className="service-card">
              <h3>University Application Guidance</h3>
              <p>From selecting the right university to crafting compelling applications, we guide you every step of the way.</p>
              <img src="/images/university_guidance.jpg" alt="University Application Guidance" />
            </div>
            <div className="service-card">
              <h3>Visa Interview Preparation</h3>
              <p>Receive personalized coaching and mock interviews to confidently ace your visa application process.</p>
              <img src="/images/visa_preparation.jpg" alt="Visa Interview Preparation" />
            </div>
            <div className="service-card">
              <h3>Pre-departure Orientation</h3>
              <p>Get ready for life abroad with our comprehensive orientation sessions covering everything from travel to cultural adjustments.</p>
              <img src="/images/pre_departure.jpg" alt="Pre-departure Orientation" />
            </div>
            <div className="service-card">
              <h3>Career Counseling</h3>
              <p>Explore career opportunities and align your education choices with your long-term professional goals.</p>
              <img src="/images/career_counseling.jpg" alt="Career Counseling" />
            </div>
            <div className="service-card">
              <h3>Accommodation Support</h3>
              <p>Find suitable and safe accommodation options near your chosen university.</p>
              <img src="/images/accommodation.jpg" alt="Accommodation Support" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
