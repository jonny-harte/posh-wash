import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { v4 as uuidv4 } from "uuid"

// eslint-disable-next-line no-unused-vars
import { fluidImageFragment } from "../utils"

import Container from "../components/container/container.component"
import PageHeader from "../components/page-header/page-header.component"
import ProductCard from "../components/product-card/product-card.component"
import ServiceFooter from "../components/service-footer/service-footer.component"
import SEO from "../components/seo"

const WheelsPage = () => {
  const {
    allServicesJson: { edges: products },
    file: {
      childImageSharp: { fluid: image },
    },
  } = useStaticQuery(graphql`
    query Wheels {
      allServicesJson(filter: { type: { eq: "wheels" } }) {
        edges {
          node {
            heading
            description
            price
          }
        }
      }
      file(relativePath: { eq: "hero-slider/wheel-refurbishment.jpg" }) {
        ...fluidImageFragment
      }
    }
  `)

  return (
    <>
      <SEO title="Wheel Services" />
      <PageHeader heading="Wheel Services" image={image} />
      <Container columns={2}>
        {products.map(({ node: { heading, description, price } }) => (
          <ProductCard
            key={uuidv4()}
            heading={heading}
            description={description}
            price={price}
          />
        ))}
        <ServiceFooter />
      </Container>
    </>
  )
}

export default WheelsPage
