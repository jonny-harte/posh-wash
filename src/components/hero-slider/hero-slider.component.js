import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Swiper from "react-id-swiper"
import { v4 as uuidv4 } from "uuid"

/** @jsx jsx */
import { jsx } from "@emotion/core"

// eslint-disable-next-line no-unused-vars
import { fluidImageFragment } from "../../utils"

import "swiper/css/swiper.css"
import * as styles from "./hero-slider.styles"

const params = {
  autoplay: {
    delay: 3000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  preloadImages: false,
  speed: 400,
}

export const PureHeroSlider = ({ images, slides }) => (
  <section css={styles.section}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Swiper {...params}>
      {slides.map(({ heading, imageName }) => {
        // Find image that matches slide image name.
        const image = images.find(obj => {
          return obj.node.name.includes(imageName)
        })

        return (
          <div key={uuidv4()}>
            <Img
              fluid={image.node.childImageSharp.fluid}
              fadeIn={false}
              css={styles.img}
            />
            <div css={styles.title}>
              <h1>
                {/* eslint-disable-next-line react/no-danger */}
                <span dangerouslySetInnerHTML={{ __html: heading }} />
              </h1>
            </div>
          </div>
        )
      })}
    </Swiper>
  </section>
)

export const HeroSlider = props => {
  const {
    allFile: { edges: images },
  } = useStaticQuery(graphql`
    query HeroSliderImages {
      allFile(filter: { relativeDirectory: { eq: "hero-slider" } }) {
        edges {
          node {
            name
            ...fluidImageFragment
          }
        }
      }
    }
  `)

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PureHeroSlider {...props} images={images} />
}

PureHeroSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default HeroSlider
