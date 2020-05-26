import { connect } from "react-redux"
import PropTypes from "prop-types"

/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import { useSiteMetadata } from "../hooks"
import { globalStyles, mediaQuery as mq, theme } from "../styles"

import Header from "./header/header.component"
import { mapStateToProps } from "./header/menu-toggle.component"
import { Footer } from "./footer/footer.component"

const Layout = ({ children, isMenuOpen, scrollY }) => {
  const { title } = useSiteMetadata()

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
  scrollY: PropTypes.number.isRequired,
}

// eslint-disable-next-line react-redux/prefer-separate-component-file
export default connect(mapStateToProps)(Layout)
