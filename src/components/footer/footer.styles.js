import { css } from "@emotion/core"
import Shevy from "shevyjs"

import mq from "../../styles/media-query"

const { baseSpacing } = new Shevy({ proximity: true })

export const address = css`
  font-size: 12px;
  font-style: normal;
  margin-top: 10px;
  text-align: center;

  ${mq("mobile-lg")} {
    text-align: right;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export const copyright = css`
  font-size: 12px;
  margin-bottom: 0;
  margin-top: 10px;
  text-align: center;
`

export const footer = theme => css`
  ${theme.heading};
  background-color: #000;
  color: #fff;
  padding: ${baseSpacing()};

  ${mq("mobile-lg")} {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  ${mq("tablet-sm")} {
    padding: ${baseSpacing()} ${baseSpacing(2)};
  }

  > div:not(:first-child) {
    ${mq("mobile-lg", true)} {
      margin-top: ${baseSpacing()};
    }
  }

  svg {
    display: block;
  }
`

export const logo = css`
  display: block;
  width: 130px;

  ${mq("mobile-lg", true)} {
    margin-left: auto;
    margin-right: auto;
  }

  * {
    fill: #fff;
  }
`
export const menu = css`
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    ${mq("mobile-lg")} {
      justify-content: flex-end;
    }
  }

  li {
    margin-bottom: 0;
    &:not(:first-of-type) {
      margin-left: 20px;

      ${mq("mobile-lg")} {
        margin-left: 15px;
      }
      ${mq("desktop")} {
        margin-left: 10px;
      }
    }
  }

  a {
    background-color: #fff;
    display: block;
    height: 40px;
    padding: 5px;
    width: 40px;
    ${mq("mobile-lg")} {
      height: 30px;
      padding: 3px;
      width: 30px;
    }
    ${mq("desktop")} {
      height: 20px;
      width: 20px;
    }
  }
`
