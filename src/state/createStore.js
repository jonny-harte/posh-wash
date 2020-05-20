import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "."

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(rootReducer, preloadedState, composeWithDevTools())
}
