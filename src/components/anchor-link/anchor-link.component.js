import React from "react"
import PropTypes from "prop-types"

import { isInternalLink } from "../../utils"

import Anchor from "./anchor/anchor.component"
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
      <Anchor
        className={className}
        clickEvent={clickEvent}
        href={href}
        title={title}
        target={target}
      >
        {children}
      </Anchor>
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
