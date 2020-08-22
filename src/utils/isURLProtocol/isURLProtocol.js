const isURLProtocol = (url, protocol) => {
  if (typeof document === "undefined") return false

  const parser = document.createElement("a")
  parser.href = url

  return parser.protocol.includes(protocol)
}

export default isURLProtocol
