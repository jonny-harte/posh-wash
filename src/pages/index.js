import React from "react"

// TODO: Change this to graphQL query.
import heroSlides from "../data/hero-slides.json"

import { BusinessHours } from "../components/business-hours/business-hours.component"
import Container from "../components/container/container.component"
import { HeroSlider } from "../components/hero-slider/hero-slider.component"
import RecentWork from "../components/recent-work/recent-work.component"
import Reviews from "../components/reviews/reviews.component"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HeroSlider slides={heroSlides} />
    <Container columns={2}>
      <section>
        <h1>Welcome to Posh&nbsp;Wash</h1>
        <p>
          We are London&apos;s number one hand car wash and alloy wheel
          refurbishment centre. With over 30 years experience and contracts with
          many of the dealerships across London, we ensure the highest quality
          standards are maintained.
        </p>
        <p>
          This combined with our same day service, minimises the inconvenience
          of having your car off the road as much as possible.
        </p>
      </section>
      <BusinessHours />
    </Container>
    <RecentWork />
    <Container>
      <Reviews />
    </Container>
  </>
)

export default IndexPage
