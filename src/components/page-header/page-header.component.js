import Img from "gatsby-image"
import PropTypes from "prop-types"

/** @jsx jsx */
import { jsx } from "@emotion/core"

import * as styles from "./page-header.styles"

const PageHeader = ({ heading, image }) => (
  <header css={styles.header}>
    <Img css={styles.img} fluid={image} fadeIn={false} />
    <div css={styles.title}>
      <h1>
        <span>{heading}</span>
      </h1>
    </div>
  </header>
)

PageHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.shape({
    aspectRatio: PropTypes.number,
    base64: PropTypes.string,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    srcSetWebp: PropTypes.string,
    srcWebp: PropTypes.string,
  }).isRequired,
}

export default PageHeader
