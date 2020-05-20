import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { isURLProtocol } from "@hartey11/gatsby-plugin-anchor-link"
import Logo from "react-inlinesvg"

/** @jsx jsx */
import { jsx } from "@emotion/core"

import { useGooglePlacesData, useMenuJson } from "../../hooks"
import { isGooglePlaceOpen, telAlert } from "../../utils"

import * as styles from "./header.styles"
import Menu from "../menu/menu-list.component"
import MenuToggle, { mapStateToProps } from "./menu-toggle.component"

const PureHeader = ({
  isMenuOpen,
  menuPrimary,
  menuSecondary,
  siteTitle,
  telHandler,
}) => (
  <header role="banner" css={styles.header}>
    <Link to="/" title={siteTitle} css={styles.logo}>
      <Logo src="../../graphics/logo-wheel.svg" />
    </Link>
    <MenuToggle />
    <div
      aria-hidden={!isMenuOpen}
      css={theme => styles.nav({ theme, isMenuOpen })}
    >
      <Menu label="Main Menu" items={menuPrimary} css={styles.menuMain} />
      <Menu
        clickEvent={telHandler}
        label="Contact Menu"
        items={menuSecondary}
        css={styles.menuContact}
      />
    </div>
  </header>
)

const Header = props => {
  const {
    allGooglePlacesPlace: {
      edges: [
        {
          node: {
            opening_hours: { periods },
          },
        },
      ],
    },
  } = useGooglePlacesData()

  const {
    allMenuContactJson: { nodes: menuContact },
    allMenuMainJson: { nodes: menuMain },
  } = useMenuJson()

  const telHandler = e => {
    // Get the URL of the clicked link.
    const href = e.target.closest("a").getAttribute("href")

    // If not a tel link do nothing.
    if (!isURLProtocol(href, "tel")) {
      return
    }

    const date = new Date()
    if (!isGooglePlaceOpen(date, periods)) {
      telAlert(e)
    }
  }

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <PureHeader
      {...props}
      menuPrimary={menuMain}
      menuSecondary={menuContact}
      telHandler={telHandler}
    />
  )
  /* eslint-enable react/jsx-props-no-spreading */
}

PureHeader.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  menuPrimary: PropTypes.arrayOf(PropTypes.object).isRequired,
  menuSecondary: PropTypes.arrayOf(PropTypes.object).isRequired,
  siteTitle: PropTypes.string,
  telHandler: PropTypes.func,
}

PureHeader.defaultProps = {
  siteTitle: null,
  telHandler: null,
}

// eslint-disable-next-line react-redux/prefer-separate-component-file
export default connect(mapStateToProps)(Header)
