import { css } from "@emotion/core"
import { mediaQuery as mq } from "../../styles"

const menuMain = css`
  ${mq("desktop", true)} {
    align-items: center;
    display: flex;
    flex: 1;
    width: 100%;
  }
  ${mq("desktop")} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  ul {
    ${mq("desktop", true)} {
      width: 100%;
    }
    ${mq("desktop")} {
      display: flex;
    }
  }

  li {
    &:not(:first-of-type) {
      ${mq("desktop")} {
        margin-left: 20px;
      }
      ${mq("widescreen-sm")} {
        margin-left: 40px;
      }
      ${mq("widescreen-md")} {
        margin-left: 60px;
      }
    }
  }

  a {
    ${mq("desktop", true)} {
      align-items: center;
      display: flex;
      justify-content: center;
      font-size: 22px;
      height: 70px;
      text-align: center;
    }
    ${mq("desktop")} {
      font-size: 14px;
    }
    ${mq("widescreen-sm")} {
      font-size: 18px;
    }
  }
`

export default menuMain
