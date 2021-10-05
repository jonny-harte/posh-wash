// eslint-disable-next-line no-unused-vars
import { useEffect } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import { useSiteMetadata } from "../hooks"
import {
  toggleMenu as toggleMenuAction,
  updateRoute as updateRouteAction,
} from "../state/app"
import { globalStyles, mediaQuery as mq, theme } from "../styles"

import Header from "./header/header.component"
import { Footer } from "./footer/footer.component"

const Layout = ({
  children,
  isMenuOpen,
  path,
  route,
  scrollY,
  toggleMenu,
  updateRoute,
}) => {
  const { title } = useSiteMetadata()

  if (path !== route) {
    updateRoute(path)
  }

  useEffect(() => {
    // TODO: reset scrollY to 0 so page starts at the top.
    toggleMenu(false)
  }, [route, toggleMenu])

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles({ isMenuOpen, scrollY, theme })} />
      <Header siteTitle={title} />
      <main
        role="main"
        css={css`
          flex: 1;
          padding-top: ${theme.header.spacer("mobile")}px;
          ${mq("tablet-sm")} {
            padding-top: ${theme.header.spacer("tablet")}px;
          }
          ${mq("desktop")} {
            padding-top: ${theme.header.spacer("desktop")}px;
          }
        `}
      >
        {children}
      </main>
      <Footer siteTitle={title} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  scrollY: PropTypes.number.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  updateRoute: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const { app } = state
  return {
    isMenuOpen: app.isMenuOpen,
    scrollY: app.scrollY,
    route: app.route,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: isOpen => dispatch(toggleMenuAction(isOpen)),
    updateRoute: route => dispatch(updateRouteAction(route)),
  }
}

// eslint-disable-next-line react-redux/prefer-separate-component-file
export default connect(mapStateToProps, mapDispatchToProps)(Layout)
