import { css } from "@emotion/core"
import { mediaQuery as mq } from "../../styles"

export const locationCard = theme => css`
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 0;
  }

  p {
    &:first-of-type {
      margin-top: 0;
    }
  }

  .button {
    margin-top: ${theme.baseSpacing()};

    ${mq("tablet-sm")} {
      align-self: flex-start;
    }
  }
`

export const description = () => css`
  flex: 1;
`
