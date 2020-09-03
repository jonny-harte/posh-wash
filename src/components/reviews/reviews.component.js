// import PropTypes from "prop-types"
import Star from "react-inlinesvg"
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { v4 as uuidv4 } from "uuid"

/** @jsx jsx */
import { jsx } from "@emotion/core"

import { useGooglePlacesData } from "../../hooks"

import "swiper/swiper-bundle.css"
import * as styles from "./reviews.styles"

import AnchorLink from "../anchor-link/anchor-link.component"

SwiperCore.use([Autoplay, EffectFade, Pagination])

const Reviews = () => {
  const {
    allGooglePlacesReview: { edges: places },
  } = useGooglePlacesData()

  return (
    <section css={styles.reviews}>
      <header>
        <h1>Customer Reviews</h1>
      </header>

      <Swiper
        autoplay={{ delay: 3000 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={400}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
      >
        {places.map(
          ({ node: { author_name: name, author_url: url, rating, text } }) => {
            return (
              <SwiperSlide key={uuidv4()}>
                <div>
                  {[...Array(5)].map((value, index) => (
                    <Star
                      key={uuidv4()}
                      index={index}
                      css={styles.star}
                      className={index < rating ? "fill" : ""}
                      src="../../graphics/star.svg"
                    />
                  ))}
                </div>
                <blockquote>
                  <div>
                    <q>{text}</q>
                  </div>
                  <footer>
                    <cite>
                      <AnchorLink
                        href={url}
                        title={`Google Maps Reviews - ${name}`}
                      >
                        {name} - {rating}/5
                      </AnchorLink>
                    </cite>
                  </footer>
                </blockquote>
              </SwiperSlide>
            )
          }
        )}
      </Swiper>

      <footer>
        <AnchorLink
          href="https://g.page/poshwash-london/review"
          title="Write a review"
        >
          Write a Review
        </AnchorLink>
        .
      </footer>
    </section>
  )
}

// Reviews.propTypes = {
//   className: PropTypes.string,
// }

// Reviews.defaultProps = {
//   className: null,
// }

export default Reviews
