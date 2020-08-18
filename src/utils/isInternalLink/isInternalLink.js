import isURLProtocol from "../isURLProtocol/isURLProtocol"

const isInternalLink = url => {
  if (typeof window === "undefined") return false

  const hostname = window ? window.location.hostname : ""
  const parser = document.createElement("a")
  parser.href = url

  return isURLProtocol(url, "http") && hostname === parser.host
}

export default isInternalLink
