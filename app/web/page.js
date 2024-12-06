import React from 'react'
import Layout from "@/components/layout/Layout"
import Price from "../../data/pricings.json"
import Pricing from "@/components/sections/Pricing"
const WebsiteApp = () => {
    return (
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Custom Website Development">
            <Pricing price={Price[4]} />
        </Layout>
    )
}

export default WebsiteApp