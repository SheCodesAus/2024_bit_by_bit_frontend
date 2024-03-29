import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="intro-section">
        <h2>Welcome to Our App!</h2>
        <p>At She Codes, our mission is to empower and inspire 100,000 women by the</p>
      </section>
      <section className="features-section">
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          {/* Add more features as needed */}
        </ul>
      </section>
      <section className="team-section">
        <h2>Our Team</h2>
        <p>Introduce the developers or team behind the app.</p>
      </section>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Provide contact information for users who want to get in touch.</p>
      </section>
    </div>
  );
};

export default AboutPage;
