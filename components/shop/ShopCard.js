import Link from "next/link"
const ShopCard = ({ item, title }) => {
    return (
        <>
            <div className="col">
                <div className="tpproduct tpproductitem mb-15 p-relative">
                    <div className="tpproduct__thumb">
                        <div className="tpproduct__thumbitem p-relative">
                            {
                                item.category === "mobile" ? <Link href={`/shop/${item.id}`}>
                                    <img style={{height:"100%", objectFit:'contain', width:"100%"}} src={`${item.imgf}`} alt="product-thumb" />
                                    <img style={{height:"100%", objectFit:'contain', width:'100%'}} className="thumbitem-secondary" src={`${item.imgb}`} alt="product-thumb" />
                                </Link> : <Link href={`/shop/${item.id}`}>
                                    <img style={{width:'100%'}} src={`${item.imgf}`} alt="product-thumb" />
                                    <img style={{width:'100%'}} className="thumbitem-secondary" src={`${item.imgb}`} alt="product-thumb" />
                                </Link>
                            }
                        </div>
                    </div>
                    <div className="tpproduct__content-area">
                        <h3 className="tpproduct__title mb-5"><Link href={`/shop/${item.id}`}>{title}</Link></h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCard