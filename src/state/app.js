const initialState = {
  isMenuOpen: false,
  route: "",
  scrollY: 0,
}

const TOGGLE_MENU = "TOGGLE_MENU"
export const toggleMenu = isOpen => ({ type: TOGGLE_MENU, payload: isOpen })

const UPDATE_ROUTE = "UPDATE_ROUTE"
export const updateRoute = path => ({ type: UPDATE_ROUTE, payload: path })

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TOGGLE_MENU: {
      const scrollY = payload ? window.scrollY : state.scrollY
      // console.log(payload)
      return { ...state, isMenuOpen: payload, scrollY }
    }
    case UPDATE_ROUTE: {
      return { ...state, route: payload }
    }
    default:
      return state
  }
}
