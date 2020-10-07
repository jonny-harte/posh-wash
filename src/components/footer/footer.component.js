import PropTypes from "prop-types"
import Logo from "react-inlinesvg"

/** @jsx jsx */
import { jsx } from "@emotion/core"

import { useMenuJson } from "../../hooks"

import * as styles from "./footer.styles"

import AnchorLink from "../anchor-link/anchor-link.component"
import Menu from "../menu/menu-list.component"

export const PureFooter = ({ menuItems, siteTitle }) => (
  <footer role="contentinfo" css={styles.footer}>
    <div>
      <Menu label="Social Menu" items={menuItems} css={styles.menu} />

      <address className="h-card" css={styles.address}>
        <AnchorLink
          href={encodeURI(
            "https://maps.apple.com/?daddr=Park+Lane+Car+Park,+Park+Lane,+London,+W1K+7AN.&dirflg=d&t=m"
          )}
          title="Directions to Post Wash"
        >
          <span className="p-street-address">Park Lane Car Park</span>,
          <br />
          <span className="p-locality">London</span>,{" "}
          <span className="p-postal-code">W1K 7AN</span>
        </AnchorLink>
      </address>
    </div>

    <div>
      <AnchorLink href="/" title={siteTitle} css={styles.logo}>
        <Logo src="../../graphics/logo-text.svg" />
      </AnchorLink>

      <p css={styles.copyright}>© 1986 - {new Date().getFullYear()}</p>
    </div>
  </footer>
)

export const Footer = props => {
  const {
    allMenuSocialJson: { nodes: menuSocial },
  } = useMenuJson()

  /* eslint-disable-next-line react/jsx-props-no-spreading */
  return <PureFooter {...props} menuItems={menuSocial} />
}

PureFooter.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  siteTitle: PropTypes.string.isRequired,
}
