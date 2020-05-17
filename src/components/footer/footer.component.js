import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "react-inlinesvg"

/** @jsx jsx */
import { jsx } from "@emotion/core"

import menuJson from "../../hooks/useMenuJson"
import siteMetadata from "../../hooks/useSiteMetadata"

import * as styles from "./footer.styles"

import Menu from "../menu/menu-list.component"

export const PureFooter = ({ menuItems, title }) => (
  <footer role="contentinfo" css={styles.footer}>
    <div>
      <Menu label="Social Menu" items={menuItems} css={styles.menu} />

      <address className="h-card" css={styles.address}>
        <a
          href={encodeURI(
            "https://maps.apple.com/?daddr=Park+Lane+Car+Park,+Park+Lane,+London,+W1K+7AN.&dirflg=d&t=m"
          )}
          title="Directions to Post Wash"
        >
          <span className="p-street-address">Park Lane Car Park</span>,
          <br />
          <span className="p-locality">London</span>,{" "}
          <span className="p-postal-code">W1K 7AN</span>
        </a>
      </address>
    </div>

    <div>
      <Link to="/" title={title} css={styles.logo}>
        <Logo className="logo" src="./graphics/logo-text.svg" />
      </Link>

      <p css={styles.copyright}>© 1986 - {new Date().getFullYear()}</p>
    </div>
  </footer>
)

export const Footer = props => {
  const {
    allMenuSocialJson: { nodes: menuSocial },
  } = menuJson()
  const { title } = siteMetadata()

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PureFooter {...props} menuItems={menuSocial} title={title} />
}

PureFooter.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
}
