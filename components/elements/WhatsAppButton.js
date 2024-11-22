'use client'
import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with your number and pre-filled message
    const phoneNumber = "+923410498631"; // Your WhatsApp number in international format (no "+" or leading zeroes)
    const message = "Hello! I would like to inquire about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      style={{
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      <img style={{width:'70px'}} src="/assets/img/icon/wp-btn.png" alt="" />
    </button>
  );
};

export default WhatsAppButton;
