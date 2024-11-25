'use client'
import React from "react";
import Layout from "@/components/layout/Layout"
import Price from "../../data/pricings.json"
import Pricing from "@/components/sections/Pricing"
const styles = {
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px",
        // fontFamily: "'Poppins', sans-serif",
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
    sectionHover: {
        transform: "scale(1.02)",
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
    callToActionHover: {
        backgroundColor: "#457b9d",
    },
};

const SEOPage = () => {
    return (
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="SEO">
            <Pricing price={Price[6]} />
            {/* <div style={styles.container}>
                <h1 style={styles.heading}>SEO Services - Elevate Your Online Presence</h1>
                <p style={styles.paragraph}>
                    At <strong>FulfillNeeds</strong>, we deliver innovative and
                    results-driven SEO solutions designed to boost your visibility and help
                    you stand out in the competitive digital landscape. Let’s work together
                    to connect with your audience and achieve your goals.
                </p>

                <div style={styles.section}>
                    <h2 style={styles.subheading}>Why Choose Our SEO Services?</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <strong>Expert Guidance:</strong> Years of experience and a proven
                            track record.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Tailored Solutions:</strong> Custom strategies that align
                            with your business needs.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Transparent Communication:</strong> Regular updates and
                            detailed reporting.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Long-Term Success:</strong> Building a sustainable
                            foundation for growth.
                        </li>
                    </ul>
                </div>

                <img
                    src="https://res.cloudinary.com/djidyz2yw/image/upload/v1732349966/SEO_ngdygh.png"
                    alt="SEO strategies"
                    style={styles.image}
                />

                <div style={styles.section}>
                    <h2 style={styles.subheading}>Our SEO Workflow</h2>
                    <p style={styles.paragraph}>
                        Our comprehensive approach ensures success at every step:
                    </p>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <strong>Audit and Analysis:</strong> Evaluating your website’s
                            current performance.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Keyword Research:</strong> Identifying high-performing
                            keywords for your niche.
                        </li>
                        <li style={styles.listItem}>
                            <strong>On-Page SEO:</strong> Optimizing content, headers, and meta
                            tags.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Off-Page SEO:</strong> Building quality backlinks and
                            improving domain authority.
                        </li>
                    </ul>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.subheading}>The Impact of SEO</h2>
                    <p style={styles.paragraph}>
                        With effective SEO, you can:
                    </p>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <strong>Increase Organic Traffic:</strong> Attract the right
                            audience to your site.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Enhance Credibility:</strong> Build trust and authority in
                            your industry.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Boost Conversions:</strong> Turn visitors into loyal
                            customers.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Achieve Longevity:</strong> Stay relevant and competitive
                            for years to come.
                        </li>
                    </ul>
                </div>

                <img
                    src="https://res.cloudinary.com/djidyz2yw/image/upload/v1732350363/SEO-2_obvpmw.png"
                    alt="SEO"
                    style={styles.image}
                />

                <div style={styles.section}>
                    <h2 style={styles.subheading}>Let’s Get Started!</h2>
                    <p style={styles.paragraph}>
                        Partner with us for an SEO strategy that delivers real results. Contact
                        us today to unlock your full potential!
                    </p>
                    <a href="/contact" style={styles.callToAction}>
                        Contact Us Now
                    </a>
                </div>
            </div> */}
        </Layout>

    );
};

export default SEOPage;
