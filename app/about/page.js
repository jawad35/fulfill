'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Team from '../../data/team.json'
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 25,
    autoplay: {
        delay: 3500,
    },
    breakpoints: {
        1400: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function About() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="About Us">
                <div>
                    <section className="about-area pt-80  pb-40">
                        <div className="container">
                            <div className="tpabout__inner-logo p-relative">
                                <div className="row">
                                    <div>
                                        <div className="tpabout__inner-thumb">
                                            <img src="https://res.cloudinary.com/djidyz2yw/image/upload/v1732630873/about1_einqjo.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tpabout__inner-thumb mb-40">
                                            <img src="/assets/img/banner/about-img-2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tpabout__logo">
                                    <Link href="/"><img src="/assets/img/banner/about-img-3.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="tpabout__inner-title-area mt-25 mb-45">
                                        <h4 className="tpabout__inner-sub-title">About Us</h4>
                                        <h4 className="tpabout__inner-title">About Our Story</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                    <div className="tpabout__inner-story mb-40">
                                        <p>
                                            At FulfillNeeds, we specialize in delivering top-quality web and mobile development, digital marketing, graphic design, and video editing services. Our goal is to empower businesses with innovative, customized solutions that drive growth and create impactful digital experiences. Let us bring your ideas to life and help your brand stand out.</p>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                                    <div className="tpabout__inner-story-2 mb-40">
                                        <p>
                                        Our company follows a clear and structured process: We begin by discussing project details with the client to ensure full understanding, provide a transparent pricing structure, and offer a demo. We then proceed with the work, offering up to 100 revisions as needed, to deliver the final product on time and to the client's expectations.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
                                    <div className="tpabout__inner-list mb-40">
                                        <ul>
                                            <li> <Link href="#"><i className="fal fa-check" /> Handling Deadlines and Managing Time</Link>
                                            </li>
                                            <li> <Link href="#"><i className="fal fa-check" /> Effective Communication</Link>
                                            </li>
                                            <li><Link href="#"><i className="fal fa-check" /> 3 Months Free Support</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* about-area-end */}
                    {/* team-area-start */}
                    <section className="team-area grey-bg-3 pb-30">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="tpabout__inner-title-area mt-65 mb-45 text-center">
                                        <h4 className="tpabout__inner-sub-title">Team</h4>
                                        <h4 className="tpabout__inner-title">Meet With Team</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-container tp-team-active">
                                <Swiper {...swiperOptions}>
                                    {
                                        Team?.map(item => (
                                            <SwiperSlide>
                                                <div className="tpteam__item p-relative mb-40">
                                                    <div className="tpteam__thumb">
                                                        <img src={item?.avatar} alt="" />
                                                    </div>
                                                    <div className="tpteam__content">
                                                        <h4 className="tpteam__position">{item?.position}</h4>
                                                        <h5 className="tpteam__title">{item.name}</h5>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </section>
                    {/* team-area-end */}
                    {/* feature-area-start */}
                    {/* <section className="feature-area pt-70 pb-10">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="tpfeature__inner-thumb mb-70">
                                        <img src="/assets/img/banner/about-banner-1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="tpabout__inner-title-area about-inner-content ml-50 mr-50 mb-70">
                                        <h4 className="tpabout__inner-sub-title mb-5">Features #01</h4>
                                        <h4 className="tpabout__inner-title mb-25">Solutions that work together</h4>
                                        <p>Publish your eCommerce site quickly with our easy-to-use store builder— no
                                            coding required. Migrate your items from your point of sale system or turn your
                                            Instagram feed into a shopping site and start selling fast. Square Online works
                                            for all kinds of businesses—retail, restaurants, services.
                                        </p>
                                        <Link className="tpteam__btn" href="/contact">Get In Touch</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="tpabout__inner-title-area about-inner-content mr-100 mb-70">
                                        <h4 className="tpabout__inner-sub-title mb-5">Features #02</h4>
                                        <h4 className="tpabout__inner-title mb-25">All kinds of payments securely</h4>
                                        <p>Publish your eCommerce site quickly with our easy-to-use store builder— no
                                            coding required. Migrate your items from your point of sale system or turn your
                                            Instagram feed into a shopping site and start selling fast. Square Online works
                                            for all kinds of businesses—retail, restaurants, services.
                                        </p>
                                        <Link className="tpteam__btn" href="/contact">Contact With Us</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="tpfeature__inner-thumb mb-70">
                                        <img src="/assets/img/banner/about-banner-2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </div>

            </Layout>
        </>
    )
}