import PropTypes from "prop-types"

/** @jsx jsx */
import { jsx } from "@emotion/core"

import * as styles from "./container.styles"

const Container = ({ children, columns = 1 }) => (
  <div css={theme => styles.container({ columns, theme })}>{children}</div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number,
}

Container.defaultProps = {
  columns: 1,
}

export default Container
