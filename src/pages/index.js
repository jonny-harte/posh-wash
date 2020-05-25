import React from "react"

import heroSlides from "../data/hero-slides.json"

import { HeroSlider } from "../components/hero-slider/hero-slider.component"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSlider slides={heroSlides} />
  </Layout>
)

export default IndexPage
