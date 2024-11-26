'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react";

export default function Contact() {
    // Single state to manage the entire form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: '',
    });
    const [errorMessage, setErrorMessage] = useState('');  // To display error messages

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Validate form data
    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.number || !formData.subject || !formData.message) {
            setErrorMessage("All fields are required.");
            return false;
        }
        setErrorMessage('');
        return true;
    };

    // Handle WhatsApp click with form data
    const handleWhatsAppClick = () => {
        // Validate form before sending the message
        if (!validateForm()) return;

        const phoneNumber = "+923296121520"; // Your WhatsApp number in international format (no "+" or leading zeroes)
        const message = `Hello! I would like to inquire about your services.\n\n` +
            `Service Type: ${formData.subject}\n` + 
            `Message: ${formData.message}\n` + // Using `message` for plan type
            `Full Name: ${formData.name}\n` +
            `Phone: ${formData.number}\n` +
            `Email: ${formData.email}\n`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <div>
                    <section className="contact-area pt-80 pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-12">
                                    <div className="tpcontact__right mb-40">
                                        <div className="tpcontact__shop mb-30">
                                            <h4 className="tpshop__title mb-25">Get In Touch</h4>
                                            <div className="tpshop__info">
                                                <ul>
                                                    <li><i className="fal fa-map-marker-alt" /> <Link href="#">Wazirabad, Karmabad, Sailkot Road Near Taj Mahal Marquee</Link></li>
                                                    <li>
                                                        <i className="fal fa-phone" />
                                                        <Link href="#">+923296121520</Link>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-envelope" />
                                                        <Link href="#">contactfulfillneeds@gmail.com</Link>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-clock" />
                                                        <span>Office Time:</span>
                                                        <span>10 am - 8 pm, 7 days a week</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tpcontact__support">
                                            <Link target="_blank" href="https://maps.app.goo.gl/ep4ic361JgFkPnGh8">Get Direction <i className="fal fa-map-marker-alt" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <div className="tpcontact__form">
                                        <div className="tpcontact__info mb-35">
                                            <h4 className="tpcontact__title">Make Custom Request</h4>
                                            <p>Must-have pieces selected every month want style Ideas and Treats?</p>
                                        </div>
                                        <form id="contact-form" method="POST">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="tpcontact__input mb-20">
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            placeholder="Full name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="tpcontact__input mb-20">
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            placeholder="Email address"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="tpcontact__input mb-20">
                                                        <input
                                                            name="number"
                                                            type="text"
                                                            placeholder="Phone number"
                                                            value={formData.number}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="tpcontact__input mb-20">
                                                        <input
                                                            name="service type"
                                                            type="text"
                                                            placeholder="Service Type"
                                                            value={formData.subject}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="tpcontact__input mb-30">
                                                        <textarea
                                                            name="message"
                                                            placeholder="Enter message"
                                                            value={formData.message}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Show error message if validation fails */}
                                            {errorMessage && <div className="error-message" style={{ color: 'red' }}>{errorMessage}</div>}

                                            <div className="tpcontact__submit">
                                                <button
                                                    type="button"
                                                    className="tp-btn tp-color-btn tp-wish-cart"
                                                    onClick={handleWhatsAppClick}
                                                >
                                                    Get A Quote <i className="fal fa-long-arrow-right" />
                                                </button>
                                            </div>
                                        </form>
                                        <p className="ajax-response mt-30" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}
