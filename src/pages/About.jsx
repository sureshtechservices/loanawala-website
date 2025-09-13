import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero-about bg-primary text-center section-padding">
        <div className="container">
          <h1>About Loanawala Consultancy</h1>
          <p className="lead">Your trusted partner in making global education accessible and achieving your international career aspirations.</p>
        </div>
      </section>

      <section className="our-story section-padding">
        <div className="container text-center">
          <h2>Our Story & Vision</h2>
          <p>Loanawala Consultancy has emerged as a leading overseas education consultant, dedicated to guiding students toward their academic and career goals worldwide. We envision a future where every aspiring student has the opportunity to pursue quality education abroad, irrespective of financial barriers.</p>
          <p>With years of experience in the overseas education industry, we have built a reputation for providing honest, comprehensive, and personalized guidance. Our success is measured by the success of our students.</p>
          <img src="/images/about_story.jpg" alt="Our Story" />
        </div>
      </section>

      <section className="our-expertise bg-light section-padding">
        <div className="container">
          <h2 className="text-center">Our Expertise</h2>
          <div className="grid-2-col">
            <div>
              <h3>Comprehensive University Network</h3>
              <p>We represent over 550+ top educational institutions across the globe, offering you a wide range of choices backed by detailed information about each institution.</p>
              <h3>End-to-End Support</h3>
              <p>From advising on course selection and applications to helping you secure the correct visa and pre-departure arrangements, we take care of everything.</p>
              <h3>Dedicated Counselors</h3>
              <p>Our highly dedicated and experienced counselors provide proper onboarding and assistance throughout the admission process.</p>
            </div>
            <div>
              <h3>Financial Guidance</h3>
              <p>We provide valuable information on scholarships and have tie-ups with multiple banks that offer education loans, helping to reduce tuition fees and ease financial burdens.</p>
              <h3>High Success Rate</h3>
              <p>We boast high levels of VISA success rates through meticulous application procedures, training, and guidance for interviews.</p>
              <h3>Career & Test Prep</h3>
              <p>Credible advisory on selecting the best course, country, and career path, alongside coaching for IELTS/TOEFL and other fundamental tests.</p>
            </div>
          </div>
          <img src="/images/about_expertise.jpg" alt="Our Expertise" />
        </div>
      </section>

      <section className="our-values section-padding text-center">
        <div className="container">
          <h2>Our Core Values</h2>
          <p>Integrity, excellence, and empowerment form the foundation of our services, ensuring a transparent and supportive journey for every student.</p>
          <img src="/images/about_values_new.jpg" alt="Our Values" />
        </div>
      </section>
    </div>
  );
};

export default About;
