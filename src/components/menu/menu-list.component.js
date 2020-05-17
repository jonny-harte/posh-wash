import PropTypes from "prop-types"
import { v4 as uuidv4 } from "uuid"
import Icon from "react-inlinesvg"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import MenuItem from "./menu-item.component"

const MenuList = ({ className, clickEvent, items, label }) => (
  <nav aria-label={label} className={className} role="navigation">
    <ul>
      {items.map(item => {
        return (
          <MenuItem
            key={uuidv4()}
            clickEvent={clickEvent}
            href={item.href}
            title={item.title}
            target={item.target}
          >
            {Object.prototype.hasOwnProperty.call(item, "graphic") && (
              <Icon
                src={item.graphic}
                css={css`
                  height: 100%;
                  width: 100%;
                `}
              />
            )}
            {Object.prototype.hasOwnProperty.call(item, "cta") && (
              <span>{item.cta}</span>
            )}
          </MenuItem>
        )
      })}
    </ul>
  </nav>
)

MenuList.propTypes = {
  className: PropTypes.string,
  clickEvent: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
}

MenuList.defaultProps = {
  className: null,
  clickEvent: null,
}

export default MenuList
