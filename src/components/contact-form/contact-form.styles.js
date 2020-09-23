import { css } from "@emotion/core"
import { mediaQuery as mq } from "../../styles"

export const contactForm = css`
  position: relative;
  a {
    font-weight: bold;
  }

  .button {
    width: calc(50% - 10px);
  }
`
export const label = theme => css`
  display: block;
  span {
    ${theme.heading};
  }
`

export const input = theme => css`
  display: block;
  padding: ${theme.baseSpacing(0.5)}};
  width: 100%;
`

export const textarea = theme => css`
  display: block;
  padding: ${theme.baseSpacing(0.5)}};
  width: 100%;
`

export const controls = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
`
export const notification = theme => css`
  left: 0;
  position: absolute;
  right: 0;
  top: calc(100% + ${theme.header.borderWidth}px);

  padding: 0 ${theme.baseSpacing()};

  ${mq("widescreen-sm")} {
    padding: 0 ${theme.baseSpacing(2)};
  }

  p {
    font-size: 14px;
  }
`
