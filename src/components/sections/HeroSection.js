import React from "react"
import { Link } from "gatsby"

const HeroSection = () => {
  return (
    <div>
      <img src="/images/logos/logo.svg" alt="logo" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </div>
  )
}

export default HeroSection
