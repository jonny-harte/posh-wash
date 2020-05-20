import { css } from "@emotion/core"
import { mediaQuery as mq } from "../../styles"

const menuContact = css`
  ${mq("desktop", true)} {
    width: 100%;
  }

  ul {
    ${mq("tablet-sm", true)} {
      display: flex;
    }
  }

  li {
    font-size: 18px;
    text-align: center;

    ${mq("desktop", true)} {
      border-top: solid 1px #ffffff;
    }
    ${mq("tablet-sm", true)} {
      flex: 1;
    }
    ${mq("tablet-sm")} {
      text-align: right;
    }
    ${mq("desktop")} {
      font-size: 12px;
    }

    &:not(:first-of-type) {
      ${mq("tablet-sm", true)} {
        border-left: solid 1px #ffffff;
      }
    }
  }

  a {
    ${mq("desktop", true)} {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 79px;
    }
    ${mq("desktop")} {
      align-items: flex-end;
      display: inline-flex;
      justify-content: flex-end;
    }
  }

  span {
    ${mq("tablet-sm", true)} {
      display: none;
    }
  }

  svg {
    height: 40px;
    width: 40px;

    ${mq("tablet-sm")} {
      display: none;
    }

    * {
      fill: #fff;
    }
  }
`

export default menuContact
