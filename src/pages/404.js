import React from "react"
import { Link } from "gatsby"

import Container from "../components/container/container.component"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <section>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>
          Take me{" "}
          <Link href="/" title="Return to homepage">
            home!
          </Link>
        </p>
      </section>
    </Container>
  </Layout>
)

export default NotFoundPage
