// TODO: Add Header hover styling.
import { css } from "@emotion/core"
import { mediaQuery as mq } from "../../styles"

export { default as menuContact } from "./menu-contact.styles"
export { default as menuMain } from "./menu-main.styles"

export const header = theme => css`
  ${theme.heading};
  background-color: #000;
  border-bottom: ${theme.header.borderWidth}px solid #fff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  height: ${theme.header.height.mobile}px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 50;

  ${mq("tablet-sm")} {
    height: ${theme.header.height.tablet}px;
  }
  ${mq("desktop")} {
    height: ${theme.header.height.desktop}px;
    padding: 0 ${theme.baseSpacing()};
  }
  ${mq("widescreen-sm")} {
    padding: 0 ${theme.baseSpacing(2)};
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export const logo = theme => css`
  ${mq("desktop", true)} {
    align-items: flex-end;
    display: flex;
    padding: 0 ${theme.baseSpacing()};
  }

  ${mq("desktop")} {
    align-self: flex-end;
    line-height: 0;
  }

  svg {
    width: 75px;

    ${mq("desktop")} {
      width: 90px;
    }

    * {
      fill: #fff;
    }
  }
`

export const menuOverlay = ({ isMenuOpen, theme }) => css`
  display: none;

  ${mq("desktop", true)} {
    appearance: none;
    background-color: rgba(0, 0, 0, 0.75);
    border: 0;
    bottom: 0;
    display: block;
    left: 0;
    opacity: ${isMenuOpen ? 1 : 0};
    padding: 0;
    pointer-events: ${isMenuOpen ? "auto" : "none"};
    position: fixed;
    transition: opacity 0.3s;
    transition-delay: ${isMenuOpen ? "none" : ".2s"};
    top: ${theme.header.spacer("tablet")}px;
    width: 100%;
    z-index: -1;
  }

  &:focus {
    outline: none;
  }
`

export const menuToggle = theme => css`
  padding: 0 calc(${theme.baseSpacing()} - 8px);
  ${mq("desktop")} {
    display: none;
  }
`
export const nav = ({ isMenuOpen, theme }) => css`
  ${mq("desktop", true)} {
    background-color: #000;
    border-left: 1px solid #fff;
    bottom: 0;
    display: flex;
    flex-direction: column;
    left: 55%;
    overflow-y: scroll;
    position: fixed;
    right: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${isMenuOpen ? "none" : "translateX(100%)"};
    top: ${theme.header.spacer("tablet")}px;
  }
  ${mq("tablet-md", true)} {
    left: 40%;
  }
  ${mq("tablet-sm", true)} {
    left: -1px;
    top: ${theme.header.spacer("mobile")}px;
  }
  ${mq("desktop")} {
    align-items: center;
    display: flex;
  }
`
