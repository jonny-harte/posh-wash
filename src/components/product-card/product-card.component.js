import PropTypes from "prop-types"

/** @jsx jsx */
import { jsx } from "@emotion/core"

import * as styles from "./product-card.styles"

const ProductCard = ({ heading, description, price }) => (
  <article css={styles.productCard}>
    <h1>{heading}</h1>
    <div
      css={styles.description}
      dangerouslySetInnerHTML={{ __html: description }}
    />
    <p css={styles.price}>
      From
      <strong> £{price}</strong>
    </p>
  </article>
)

ProductCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductCard
