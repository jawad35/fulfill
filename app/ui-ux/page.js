import React from "react";
import Layout from "@/components/layout/Layout"
import Price from "../../data/pricings.json"
import Pricing from "@/components/sections/Pricing"
const styles = {
    container: {
        maxWidth: "1200px",
        margin: "20px auto",
        padding: "30px",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
    },
    heading: {
        textAlign: "center",
        fontSize: "3rem",
        color: "#2d3436",
        marginBottom: "30px",
        fontWeight: "700",
    },
    subheading: {
        fontSize: "2rem",
        color: "#6c5ce7",
        marginBottom: "20px",
        fontWeight: "600",
        textAlign: "center",
    },
    paragraph: {
        fontSize: "1.2rem",
        color: "#2d3436",
        marginBottom: "20px",
        lineHeight: "1.8",
        textAlign: "justify",
    },
    section: {
        marginBottom: "40px",
        padding: "20px",
        backgroundColor: "#f7f7f7",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
    },
    image: {
        width: "100%",
        maxWidth: "300px",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
    content: {
        flex: 1,
    },
    list: {
        paddingLeft: "20px",
        listStyleType: "disc",
        marginBottom: "20px",
    },
    listItem: {
        marginBottom: "10px",
        fontSize: "1.1rem",
        color: "#2d3436",
    },
    callToAction: {
        display: "inline-block",
        textAlign: "center",
        margin: "30px auto 0",
        backgroundColor: "#6c5ce7",
        color: "#ffffff",
        padding: "15px 30px",
        borderRadius: "8px",
        fontSize: "1.2rem",
        fontWeight: "600",
        textDecoration: "none",
        transition: "background-color 0.3s ease",
    },
    callToActionHover: {
        backgroundColor: "#5a51c7",
    },
};

const UIUXDesign = () => {
    const services = [
        {
            title: "User Experience Design (UX)",
            content:
                "We create intuitive, user-friendly designs that focus on enhancing user satisfaction. Our UX experts ensure seamless navigation and functionality for your users.",
            highlights: [
                "User research and persona development.",
                "Wireframes and prototyping.",
                "Usability testing and analysis.",
            ],
            image: "https://via.placeholder.com/300x300",
        },
        {
            title: "User Interface Design (UI)",
            content:
                "Our visually appealing interfaces are designed to captivate your audience and reflect your brand identity. We ensure a consistent and modern aesthetic for all platforms.",
            highlights: [
                "Interactive and responsive design.",
                "Custom graphics and iconography.",
                "Brand-aligned visual identity.",
            ],
            image: "https://via.placeholder.com/300x300",
        },
        {
            title: "Mobile App Design",
            content:
                "We specialize in designing mobile applications that provide smooth and enjoyable user experiences. Our designs cater to both iOS and Android platforms.",
            highlights: [
                "Cross-platform compatibility.",
                "Optimized touch interactions.",
                "Elegant and functional design.",
            ],
            image: "https://via.placeholder.com/300x300",
        },
        {
            title: "Web App Design",
            content:
                "Elevate your web applications with stunning designs that combine functionality and beauty. Our web app designs are fully responsive and user-centered.",
            highlights: [
                "Responsive and adaptive design.",
                "Custom dashboards and interfaces.",
                "Focus on speed and user engagement.",
            ],
            image: "https://via.placeholder.com/300x300",
        },
    ];

    return (
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Copywriting">
            <Pricing price={Price[10]} />
            {/* <div style={styles.container}>
                <h1 style={styles.heading}>UI/UX Design Services</h1>
                {services.map((service, index) => (
                    <div key={index} style={styles.section}>
                        <img
                            src={service.image}
                            alt={service.title}
                            style={styles.image}
                        />
                        <div style={styles.content}>
                            <h2 style={styles.subheading}>{service.title}</h2>
                            <p style={styles.paragraph}>{service.content}</p>
                            <ul style={styles.list}>
                                {service.highlights.map((highlight, idx) => (
                                    <li key={idx} style={styles.listItem}>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                <a href="/contact" style={styles.callToAction}>
                    Contact Us for Design Solutions
                </a>
            </div> */}
        </Layout>
    );
};

export default UIUXDesign;
