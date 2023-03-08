/* eslint-disable no-unused-vars */
import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
    </Layout>
  )
}

export default IndexPage
