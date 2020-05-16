import { css } from "@emotion/core"
import normalize from "normalize.css"
import Shevy from "shevyjs"

import theme from "./theme"

const shevy = new Shevy({ proximity: true })

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
    ${shevy.body};
    font-family: ${theme.fontFamily.body};
  }

  h1 {
    ${shevy.h1}
    ${theme.heading};
  }
  h2 {
    ${shevy.h2}
    ${theme.heading};
  }
  h3 {
    ${shevy.h3}
    ${theme.heading};
  }
  h4 {
    ${shevy.h4}
    ${theme.heading};
  }
  h5 {
    ${shevy.h5}
    ${theme.heading};
  }
  h6 {
    ${shevy.h6}
    ${theme.heading};
  }

  p,
  ol,
  ul,
  pre {
    ${shevy.content}
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`
export default global
