'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
    },

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.slider-pagination',
        clickable: true,
    },

}

import Link from "next/link"
import slides from '../../data/slider.json'
export default function Slider1() {
    return (
        <>
            <section className="slider-area pb-25">
                <div className="container">
                    <div className="row justify-content-xl-end">
                        <div className="col-xl-9 col-xxl-7 col-lg-9">
                            <div className="tp-slider-area p-relative">
                                <div className="swiper-container slider-active">
                                    <Swiper {...swiperOptions}>
                                        {
                                            slides?.map(item => (
                                                <SwiperSlide>
                                                    <div className="tp-slide-item">
                                                        <div className="tp-slide-item__content">
                                                            {/* <h4 className="tp-slide-item__sub-title">Accessories</h4> */}
                                                            <h3 className="tp-slide-item__title mb-25">Up To
                                                                <i>{item.discount}% Off
                                                                    <img src="/assets/img/icon/title-shape-02.jpg" alt="" />
                                                                </i>
                                                                <br />
                                                                {item.fname} <br /> {item.lname}
                                                            </h3>
                                                            <Link className="tp-slide-item__slide-btn tp-btn" href="/">Get Now <i className="fal fa-long-arrow-right" /></Link>
                                                        </div>
                                                        <div className="tp-slide-item__img">
                                                            <img src={item?.img} alt="" />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }

                                    </Swiper>
                                </div>
                                <div className="slider-pagination" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-xxl-3 col-lg-3">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="tpslider-banner tp-slider-sm-banner mb-30">
                                        <Link href="/shop-details">
                                            <div className="tpslider-banner__img">
                                                <img src="https://res.cloudinary.com/djidyz2yw/image/upload/v1732981232/banner-7_zgak1x.png" alt="" />
                                                {/* <div className="tpslider-banner__content">
                                                    <span className="tpslider-banner__sub-title">Hand made</span>
                                                    <h4 className="tpslider-banner__title">New Modern  Stylist <br /> Crafts</h4>
                                                </div> */}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="tpslider-banner">
                                        <Link href="/shop-details">
                                            <div className="tpslider-banner__img">
                                                <img src="https://res.cloudinary.com/djidyz2yw/image/upload/v1732980977/Screenshot_2024-11-30_at_8.24.14_PM_qaelpg.png" alt="" />
                                                <div className="tpslider-banner__content">
                                                    <span className="tpslider-banner__sub-title">Location</span>
                                                    <h4 className="tpslider-banner__title">Visit our office<br /> Near Taj Mahal 
                                                        Marquee</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
