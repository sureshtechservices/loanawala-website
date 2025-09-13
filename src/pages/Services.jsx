import React from 'react';

const Services = () => {
  return (
    <div className="services-page">
      <section className="hero-services bg-primary text-center section-padding">
        <div className="container">
          <h1>Our Comprehensive Services</h1>
          <p className="lead">We provide end-to-end support for your international education journey, ensuring a seamless experience from application to arrival.</p>
        </div>
      </section>

      <section className="service-categories section-padding">
        <div className="container">
          <h2 className="text-center">How We Can Help You Achieve Your Dreams</h2>
          <div className="grid-3-col">
            <div className="service-card">
              <h3>Career Counselling</h3>
              <p>Confused about your career path or which program to choose? Our expert counselors provide personalized guidance to help you select the best course and country for your aspirations.</p>
              <img src="/images/service_career_counselling.jpg" alt="Career Counselling" />
            </div>
            <div className="service-card">
              <h3>Admission Support</h3>
              <p>From university selection to crafting winning applications, we offer end-to-end support to ensure you get admitted to your dream university abroad.</p>
              <img src="/images/service_admission_support.jpg" alt="Admission Support" />
            </div>
            <div className="service-card">
              <h3>Application Process</h3>
              <p>We meticulously handle your entire application procedure, ensuring all documents are perfectly prepared and submitted on time to increase your chances of success.</p>
              <img src="/images/service_application_process.jpg" alt="Application Process" />
            </div>
            <div className="service-card">
              <h3>Test Preparation</h3>
              <p>Ace your IELTS, TOEFL, GRE, GMAT, and other fundamental tests with our specialized coaching and comprehensive study materials, tailored to your needs.</p>
              <img src="/images/service_test_preparation.jpg" alt="Test Preparation" />
            </div>
            <div className="service-card">
              <h3>SOP / Resume Building</h3>
              <p>Craft compelling Statements of Purpose and professional Resumes that highlight your strengths and secure your spot in top institutions worldwide.</p>
              <img src="/images/service_sop_resume.jpg" alt="SOP / Resume Building" />
            </div>
            <div className="service-card">
              <h3>Scholarship Assistance</h3>
              <p>Discover and apply for various scholarships to significantly reduce your tuition fees and manage your educational expenses abroad with ease.</p>
              <img src="/images/service_scholarships.jpg" alt="Scholarship Assistance" />
            </div>
            <div className="service-card">
              <h3>Student Loan Support</h3>
              <p>Navigate the complexities of education loans. We have valued tie-ups with multiple banks to help you secure the best financial assistance.</p>
              <img src="/images/service_student_loan.jpg" alt="Student Loan Support" />
            </div>
            <div className="service-card">
              <h3>Travel and Stay Guidance</h3>
              <p>Receive comprehensive pre-departure orientation, travel arrangements, and assistance in finding suitable accommodation abroad for a smooth transition.</p>
              <img src="/images/service_travel_stay.jpg" alt="Travel and Stay Guidance" />
            </div>
            <div className="service-card">
              <h3>Visa Support</h3>
              <p>Benefit from our high VISA success rates. We provide expert training and guidance for visa applications and interviews, ensuring you're fully prepared.</p>
              <img src="/images/service_visa_support.jpg" alt="Visa Support" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
