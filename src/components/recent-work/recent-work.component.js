// TODO: use css grid for this layout.
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { v4 as uuidv4 } from "uuid"

/** @jsx jsx */
import { jsx } from "@emotion/core"

// eslint-disable-next-line no-unused-vars
import { fluidImageFragment } from "../../utils"

import { useMenuJson } from "../../hooks"

import * as styles from "./recent-work.styles"

import AnchorLink from "../anchor-link/anchor-link.component"

const RecentWork = () => {
  const {
    allMenuSocialJson: { nodes: menuSocial },
  } = useMenuJson()

  // Find instagram URL in social menu.
  const instagramLink = menuSocial.find(obj => {
    return obj.href.includes("instagram")
  })

  const {
    allFile: { edges: images },
  } = useStaticQuery(graphql`
    query RecentWorkImages {
      allFile(filter: { relativeDirectory: { eq: "recent-work" } }) {
        edges {
          node {
            name
            ...fluidImageFragment
          }
        }
      }
    }
  `)

  return (
    <section css={styles.recentWork}>
      <header>
        <h1>Recent Work</h1>
      </header>

      <ul>
        {images.map(({ node: { childImageSharp: image }, name }) => {
          return (
            <li key={uuidv4()}>
              <figure>
                <Img fluid={image.fluid} alt={name} title={name} />
              </figure>
            </li>
          )
        })}
      </ul>

      {instagramLink && (
        <footer>
          {/* TODO: Add instagram logo svg */}
          <AnchorLink title={instagramLink.title} href={instagramLink.href}>
            {instagramLink.title}
          </AnchorLink>
          .
        </footer>
      )}
    </section>
  )
}

export default RecentWork
