import isURLProtocol from "../isURLProtocol/isURLProtocol"

const isInternalLink = url => {
  if (typeof window === "undefined") return false

  const host = window ? window.location.host : ""
  const parser = document.createElement("a")
  parser.href = url

  return isURLProtocol(url, "http") && host === parser.host
}

export default isInternalLink
