import React from 'react'
import Layout from "@/components/layout/Layout"
import Price from "../../data/pricings.json"
import Pricing from "@/components/sections/Pricing"
const WordPress = () => {
    return (
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Wordpress/Shopify Website Development">
            <Pricing price={Price[7]} />
        </Layout>
    )
}

export default WordPress