import PropTypes from "prop-types"

/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import siteMetadata from "../hooks/useSiteMetadata"

import globalStyles from "../styles/global"
import mq from "../styles/media-query"
import theme from "../styles/theme"

import Header from "./header"
import { Footer } from "./footer/footer.component"

const Layout = ({ children }) => {
  const { title } = siteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Header siteTitle={title} />
      <main
        role="main"
        css={css`
          flex: 1;
          padding-top: ${theme.header.spacer("mobile")}px;
          ${mq("tablet-sm")} {
            padding-top: ${theme.header.spacer("tablet-sm")}px;
          }
          ${mq("desktop")} {
            padding-top: ${theme.header.spacer("desktop")}px;
          }
        `}
      >
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
