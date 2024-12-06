import React from 'react'
import WhatsAppButton from '../elements/WhatsAppButton'

const Pricing = ({ price }) => {
    console.log(price, 'hj')
    return (
        <section>
            <h1 className="title" style={{ marginTop: '30px' }}>Our Pricing</h1>
            <h1 className='text-center' style={{ marginTop: '30px' }}>Simple Plans For Everyone</h1>
            <div class="pricing-container">
                {
                    price?.prices?.map(item => (
                        <div class="pricing">
                            <h4>{item?.name}</h4>
                            <h1>RS.{item?.price}</h1>
                            {/* <small>per month</small> */}
                            <div className='mt-3'>
                                {/* <button>Choose Plan</button> */}
                                <WhatsAppButton title="Choose Plan" serviceName={price?.category} planType={item?.name}/>
                            </div>
                            <ul>
                                {
                                    item?.included?.map(item => (
                                        <li><i className="fal fa-check f-fas-check-icon" />{item}</li>
                                    ))
                                }
                                {
                                    item?.excluded?.map(item => (
                                        <li><i className="fal fa-times f-fas-cross-icon" />{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>

    )
}

export default Pricing
