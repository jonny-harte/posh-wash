import React from "react"
import { OutboundLink as Link } from "gatsby-plugin-gtag"
import PropTypes from "prop-types"
import { isNewTab } from "../../../utils"

const OutboundLink = ({
  children,
  className,
  clickEvent,
  href,
  target,
  title,
}) => (
  <Link
    className={className}
    href={encodeURI(href)}
    onClick={e => clickEvent && clickEvent(e)}
    rel={isNewTab(target, href) ? "noopener noreferrer" : undefined}
    target={isNewTab(target, href) ? "_blank" : target}
    title={title}
  >
    {children}
  </Link>
)

OutboundLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  clickEvent: PropTypes.func,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
}
OutboundLink.defaultProps = {
  className: null,
  clickEvent: null,
  target: null,
}

export default OutboundLink
