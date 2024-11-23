import React from 'react';

const Terms = () => {
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

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms and Conditions</h1>

      <div style={styles.dateText}>Updated on: {new Date().toLocaleDateString()}</div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>1. Introduction</h2>
        <p style={styles.paragraph}>
          Welcome to [Your Company Name]. By using our services, including software development, digital product purchases, SEO, graphic design, video editing, and other offerings, you agree to be bound by these terms and conditions. Please read them carefully before using our services.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>2. Scope of Services</h2>
        <p style={styles.paragraph}>
          We provide a variety of services, including but not limited to:
        </p>
        <ul style={styles.list}>
          <li>Software development and customization</li>
          <li>Selling digital products</li>
          <li>SEO and digital marketing solutions</li>
          <li>Copywriting, content creation, and blog management</li>
          <li>Graphic design and video editing services</li>
        </ul>
        <p style={styles.paragraph}>
          Additional terms may apply to specific services, which will be communicated separately.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>3. User Responsibilities</h2>
        <p style={styles.paragraph}>
          By using our services, you agree:
        </p>
        <ul style={styles.list}>
          <li>To provide accurate and complete information.</li>
          <li>To use our services only for lawful purposes.</li>
          <li>Not to engage in unauthorized distribution or modification of our digital products or intellectual property.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>4. Payment Terms</h2>
        <p style={styles.paragraph}>
          - All payments must be made in full before project delivery unless otherwise agreed upon in writing.
          <br />
          - Subscription or recurring fees (if applicable) will be billed as per the agreed schedule.
          <br />
          - Refunds for digital products or services are provided only in accordance with our refund policy.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>5. Intellectual Property</h2>
        <p style={styles.paragraph}>
          - All content, code, designs, and deliverables created by us remain our intellectual property until full payment is received.
          <br />
          - Unauthorized use, copying, or distribution of our work is strictly prohibited.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>6. Limitation of Liability</h2>
        <p style={styles.paragraph}>
          We strive to deliver high-quality services but cannot guarantee uninterrupted access or error-free outcomes. We are not liable for:
        </p>
        <ul style={styles.list}>
          <li>Any losses due to misuse of our services.</li>
          <li>Third-party issues, including hosting providers, payment processors, or software integrations.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>7. Confidentiality</h2>
        <p style={styles.paragraph}>
          We respect your privacy and confidentiality. Any data or information shared with us will be handled securely and will not be disclosed to third parties without your consent.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>8. Termination</h2>
        <p style={styles.paragraph}>
          We reserve the right to terminate or suspend services if:
        </p>
        <ul style={styles.list}>
          <li>You violate these terms.</li>
          <li>Payments are not made on time.</li>
        </ul>
        <p style={styles.paragraph}>
          Upon termination, all access to purchased services or products may be revoked.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>9. Refund Policy</h2>
        <p style={styles.paragraph}>
          Refunds for services or products are subject to review and will only be granted under the following conditions:
        </p>
        <ul style={styles.list}>
          <li>Digital products are proven to be defective or corrupted upon receipt.</li>
          <li>Services are not delivered as per the agreed scope.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>10. Amendments</h2>
        <p style={styles.paragraph}>
          We may update these terms from time to time. Changes will be communicated via email or our website. Continued use of our services after changes indicates acceptance of the updated terms.
        </p>
      </div>

      {/* <div style={styles.section}>
        <h2 style={styles.subheading}>11. Governing Law</h2>
        <p style={styles.paragraph}>
          These terms are governed by the laws of [Your Jurisdiction]. Any disputes arising from these terms will be resolved in [Your Jurisdiction’s Courts].
        </p>
      </div> */}

      <div style={styles.section}>
        <h2 style={styles.subheading}>11. Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions about these terms, please contact us at:
          <br />
          Email: contactfulfillneeds@gmail.com
          <br />
          Phone: 03296121520
        </p>
      </div>
    </div>
  );
};

export default Terms;
