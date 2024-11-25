import React from "react";
import Layout from "@/components/layout/Layout"
import Price from "../../data/pricings.json"
import Pricing from "@/components/sections/Pricing"

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

const Copywriting = () => {
    return (
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Copywriting">
            <Pricing price={Price[9]}/>
            {/* <div style={styles.container}>
                <h1 style={styles.heading}>Copywriting Services</h1>
                <p style={styles.paragraph}>
                    At <strong>FulfillNeeds</strong>, our expert copywriters craft
                    compelling content designed to captivate and convert your target
                    audience. Whether it's web content, blog posts, product descriptions, or
                    social media copy, we deliver persuasive messaging that drives results.
                </p>

                <div style={styles.section}>
                    <h2 style={styles.subheading}>Why Choose Our Copywriting Services?</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <strong>Brand Voice Consistency:</strong> We ensure your brand voice
                            is reflected in every piece of content.
                        </li>
                        <li style={styles.listItem}>
                            <strong>SEO-Optimized Copy:</strong> High-quality, keyword-rich copy
                            that boosts your online visibility.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Engaging and Persuasive:</strong> Content that not only
                            informs but also encourages action.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Fast Turnaround:</strong> Timely delivery without compromising
                            on quality.
                        </li>
                    </ul>
                </div>

                <img
                    src="https://res.cloudinary.com/djidyz2yw/image/upload/v1732356433/cw-2_tv6g37.png"
                    alt="Copywriting Services"
                    style={styles.image}
                />

                <div style={styles.section}>
                    <h2 style={styles.subheading}>Our Copywriting Process</h2>
                    <p style={styles.paragraph}>
                        We follow a structured approach to ensure your copy is tailored to
                        meet your business goals:
                    </p>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <strong>Consultation:</strong> We start by understanding your brand
                            and objectives.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Research & Strategy:</strong> In-depth research to create
                            content that resonates with your target audience.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Content Creation:</strong> Our skilled copywriters create
                            compelling content that aligns with your brand's message.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Review & Edit:</strong> Rigorous review and editing to
                            ensure top-notch quality.
                        </li>
                    </ul>
                </div>

                <img
                    src="https://res.cloudinary.com/djidyz2yw/image/upload/v1732356395/cw-2_wnnlkc.png"
                    alt="Content Creation"
                    style={styles.image}
                />

                <div style={styles.section}>
                    <h2 style={styles.subheading}>Drive Results with Quality Copy</h2>
                    <p style={styles.paragraph}>
                        Your business deserves content that stands out. Partner with us for
                        high-quality copy that not only engages but also converts. We deliver
                        results, one word at a time.
                    </p>
                    <a href="/contact" style={styles.callToAction}>
                        Get Started with Our Copywriting Services
                    </a>
                </div>
            </div> */}
        </Layout>
    );
};

export default Copywriting;
