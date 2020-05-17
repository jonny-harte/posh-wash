import React from "react"
import PropTypes from "prop-types"
import AnchorLink from "@hartey11/gatsby-plugin-anchor-link"

const MenuItem = ({ children, classes, clickEvent, href, target, title }) => (
  <li className={classes}>
    <AnchorLink
      clickevent={clickEvent}
      href={href}
      target={target}
      title={title}
    >
      {children}
    </AnchorLink>
  </li>
)

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  clickEvent: PropTypes.func,
  href: PropTypes.string.isRequired,
  target: PropTypes.bool,
  title: PropTypes.string.isRequired,
}

MenuItem.defaultProps = {
  classes: null,
  clickEvent: null,
  target: null,
}

export default MenuItem
