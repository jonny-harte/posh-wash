import React from "react"
import PropTypes from "prop-types"
import { isNewTab } from "../../../utils"

const Anchor = ({ children, className, clickEvent, href, target, title }) => (
  <a
    className={className}
    href={encodeURI(href)}
    onClick={e => clickEvent && clickEvent(e)}
    rel={isNewTab(target, href) ? "noopener noreferrer" : undefined}
    target={isNewTab(target, href) ? "_blank" : target}
    title={title}
  >
    {children}
  </a>
)

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  clickEvent: PropTypes.func,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
}
Anchor.defaultProps = {
  className: null,
  clickEvent: null,
  target: null,
}

export default Anchor
