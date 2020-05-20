import { css } from "@emotion/core"
import normalize from "normalize.css"

import theme from "./theme"

const global = css`
  ${normalize};
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    ${theme.body};
    font-family: ${theme.fontFamily.body};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${theme.heading};
  }

  h1 {
    ${theme.h1}
  }
  h2 {
    ${theme.h2}
  }
  h3 {
    ${theme.h3}
  }
  h4 {
    ${theme.h4}
  }
  h5 {
    ${theme.h5}
  }
  h6 {
    ${theme.h6}
  }

  p,
  ol,
  ul,
  pre {
    ${theme.content}
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

export default global
