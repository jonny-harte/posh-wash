import isURLProtocol from "./isURLProtocol"

describe("isURLProtocol", () => {
  it("should return true if url has specified protocol", () => {
    expect(isURLProtocol("http://www.bbc.co.uk", "http")).toBeTruthy()
    expect(isURLProtocol("https://www.bbc.co.uk", "http")).toBeTruthy()
    expect(isURLProtocol("tel:+123456789", "tel")).toBeTruthy()
    expect(isURLProtocol("mailto:name@email.com", "mailto")).toBeTruthy()
  })

  it("should return false if url doesn't have specified protocol", () => {
    expect(isURLProtocol("https://www.bbc.co.uk", "mailto")).toBeFalsy()
    expect(isURLProtocol("tel:+123456789", "http")).toBeFalsy()
    expect(isURLProtocol("mailto:jon@gmail.com", "http")).toBeFalsy()
  })
})
