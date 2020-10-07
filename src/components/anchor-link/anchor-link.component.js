import React from "react"
import PropTypes from "prop-types"

import { isInternalLink } from "../../utils"

import OutboundLink from "./outbound-link/outbound-link.component"
import GatsbyLink from "./gatsby-link/gatsby-link.component"

const AnchorLink = ({
  children,
  className,
  clickEvent,
  href,
  target,
  title,
}) => (
  <>
    {isInternalLink(href) ? (
      <GatsbyLink
        activeClassName="active"
        className={className}
        clickEvent={clickEvent}
        href={href}
        title={title}
      >
        {children}
      </GatsbyLink>
    ) : (
      <OutboundLink
        className={className}
        clickEvent={clickEvent}
        href={href}
        title={title}
        target={target}
      >
        {children}
      </OutboundLink>
    )}
  </>
)

AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  clickEvent: PropTypes.func,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
}

AnchorLink.defaultProps = {
  className: null,
  clickEvent: null,
  target: null,
}

export default AnchorLink
