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

const VideoServices = () => {
    const sections = [
        {
            title: "Video Production",
            content:
                "Our expert team offers comprehensive video production services to bring your vision to life. From scriptwriting and storyboarding to filming and editing, we handle every aspect of video creation.",
            highlights: [
                "State-of-the-art equipment for high-quality production.",
                "Experienced professionals who bring creativity to the forefront.",
                "Tailored solutions for promotional, corporate, and event videos.",
                "Explainer videos for businesses.",
                "Motion graphics for ads and presentations.",
                "3D modeling and character design.",
                "Content strategy tailored to your niche.",
                "Eye-catching intros and seamless editing.",
                "Optimization for YouTube’s algorithm.",
                "Color correction and visual enhancements.",
                "Custom animations and title sequences.",
                "Sound editing and background music integration.",
            ],
            image: "https://res.cloudinary.com/djidyz2yw/image/upload/v1732358082/v1_pg64bg.png",
            callToAction: "Start Your Video Production Journey",
        },
        // {
        //     title: "Animation Services",
        //     content:
        //         "Engage your audience with stunning animations that bring your ideas to life. We create 2D, 3D, and motion graphics tailored to your needs.",
        //     highlights: [
        //         "Explainer videos for businesses.",
        //         "Motion graphics for ads and presentations.",
        //         "3D modeling and character design.",
        //     ],
        //     image: "https://via.placeholder.com/800x400",
        //     callToAction: "Explore Animation Services",
        // },
        // {
        //     title: "YouTube Video Production",
        //     content:
        //         "Level up your YouTube channel with professionally produced videos. From content planning to post-production, we help you grow your audience.",
        //     highlights: [
        //         "Content strategy tailored to your niche.",
        //         "Eye-catching intros and seamless editing.",
        //         "Optimization for YouTube’s algorithm.",
        //     ],
        //     image: "https://via.placeholder.com/800x400",
        //     callToAction: "Elevate Your YouTube Content",
        // },
        // {
        //     title: "Ad Videos",
        //     content:
        //         "Create captivating ad videos that grab attention and drive results. Our team specializes in crafting short, impactful commercials.",
        //     highlights: [
        //         "Creative storytelling tailored to your brand.",
        //         "High-quality visuals and sound design.",
        //         "Optimized for social media and online platforms.",
        //     ],
        //     image: "https://via.placeholder.com/800x400",
        //     callToAction: "Get Ad Videos That Convert",
        // },
        // {
        //     title: "Video Editing Services",
        //     content:
        //         "Transform your raw footage into a masterpiece with our professional video editing services. We enhance visuals, add effects, and create seamless transitions.",
        //     highlights: [
        //         "Color correction and visual enhancements.",
        //         "Custom animations and title sequences.",
        //         "Sound editing and background music integration.",
        //     ],
        //     image: "https://via.placeholder.com/800x400",
        //     callToAction: "Enhance Your Videos Now",
        // },
    ];

    return (
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Video Production">
            <Pricing price={Price[1]}/>
            {/* <div>
                {sections.map((section, index) => (
                    <div key={index} style={styles.container}>
                        <h1 style={styles.heading}>{section.title}</h1>
                        <p style={styles.paragraph}>{section.content}</p>

                        <div style={styles.section}>
                            <h2 style={styles.subheading}>Highlights</h2>
                            <ul style={styles.list}>
                                {section.highlights.map((highlight, idx) => (
                                    <li key={idx} style={styles.listItem}>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <img
                            src={section.image}
                            alt={section.title}
                            style={styles.image}
                        />

                        <a href="/contact" style={styles.callToAction}>
                            {section.callToAction}
                        </a>
                    </div>
                ))}
            </div> */}
        </Layout>

    );
};

export default VideoServices;
