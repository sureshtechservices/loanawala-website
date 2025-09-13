import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero-about bg-primary text-center section-padding">
        <div className="container">
          <h1>About Loanawala </h1>
          <p className="lead">Your trusted partner in making global education accessible.</p>
        </div>
      </section>

      <section className="our-mission section-padding">
        <div className="container text-center">
          <h2>Our Mission</h2>
          <p>At Loanawala, our mission is to empower aspiring students by providing unparalleled guidance and financial solutions for their overseas education. We believe that financial constraints should never hinder a student's potential.</p>
          <img src="/images/about_mission.jpg" alt="Our Mission" />
        </div>
      </section>

      <section className="our-values bg-light section-padding">
        <div className="container">
          <h2 className="text-center">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Integrity</h3>
              <p>We operate with the highest level of honesty and transparency in all our dealings.</p>
            </div>
            <div className="value-item">
              <h3>Excellence</h3>
              <p>We strive for exceptional service quality and results for every student.</p>
            </div>
            <div className="value-item">
              <h3>Empowerment</h3>
              <p>We empower students with knowledge and resources to make informed decisions.</p>
            </div>
          </div>
          <img src="/images/about_values.jpg" alt="Our Values" />
        </div>
      </section>

      <section className="our-team section-padding text-center">
        <div className="container">
          <h2>Our Team</h2>
          <p>Our team of experienced consultants and financial advisors is dedicated to providing personalized support and expert advice.</p>
          <img src="/images/about_team.jpg" alt="Our Team" />
        </div>
      </section>
    </div>
  );
};

export default About;
