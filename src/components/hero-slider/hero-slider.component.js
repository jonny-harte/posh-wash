import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { v4 as uuidv4 } from "uuid"

/** @jsx jsx */
import { jsx } from "@emotion/core"

// eslint-disable-next-line no-unused-vars
import { fluidImageFragment } from "../../utils"

import "swiper/swiper-bundle.css"
import * as styles from "./hero-slider.styles"

SwiperCore.use([Autoplay, EffectFade, Pagination])

export const PureHeroSlider = ({ images, slides }) => (
  <section css={styles.section}>
    <Swiper
      autoplay={{ delay: 3000 }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      preloadImages={false}
      speed={400}
      pagination={{
        type: "bullets",
        clickable: true,
      }}
    >
      {slides.map(({ heading, imageName }) => {
        // Find image that matches slide image name.
        const image = images.find(obj => {
          return obj.node.name.includes(imageName)
        })

        return (
          <SwiperSlide key={uuidv4()}>
            <Img
              fluid={image.node.childImageSharp.fluid}
              fadeIn={false}
              css={styles.img}
            />
            <div css={styles.title}>
              <h1>
                <span dangerouslySetInnerHTML={{ __html: heading }} />
              </h1>
            </div>
          </SwiperSlide>
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
