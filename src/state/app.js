const initialState = {
  isMenuOpen: false,
  scrollY: 0,
}

const TOGGLE_MENU = "TOGGLE_MENU"
export const toggleMenu = open => ({ type: TOGGLE_MENU, payload: open })

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TOGGLE_MENU: {
      const scrollY = payload ? window.scrollY : state.scrollY

      return { ...state, isMenuOpen: payload, scrollY }
    }
    default:
      return state
  }
}
