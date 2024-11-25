import React from 'react'
import Layout from "@/components/layout/Layout"
import Team from "@/components/sections/Team"

const OurTeam = () => {
    return (
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Meet Our Team">
            <Team/>
        </Layout>
    )
}

export default OurTeam