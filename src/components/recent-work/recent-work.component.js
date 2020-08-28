// TODO: use css grid for this layout.
// TODO: Update Access Token on build.
// TODO: setup IFTTT to update on new post.
// TODO: setup rebuild every 4 hours to update likes.

/** @jsx jsx */
import Img from "gatsby-image"
import Heart from "react-inlinesvg"
import { jsx } from "@emotion/core"

import { useInstagramData, useMenuJson } from "../../hooks"

import * as styles from "./recent-work.styles"

import AnchorLink from "../anchor-link/anchor-link.component"

const RecentWork = () => {
  const {
    allMenuSocialJson: { nodes: menuSocial },
  } = useMenuJson()

  const {
    allInstaNode: { edges: posts },
  } = useInstagramData()

  console.log(posts)

  // Find instagram URL in social menu.
  const instagramLink = menuSocial.find(obj => {
    return obj.href.includes("instagram")
  })

  return (
    <section css={styles.recentWork}>
      <header>
        <h1>Recent Work</h1>
      </header>

      <ul>
        {posts &&
          posts.map(({ node: { caption, id, likes, localFile } }) => {
            return (
              <li key={id}>
                <figure>
                  <Img
                    fluid={localFile.childImageSharp.fluid}
                    alt={caption}
                    title={caption}
                  />
                  {likes && (
                    <figcaption>
                      <Heart
                        css={styles.heart}
                        src="../../graphics/heart.svg"
                      />
                      {likes}
                    </figcaption>
                  )}
                </figure>
              </li>
            )
          })}
      </ul>

      {instagramLink && (
        <footer>
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
