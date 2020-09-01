import { css } from "@emotion/core"
import { mediaQuery as mq } from "../../styles"

// import GraphicComponent from "../graphic/graphic.component"

export const recentWork = theme => css`
  padding: 0 ${theme.baseSpacing()};

  ${mq("desktop")} {
    padding: 0 40px;
  }

  h1 {
    font-size: clamp(18px, 5.625vw, ${theme.h1.fontSize});
    margin-top: 0;
  }

  ul {
    border: 1px solid #fff;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    width: 100%;

    ${mq("tablet-sm")} {
      width: calc(100% / 4);
    }

    ${mq("desktop")} {
      width: calc(100% / 6);
    }

    &:nth-of-type(1n + 9) {
      ${mq("desktop", true)} {
        display: none;
      }
    }

    &:nth-of-type(1n + 5) {
      ${mq("tablet-sm", true)} {
        display: none;
      }
    }
  }

  a {
    &:hover {
      figure {
        &::before {
          opacity: 0;
        }
      }
    }
  }

  figure {
    border: 1px solid #fff;
    margin: 0;
    position: relative;

    &::after {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.4) 15%,
        rgba(0, 0, 0, 0) 100%
      );
      bottom: 0;
      content: "";
      left: 0;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
      transition: opacity 0.2s cubic-bezier(0.74, 0.01, 0.25, 1);
    }
  }

  .gatsby-image-wrapper {
    > div {
      padding-bottom: 100% !important;
    }
  }

  figcaption {
    font-family: ${theme.fontFamily.heading};
    bottom: 10px;
    color: #fff;
    line-height: 1;
    position: absolute;
    right: 10px;
    z-index: 1;
  }

  footer {
    margin-top: 10px;
    text-align: right;
  }
`

export const heart = css`
  height: 15px;
  margin-right: 3px;
  vertical-align: top;
  width: 15px;
  * {
    fill: #fff;
  }
`
