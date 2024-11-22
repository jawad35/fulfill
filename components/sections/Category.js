
import Link from "next/link"

export default function Category() {
    return (
        <>
            <section className="category-area pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tpsection mb-40">
                                <h4 className="tpsection__title">Top <span> Categories <img src="/assets/img/icon/title-shape-01.jpg" alt="" /></span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="custom-row category-border pb-45 justify-content-xl-between">
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon p-relative">
                                <img src="/assets/img/icon/programming.png" alt="" className="fn__svg" />
                                <span>20</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/shop">Programming</Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/icon/digital-marketing.png" alt="" className="fn__svg" />
                                <span>12</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/shop">Digital Marketing</Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/icon/cms.png" alt="" className="fn__svg" />
                                <span>03</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/shop">Wordpress/Shopify</Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/icon/digital-products.png" alt="" className="fn__svg" />
                                <span>09</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/shop"> Digital Products </Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/icon/graphics-design.png" alt="" className="fn__svg" />
                                <span>10</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/shop">Graphics Design</Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/icon/content-creation.png" alt="" className="fn__svg" />
                                <span>05</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/shop">Content Creation </Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
