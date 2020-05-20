const initialState = {
  isMenuOpen: false,
}

const TOGGLE_MENU = "TOGGLE_MENU"
export const toggleMenu = open => ({ type: TOGGLE_MENU, payload: open })

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: payload }
    default:
      return state
  }
}
