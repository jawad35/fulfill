import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>
      <p style={styles.dateText}>Effective Date: November 21, 2024</p>
      <p style={styles.dateText}>Last Updated: November 21, 2024</p>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Welcome to FulfillNeeds!</h2>
        <p style={styles.paragraph}>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you engage with our
          services, including software development, digital product sales,
          video editing, SEO, graphic design, and other related offerings.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>1. Information We Collect</h2>
        <p style={styles.paragraph}>
          <strong>Personal Information:</strong> Name, email address, phone
          number, and payment details when you use our services or purchase
          digital products.
        </p>
        <p style={styles.paragraph}>
          <strong>Non-Personal Information:</strong> Device type, browser type,
          operating system, and general usage data to improve user experience
          and platform performance.
        </p>
        <p style={styles.paragraph}>
          <strong>Cookies and Tracking Technologies:</strong> Cookies, beacons,
          and similar tools to personalize content, analyze usage, and deliver
          relevant ads.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>2. How We Use Your Information</h2>
        <p style={styles.paragraph}>We use the collected data to:</p>
        <ul style={styles.list}>
          <li>Develop and deliver software tailored to your requirements.</li>
          <li>
            Provide seamless access to digital products and services, including
            video editing and SEO solutions.
          </li>
          <li>Improve and personalize user experience on our platforms.</li>
          <li>
            Send service-related updates, promotional offers, and new product
            announcements (with your consent).
          </li>
          <li>Enhance security and detect fraudulent activity.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>3. Sharing Your Information</h2>
        <p style={styles.paragraph}>
          We value your privacy and never sell your information. We may share
          data only under the following circumstances:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>With Trusted Partners:</strong> To deliver services like
            payment processing, order fulfillment, and email communications.
          </li>
          <li>
            <strong>To Improve Services:</strong> With analytics providers to
            understand usage patterns and improve offerings.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>4. Data Security</h2>
        <p style={styles.paragraph}>
          We employ robust measures to protect your personal data, including
          encryption, firewalls, and access controls. However, no online system
          can guarantee complete security. Always use strong passwords and
          safeguard your login credentials.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>5. Your Rights</h2>
        <p style={styles.paragraph}>As a user, you have the following rights:</p>
        <ul style={styles.list}>
          <li>Access and update your personal information.</li>
          <li>
            Request deletion of your data, subject to legal or contractual
            obligations.
          </li>
          <li>Opt-out of receiving promotional emails.</li>
          <li>Contact us with any concerns at **[Insert Email Address]**.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>6. Cookies Policy</h2>
        <p style={styles.paragraph}>
          We use cookies to remember user preferences, deliver personalized
          content, and monitor website traffic. You can manage or disable
          cookies through your browser settings, but this may limit features of
          our services.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>7. Changes to This Privacy Policy</h2>
        <p style={styles.paragraph}>
          This Privacy Policy may be updated periodically to reflect changes in
          our services or legal obligations. We encourage you to review this
          page regularly for updates.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>8. Contact Us</h2>
        <p style={styles.paragraph}>
          For questions, concerns, or further assistance, please reach out to
          us:
        </p>
        <ul style={styles.list}>
          <li>Email: contactfulfillneeds@gmail.com</li>
          <li>Phone: 03296121520</li>
          <li>Address: Wazirabad, Karmabad</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "30px",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  dateText: {
    textAlign: "center",
    fontSize: "1rem",
    color: "#7f8c8d",
    marginBottom: "10px",
  },
  section: {
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
  },
  subheading: {
    fontSize: "1.8rem",
    color: "#34495e",
    borderBottom: "2px solid #ecf0f1",
    paddingBottom: "10px",
    marginBottom: "15px",
  },
  paragraph: {
    fontSize: "1.1rem",
    color: "#2c3e50",
    marginBottom: "15px",
    lineHeight: "1.8",
  },
  list: {
    paddingLeft: "20px",
    listStyleType: "disc",
  },
};

export default PrivacyPolicy;
