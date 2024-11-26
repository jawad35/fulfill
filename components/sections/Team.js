'use client'
import React from 'react'
import team from '../../data/team.json'

const Team = () => {
    const handleWhatsAppClick = () => {
        // WhatsApp Number and Pre-filled Message
        const phoneNumber = "+923296121520"; // Your WhatsApp number in international format
        const message = "Hello! I would like to inquire about your services.\n\n";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");
    };

    const handleEmailClick = () => {
        // Email setup (replace with your email)
        const email = "contactfulfillneeds@gmail.com";
        const subject = "Inquiry about services";
        const body = "Hello! I would like to inquire about your services.\n\n";
        const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open email client
        window.open(emailUrl, "_blank");
    };

    return (
        <div>
            <section>
                <h1 className="title">Our Team</h1>
                <div className="team-row">
                    {
                        team?.map((member, index) => (
                            <div key={index} className="member">
                                <img src={member?.avatar} alt={member?.name} />
                                <h2>{member?.name}</h2>
                                <p style={{ fontSize: '17px', color: '#d51243' }}>{member.position}</p>
                                <p>{member?.about}</p>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button onClick={handleWhatsAppClick}>
                                        <img style={{ width: '70px', height: '50px' }} src="/assets/img/icon/wp-btn.png" alt="WhatsApp" />
                                    </button>
                                    <button onClick={handleEmailClick}>
                                        <img style={{ width: '50px', height: '50px' }} src="/assets/img/icon/email.png" alt="Email" />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
}

export default Team;
