import React from "react";
import Layout from "@/components/layout/Layout"

const styles = {
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "'Poppins', sans-serif",
        // backgroundColor: "#ffffff",
        borderRadius: "10px",
        // boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        lineHeight: "1.8",
    },
    heading: {
        // textAlign: "center",
        fontSize: "3rem",
        color: "#1d3557",
        marginBottom: "25px",
        fontWeight: "600",
    },
    subheading: {
        fontSize: "1.8rem",
        color: "#d51243",
        borderBottom: "3px solid #a8dadc",
        paddingBottom: "10px",
        marginBottom: "20px",
        fontWeight: "500",
    },
    paragraph: {
        fontSize: "1.2rem",
        color: "#343a40",
        marginBottom: "20px",
        lineHeight: "1.8",
    },
    section: {
        marginBottom: "40px",
        padding: "25px",
        // backgroundColor: "#f1faee",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
    },
    list: {
        paddingLeft: "25px",
        listStyleType: "circle",
        marginBottom: "20px",
    },
    listItem: {
        marginBottom: "15px",
        fontSize: "1.1rem",
        color: "#1d3557",
    },
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "10px",
        marginBottom: "25px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
    },
    callToAction: {
        textAlign: "center",
        marginTop: "30px",
        backgroundColor: "#d51243",
        color: "#ffffff",
        padding: "15px 25px",
        borderRadius: "8px",
        fontSize: "1.2rem",
        fontWeight: "500",
        textDecoration: "none",
        display: "inline-block",
        transition: "background-color 0.3s ease",
    },
};

const AdsManagement = () => {
    return (
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="SEO">
            <div style={styles.container}>
                <h1 style={styles.heading}>Ads Management Services</h1>
                <p style={styles.paragraph}>
                    At <strong>Your Company Name</strong>, we specialize in crafting and
                    managing high-performing ad campaigns across various platforms. From
                    strategy to execution, we ensure your advertising investments deliver
                    measurable results and exponential growth.
                </p>

                <div style={styles.section}>
                    <h2 style={styles.subheading}>Why Choose Our Ads Management?</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <strong>Platform Expertise:</strong> Certified professionals in
                            Google Ads, Facebook, Instagram, LinkedIn, and more.
                        </li>
                        <li style={styles.listItem}>
                            <strong>ROI-Focused Strategies:</strong> Data-driven campaigns that
                            maximize returns.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Custom Targeting:</strong> Reach the right audience with
                            tailored targeting solutions.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Transparent Reporting:</strong> Real-time insights to track
                            performance.
                        </li>
                    </ul>
                </div>

                <img
                    src="https://res.cloudinary.com/djidyz2yw/image/upload/v1732352683/ads-2_w9aesw.png"
                    alt="Ads Management Strategy"
                    style={styles.image}
                />

                <div style={styles.section}>
                    <h2 style={styles.subheading}>Our Ads Management Workflow</h2>
                    <p style={styles.paragraph}>
                        Here’s how we help you achieve success with ads management:
                    </p>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <strong>Understanding Your Goals:</strong> A deep dive into your
                            objectives to align ad strategies.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Ad Creation:</strong> Eye-catching, high-converting ad
                            designs tailored for your brand.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Campaign Setup:</strong> Comprehensive setup with optimized
                            targeting and bidding.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Continuous Optimization:</strong> Regular monitoring and
                            improvement for peak performance.
                        </li>
                    </ul>
                </div>

                <img
                    src="https://res.cloudinary.com/djidyz2yw/image/upload/v1732352011/ads_ipn0ih.png"
                    alt="Ad Campaign Workflow"
                    style={styles.image}
                />

                <div style={styles.section}>
                    <h2 style={styles.subheading}>Unlock Your Advertising Potential</h2>
                    <p style={styles.paragraph}>
                        Advertising can be the game-changer for your business. Partner with
                        us to build campaigns that resonate with your audience and achieve
                        unparalleled growth.
                    </p>
                    <a href="/contact" style={styles.callToAction}>
                        Start Your Campaign Today
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default AdsManagement;
