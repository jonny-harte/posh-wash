import PropTypes from "prop-types"

/** @jsx jsx */
import { jsx } from "@emotion/core"

import * as styles from "./location-card.styles"

import AnchorLink from "../anchor-link/anchor-link.component"

const LocationCard = ({
  address,
  description,
  directions,
  heading,
  telephone,
}) => (
  <article css={styles.locationCard}>
    <h1>{heading}</h1>
    <div
      css={styles.description}
      dangerouslySetInnerHTML={{ __html: description }}
    />
    <div>
      <h2>Address</h2>
      <address dangerouslySetInnerHTML={{ __html: address }} />
    </div>

    <AnchorLink href={telephone.full} title={telephone.cta}>
      {telephone.cta}
    </AnchorLink>

    <AnchorLink
      className="button"
      href={directions}
      title={`Directions to ${heading}`}
    >
      Direction
    </AnchorLink>
  </article>
)

LocationCard.propTypes = {
  address: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  directions: PropTypes.string.isRequired,
  telephone: PropTypes.shape({
    full: PropTypes.string,
    cta: PropTypes.string,
  }).isRequired,
}

export default LocationCard
