import { css } from "@emotion/core"
import { mediaQuery as mq } from "../../styles"

export const img = css`
  bottom: 0;
  left: 0;
  position: absolute !important;
  right: 0;
  top: 0;
  z-index: -1;
`

export const section = theme => css`
  background-color: #000;

  .swiper-slide {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: ${theme.baseSpacing()};

    ${mq({ orientation: "portrait" })} {
      height: calc(60vh - ${theme.header.spacer("mobile")}px);
    }
    ${mq({ orientation: "portrait", "min-width": "tablet-sm" })} {
      height: calc(50vh - ${theme.header.spacer("tablet")}px);
    }
    ${mq({ orientation: "portrait", "min-width": "desktop" })} {
      height: calc(50vh - ${theme.header.spacer("desktop")}px);
    }
    ${mq({ orientation: "landscape" })} {
      height: calc(100vh - ${theme.header.spacer("mobile")}px);
    }
    ${mq({ orientation: "landscape", "min-width": "tablet-sm" })} {
      height: calc(100vh - ${theme.header.spacer("tablet")}px);
    }
    ${mq({ orientation: "landscape", "min-width": "desktop" })} {
      height: calc(100vh - ${theme.header.spacer("desktop")}px);
    }

    ${mq("widescreen-sm")} {
      padding: ${theme.baseSpacing(2)};
    }
  }

  .swiper-pagination-bullets {
    bottom: ${theme.baseSpacing()};
  }
`

export const title = theme => css`
  display: flex;
  max-width: ${theme.maxWidth}px;
  transition: transform 0.6s ease-in-out, opacity 0.3s;
  transition-delay: 0.4s;
  width: 100%;

  ${mq("tablet-sm")} {
    width: 90%;
  }

  h1 {
    ${theme.heading};
    background-color: #1c1c1c;
    color: #fff;
    font-size: clamp(20px, 6.25vw, ${theme.h1.fontSize});
    margin: 0;
    opacity: 0;
    padding: ${theme.baseSpacing()};
    transition: opacity 0.6s ease-in-out, transform 0.4s ease-in-out;
    transition-delay: 0.4s;
  }

  span {
    display: block;
    transform: translateX(10px);
    transition: transform 0.4s ease-in-out;
    transition-delay: 0.6s;
  }

  .swiper-slide-active & {
    h1 {
      opacity: 1;
    }
    span {
      transform: none;
    }
  }
`
