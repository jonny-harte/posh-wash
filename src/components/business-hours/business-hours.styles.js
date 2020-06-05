import { css } from "@emotion/core"
import { mediaQuery as mq } from "../../styles"

export const businessHours = css`
  a {
    font-weight: bold;
  }
`

export const dayOfWeek = isToday => css`
  display: table-row;
  font-weight: ${isToday && "bold"};
  opacity: ${isToday ? 1 : 0.8};

  dt {
    display: table-cell;
    padding-right: 10px;

    ${mq("tablet-md")} {
      padding-right: 20px;
    }
  }

  dd {
    display: table-cell;
  }
`
