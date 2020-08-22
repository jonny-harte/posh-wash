import isURLProtocol from "../isURLProtocol/isURLProtocol"

// True = If no target specified & protocol is http or target is set to _blank.
const isNewTab = (target, url) => {
  return (
    (typeof target !== "string" && isURLProtocol(url, "http")) ||
    target === "_blank"
  )
}

export default isNewTab
