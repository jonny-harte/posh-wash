import { css } from "@emotion/core"
import { mediaQuery as mq } from "../../styles"

export const header = theme => css`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: calc(50vh - ${theme.header.spacer("mobile")}px);
  padding: ${theme.baseSpacing()};
  position: relative;

  ${mq("tablet-sm")} {
    height: calc(50vh - ${theme.header.spacer("tablet")}px);
  }
  ${mq("desktop")} {
    height: calc(50vh - ${theme.header.spacer("desktop")}px);
  }

  ${mq("widescreen-sm")} {
    padding: ${theme.baseSpacing(2)};
  }
`

export const img = css`
  bottom: 0;
  left: 0;
  position: absolute !important;
  right: 0;
  top: 0;
  z-index: -1;
`

export const title = theme => css`
  display: flex;
  max-width: ${theme.maxWidth}px;
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
    padding: ${theme.baseSpacing()};
  }

  span {
    display: block;
  }
`
