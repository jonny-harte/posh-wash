import { css } from "@emotion/core"
import normalize from "normalize.css"

const globalStyles = ({ isMenuOpen, scrollY, theme }) => css`
  ${normalize};
  :root {
    --swiper-theme-color: #fff;
  }

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
    background-color: #1c1c1c;
    color: #fff;
    font-family: ${theme.fontFamily.body};
    left: ${isMenuOpen && `0`};
    position: ${isMenuOpen && `fixed`};
    right: ${isMenuOpen && `0`};
    top: ${isMenuOpen && `-${scrollY}px`};
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

  a {
    color: inherit;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .swiper-pagination-bullets {
    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    border-radius: 0;
    display: block;
    height: 10px;
    width: 10px;

    &:not(.swiper-pagination-bullet-active) {
      background-color: #fff;
      opacity: 0.4;
    }
  }

  .button {
    ${theme.heading};
    border: 2px solid #fff;
    padding: ${theme.baseSpacing(0.5)} ${theme.baseSpacing()};
    text-align: center;
    text-decoration: none;
  }
`

export default globalStyles
