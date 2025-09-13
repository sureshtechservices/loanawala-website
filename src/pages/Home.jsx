import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section bg-primary text-center section-padding">
        <div className="container">
          <h1>Your Global Education Journey Starts Here</h1>
          <p className="lead">Loanawala Consultancy is your trusted partner for overseas education, providing comprehensive guidance and financial assistance to help you achieve your academic dreams abroad.</p>
          <img src="/images/hero_home.jpg" alt="Students studying abroad" />
          <a href="/contact" className="btn">Book Your Free Counselling</a>
        </div>
      </section>

      <section className="why-us section-padding text-center">
        <div className="container">
          <h2>Why Choose Loanawala Consultancy?</h2>
          <p>Global Navigators has emerged to be the best choice for students wanting to pursue studies abroad at highly reputed Universities in the USA, Australia, UK, Canada, Ireland, New Zealand and more. We represent over 550+ top educational institutions all across the globe, giving candidates a wide range of choices backed by detailed information about each institution.</p>
          <p>As your overseas education partner, we take care of everything right from advising you on course selection and applications, to helping you secure the correct visa. Our experts will help you in taking the most important and critical decision you will ever make in your life.</p>
          <img src="/images/why_us.jpg" alt="Why Choose Us" />
          <a href="/about" className="btn">Learn More About Us</a>
        </div>
      </section>

      <section className="services-overview bg-light section-padding text-center">
        <div className="container">
          <h2>Our Services</h2>
          <p>Nurture your global dreams with our comprehensive range of services tailored to your needs.</p>
          <div className="grid-3-col">
            <div className="service-card">
              <h3>Career Counselling</h3>
              <p>Feeling hard to figure out what to do next in Career / Education? We would be happy to guide and build your future.</p>
              <img src="/images/service_counselling.jpg" alt="Career Counselling" />
            </div>
            <div className="service-card">
              <h3>Admission Support</h3>
              <p>Planning to pursue your higher education abroad, We are here to provide end-to-end services toward your education.</p>
              <img src="/images/service_admission.jpg" alt="Admission Support" />
            </div>
            <div className="service-card">
              <h3>Student Loan Assistance</h3>
              <p>Secure the best financial aid and education loans with our expert guidance and extensive network of lending partners.</p>
              <img src="/images/service_loan.jpg" alt="Student Loan Assistance" />
            </div>
            <div className="service-card">
              <h3>Visa Assistance</h3>
              <p>Setting up VISA Applications and helping you obtain them through training and guidance.</p>
              <img src="/images/service_visa.jpg" alt="Visa Assistance" />
            </div>
            <div className="service-card">
              <h3>Scholarship Information</h3>
              <p>Scholarship information to reduce tuition fees of potential students.</p>
              <img src="/images/service_scholarship.jpg" alt="Scholarship Information" />
            </div>
            <div className="service-card">
              <h3>Test Preparation</h3>
              <p>Coaching on IELTS / TOEFL and other Fundamental tests.</p>
              <img src="/images/service_testprep.jpg" alt="Test Preparation" />
            </div>
          </div>
          <a href="/services" className="btn">View All Services</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
