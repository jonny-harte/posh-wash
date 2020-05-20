import PropTypes from "prop-types"

/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import { useSiteMetadata } from "../hooks"
import { global, mediaQuery as mq, theme } from "../styles"

import Header from "./header/header.component"
import { Footer } from "./footer/footer.component"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
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
}

export default Layout
