// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Spin as Hamburger } from "hamburger-react"

/** @jsx jsx */
import { jsx } from "@emotion/core"

import { toggleMenu as toggleMenuAction } from "../../state/app"

import * as styles from "./header.styles"

const MenuToggle = ({ isMenuOpen, scrollY, toggleMenu }) => {
  useEffect(() => {
    if (!isMenuOpen) {
      window.scroll(0, scrollY)
    }
  }, [isMenuOpen, scrollY])

  return (
    <>
      <div css={styles.menuToggle}>
        <Hamburger
          color="#fff"
          distance="sm"
          duration={0.3}
          label="Menu Toggle"
          toggle={() => toggleMenu(!isMenuOpen)}
          toggled={isMenuOpen}
        />
      </div>
      <button
        aria-hidden={!isMenuOpen}
        aria-label="Close Menu"
        type="button"
        css={theme => styles.menuOverlay({ theme, isMenuOpen })}
        onClick={() => toggleMenu(!isMenuOpen)}
      />
    </>
  )
}

MenuToggle.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  scrollY: PropTypes.number.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export const mapStateToProps = state => {
  const { app } = state
  return { isMenuOpen: app.isMenuOpen, scrollY: app.scrollY }
}

export const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: isOpen => dispatch(toggleMenuAction(isOpen)),
  }
}

// eslint-disable-next-line react-redux/prefer-separate-component-file
export default connect(mapStateToProps, mapDispatchToProps)(MenuToggle)
