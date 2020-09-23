import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// eslint-disable-next-line no-unused-vars
import { fluidImageFragment } from "../utils"

import ContactDetails from "../components/contact-details/contact-details.component"
import ContactForm from "../components/contact-form/contact-form.component"
import Container from "../components/container/container.component"
import PageHeader from "../components/page-header/page-header.component"
import SEO from "../components/seo"

const ContactPage = () => {
  const {
    file: {
      childImageSharp: { fluid: image },
    },
  } = useStaticQuery(graphql`
    query ContactUs {
      file(relativePath: { eq: "hero-slider/car-valeting.jpg" }) {
        ...fluidImageFragment
      }
    }
  `)

  return (
    <>
      <SEO title="Contact Us" />
      <PageHeader heading="Contact Us" image={image} />
      <Container columns={2}>
        <ContactDetails />
        <ContactForm />
      </Container>
    </>
  )
}

export default ContactPage
