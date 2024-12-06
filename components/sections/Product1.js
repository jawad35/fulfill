'use client'
import { useState } from "react"
import FilterShopBox2 from "../shop/FilterShopBox2"

export default function Product1() {
    const [activeIndex, setActiveIndex] = useState("all")
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="product-area pt-95 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="tpsection mb-40">
                                <h4 className="tpsection__title">Some <span> Samples*94<img src="/assets/img/icon/title-shape-01.jpg" alt="" /></span></h4>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="tpnavbar">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className={activeIndex == "all" ? "nav-link active" : "nav-link"} onClick={() => handleOnClick("all")}>All</button>
                                        <button className={activeIndex == "web" ? "nav-link active" : "nav-link"} onClick={() => handleOnClick("web")}>Web</button>
                                        <button className={activeIndex == "mobile" ? "nav-link active" : "nav-link"} onClick={() => handleOnClick("mobile")}>Mobile</button>
                                        <button className={activeIndex == "graphics" ? "nav-link active" : "nav-link"} onClick={() => handleOnClick("graphics")}>Graphics</button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className={activeIndex !== "all1" ? "tab-pane fade show active" : "tab-pane fade"} id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                            <div className="row row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
                                <FilterShopBox2 selectedCategory={activeIndex} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
