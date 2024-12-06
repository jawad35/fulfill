'use client'
import React, { useState } from "react";

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
  faqItem: {
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
  },
  question: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#34495e",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  answer: {
    fontSize: "1.1rem",
    color: "#2c3e50",
    marginTop: "10px",
    lineHeight: "1.8",
    display: "none", // hidden by default
  },
  visible: {
    display: "block", // show when toggled
  },
  toggleIcon: {
    fontSize: "1.5rem",
    color: "#7f8c8d",
  },
};

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What services do you offer?", answer: "We provide software development, digital marketing, SEO, content creation, graphics, video editing, and a platform for digital products." },
    { question: "Can you help improve my website's SEO?", answer: "Yes, we offer tailored SEO services to improve your website's visibility and ranking." },
    { question: "Do you offer custom software solutions?", answer: "Absolutely! We specialize in developing custom software to meet your business needs." },
    { question: "What is included in your digital marketing services?", answer: "Our digital marketing services include social media management, PPC campaigns, email marketing, and more." },
    { question: "Can I hire you for video editing projects?", answer: "Yes, we provide professional video editing services for promotional, educational, or personal needs." },
    { question: "Do you sell digital products?", answer: "Yes, we have a platform for selling a variety of digital products tailored to your needs." },
    { question: "How do I get started with your services?", answer: "Simply contact us through our website or email, and we'll guide you through the process." },
    { question: "Do you provide graphic design services?", answer: "Yes, we create eye-catching designs for logos, brochures, social media, and more." },
    { question: "Is there a support system for your software?", answer: "We provide ongoing support and maintenance for all the software solutions we deliver." },
    { question: "What industries do you cater to?", answer: "We cater to a wide range of industries including e-commerce, education, healthcare, and more." },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          style={styles.faqItem}
          onClick={() => toggleFAQ(index)}
        >
          <div style={styles.question}>
            {faq.question}
            <span style={styles.toggleIcon}>
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          <div
            style={{
              ...styles.answer,
              ...(activeIndex === index ? styles.visible : {}),
            }}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
