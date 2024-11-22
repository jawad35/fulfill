
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Feedbacks from '../../data/feedbacks.json'
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.tptestiarrow__nxt',
        prevEl: '.tptestiarrow__prv',
    },
}
export default function Testimonial2() {
    return (
        <>
            <section className="testimonial-area pt-65 platinam-light pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="tpsection mb-35">
                                <h4 className="tpsection__title">User Feedbacks</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="tptestiarrow tp-white-testimonial d-flex align-items-center justify-content-end">
                                <div className="tptestiarrow__prv"><i className="far fa-long-arrow-left" />Prev</div>
                                <div className="tptestiarrow__nxt">Next<i className="far fa-long-arrow-right" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container testi-active tp-white-testimonial">
                        <Swiper {...swiperOptions}>
                            {
                                Feedbacks.map((item, index) => (<SwiperSlide>
                                    <div className="tptesti text-center" key={index}>
                                        <div className="tptesti__icon mb-25">
                                            <img src="/assets/img/svg/testi02.svg" alt="" className="fn__svg" />
                                        </div>
                                        <div className="tptesti__content pb-5">
                                            <p>“ {item?.feedback} ”
                                            </p>
                                        </div>
                                        <div className="tptesti__avata d-flex align-items-center justify-content-center">
                                            {/* <div className="tptesti__avata-icon mr-20">
                                                <img src="assets/img/testimonial/testi-avata-01.png" alt="avata" />
                                            </div> */}
                                            <div className="tptesti__avata-content text-center">
                                                <h5 className="tptesti__avata-content-title">{item?.name}</h5>
                                                <p>{item?.country}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>))
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
