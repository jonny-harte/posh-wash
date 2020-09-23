import { camelCase } from "change-case"

const initialState = {
  botField: "",
  email: "",
  isMenuOpen: false,
  message: "",
  name: "",
  notification: "",
  route: "",
  scrollY: 0,
}

const TOGGLE_MENU = "TOGGLE_MENU"
export const toggleMenu = isOpen => ({ type: TOGGLE_MENU, payload: isOpen })

const UPDATE_NOTIFICATION = "UPDATE_NOTIFICATION"
export const updateNotification = notifcation => ({
  type: UPDATE_NOTIFICATION,
  payload: notifcation,
})

const UPDATE_ROUTE = "UPDATE_ROUTE"
export const updateRoute = path => ({ type: UPDATE_ROUTE, payload: path })

const UPDATE_FORM = "UPDATE_FORM"
export const updateForm = input => ({ type: UPDATE_FORM, payload: input })

const CLEAR_FORM = "CLEAR_FORM"
export const clearForm = () => ({ type: CLEAR_FORM, payload: null })

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case CLEAR_FORM: {
      return { ...state, name: "", email: "", message: "", notification: "" }
    }
    case TOGGLE_MENU: {
      const scrollY = payload ? window.scrollY : state.scrollY
      // console.log(payload)
      return { ...state, isMenuOpen: payload, scrollY }
    }
    case UPDATE_FORM: {
      return { ...state, [camelCase(payload.name)]: payload.value }
    }
    case UPDATE_NOTIFICATION: {
      return { ...state, notification: payload }
    }
    case UPDATE_ROUTE: {
      return { ...state, route: payload }
    }
    default:
      return state
  }
}
