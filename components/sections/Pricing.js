import React from 'react'

const Pricing = () => {
    return (
        <section>
            <h1 className="title" style={{marginTop:'30px'}}>Our Pricing</h1>
            <h1 className='text-center' style={{marginTop:'30px'}}>Simple Plans For Everyone</h1>
            <div class="pricing-container">
                <div class="pricing">
                    <h4>Basic Plan</h4>
                    <h1>$99.00</h1>
                    {/* <small>per month</small> */}
                    <div className='mt-3'>
                        <button>Choose Plan</button>
                    </div>
                    <ul>
                        <li><i className="fal fa-check f-fas-check-icon" />Domain and Hosting for 1 Year.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Up to 10-page WordPress website.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Fully custom-designed WordPress site tailored to client branding.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Integration of advanced plugins (e.g., e-commerce, booking systems, or membership portals).</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Comprehensive SEO optimization.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Custom blog setup with 5 example posts.</li>
                        <li><i className="fal fa-times f-fas-cross-icon" />Social media and email integration.</li>
                        <li><i className="fal fa-times f-fas-cross-icon" />Google Analytics, performance tracking, and speed optimization.</li>
                        <li><i className="fal fa-times f-fas-cross-icon" />Training session for client to manage their site.</li>
                        <li><i className="fal fa-times f-fas-cross-icon" />Ongoing support for 1 month post-launch.</li>
                        <li><i className="fal fa-times f-fas-cross-icon" />10 rounds of revisions.</li>
                    </ul>
                </div>
                <div class="pricing highlight">
                    <h4>Standard Plan</h4>
                    <small class="green">Most Popular</small>
                    <h1>$150.00</h1>
                    {/* <small>per month</small> */}
                    <div className='mt-3'>
                        <button>Choose Plan</button>
                    </div>
                    <ul>
                        <li><i className="fal fa-check f-fas-check-icon" />Domain and Hosting for 1 Year.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Up to 10-page WordPress website.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Fully custom-designed WordPress site tailored to client branding.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Integration of advanced plugins (e.g., e-commerce, booking systems, or membership portals).</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Comprehensive SEO optimization.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Custom blog setup with 5 example posts.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Social media and email integration.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Google Analytics, performance tracking, and speed optimization.</li>
                        <li><i className="fal fa-times f-fas-cross-icon" />Training session for client to manage their site.</li>
                        <li><i className="fal fa-times f-fas-cross-icon" />Ongoing support for 1 month post-launch.</li>
                        <li><i className="fal fa-times f-fas-cross-icon" />10 rounds of revisions.</li>
                    </ul>
                </div>
                <div class="pricing">
                    <h4>Premium Plan</h4>
                    <h1>$199.00</h1>
                    {/* <small>per month</small> */}
                    <div className='mt-3'>
                        <button>Choose Plan</button>
                    </div>
                    <ul>
                        <li><i className="fal fa-check f-fas-check-icon" />Domain and Hosting for 1 Year.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Up to 10-page WordPress website.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Fully custom-designed WordPress site tailored to client branding.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Integration of advanced plugins (e.g., e-commerce, booking systems, or membership portals).</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Comprehensive SEO optimization.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Custom blog setup with 5 example posts.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Social media and email integration.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Google Analytics, performance tracking, and speed optimization.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Training session for client to manage their site.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />Ongoing support for 1 month post-launch.</li>
                        <li><i className="fal fa-check f-fas-check-icon" />10 rounds of revisions.</li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default Pricing
