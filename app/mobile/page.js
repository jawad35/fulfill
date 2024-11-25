import React from 'react'
import Layout from "@/components/layout/Layout"
import Price from "../../data/pricings.json"
import Pricing from "@/components/sections/Pricing"
const MobileApp = () => {
    return (
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Mobile Development">
            <Pricing price={Price[5]} />
        </Layout>
    )
}

export default MobileApp