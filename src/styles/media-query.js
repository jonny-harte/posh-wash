/**
 * TODO: Convert to NPM package.
 * @desc
 * @if string assume min width
 * @if object use key, value provided with and operator
 *
 * @param object/string query
 * @param bool/string max-width - only used if query is a string.
 *
 * @return string - @media ${queryString}

 * @examples
 * min-width: mediaQuery("mobile-lg");
 * max-width: mediaQuery("mobile-lg", true);
 * min and max: mediaQuery("mobile-md", "desktop");
 * custom query: mediaQuery({ "min-width": "mobile-lg", "max-width": "mobile-lg", orientation: "portrait" });
 */

import theme from "./theme"

const { breakpoints } = theme

const isMaxWidthQuery = max => {
  return typeof max === "boolean" && max
}

const getBreakpointValue = (name, maxWidth = false) => {
  if (Object.prototype.hasOwnProperty.call(breakpoints, name)) {
    return `${
      isMaxWidthQuery(maxWidth) ? breakpoints[name] - 0.02 : breakpoints[name]
    }px`
  }
  return name
}

const addFeature = (query, maxWidth = false) => {
  const key = `${isMaxWidthQuery(maxWidth) ? "max" : "min"}-width`
  const value = getBreakpointValue(query, maxWidth)

  return {
    [key]: value,
  }
}

const mediaQuery = (query, maxWidth = false) => {
  let features = {}

  if (typeof query === "object") {
    features = { ...query }
  }

  if (typeof query === "string") {
    if (typeof maxWidth === "boolean") {
      features = addFeature(query, maxWidth)
    }

    if (typeof maxWidth === "string") {
      features = addFeature(query, false)
      Object.assign(features, addFeature(maxWidth, true))
    }
  }

  const queryString = Object.entries(features).reduce(
    (accumulator, [name, value], i) => {
      const string = `(${name}: ${getBreakpointValue(value)})`

      if (i === 0) {
        return string
      }

      return `${accumulator} and ${string}`
    },
    ""
  )

  return `@media ${queryString}`
}

export default mediaQuery
