import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section bg-primary text-center section-padding">
        <div className="container">
          <h1>Welcome to LoanAwala </h1>
          <p className="lead">Your trusted partner in achieving your dreams of higher education abroad with comprehensive financial assistance.</p>
          <img src="/images/hero.jpg" alt="Students studying abroad" />
          <a href="/contact" className="btn">Get Started Today</a>
        </div>
      </section>

      <section className="about-preview section-padding text-center">
        <div className="container">
          <h2>About Us</h2>
          <p>Loanawala is dedicated to empowering students with the resources and guidance needed to pursue their academic aspirations globally. We specialize in education loan assistance and personalized consultancy services.</p>
          <a href="/about" className="btn">Learn More</a>
        </div>
      </section>

      <section className="services-preview bg-light section-padding text-center">
        <div className="container">
          <h2>Our Services</h2>
          <p>From university applications to visa guidance and financial support, we offer a full spectrum of services to make your journey seamless.</p>
          <a href="/services" className="btn">View All Services</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
