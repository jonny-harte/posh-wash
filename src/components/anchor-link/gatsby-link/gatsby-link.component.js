import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const GatsbyLink = ({ children, className, clickEvent, title, href }) => (
  <Link
    className={className}
    to={encodeURI(href)}
    title={title}
    onClick={e => clickEvent && clickEvent(e)}
  >
    {children}
  </Link>
)

GatsbyLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  clickEvent: PropTypes.func,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

GatsbyLink.defaultProps = {
  className: null,
  clickEvent: null,
}

export default GatsbyLink
