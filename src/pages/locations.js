import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { v4 as uuidv4 } from "uuid"

// eslint-disable-next-line no-unused-vars
import { fluidImageFragment } from "../utils"

import Container from "../components/container/container.component"
import PageHeader from "../components/page-header/page-header.component"
import LocationCard from "../components/location-card/location-card.component"
import SEO from "../components/seo"

const LocationsPage = () => {
  const {
    allLocationsJson: { edges: locations },
    file: {
      childImageSharp: { fluid: image },
    },
  } = useStaticQuery(graphql`
    query Locations {
      allLocationsJson {
        edges {
          node {
            address
            description
            directions
            heading
            telephone {
              cta
              full
            }
          }
        }
      }
      file(relativePath: { eq: "hero-slider/car-valeting.jpg" }) {
        ...fluidImageFragment
      }
    }
  `)

  return (
    <>
      <SEO title="Locations" />
      <PageHeader heading="Locations" image={image} />
      <Container columns={2}>
        {locations.map(
          ({
            node: { address, description, directions, heading, telephone },
          }) => (
            <LocationCard
              key={uuidv4()}
              address={address}
              heading={heading}
              description={description}
              directions={directions}
              telephone={telephone}
            />
          )
        )}
      </Container>
    </>
  )
}

export default LocationsPage
