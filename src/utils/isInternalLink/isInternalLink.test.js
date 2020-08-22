import isInternalLink from "./isInternalLink"

describe("isInternalLink", () => {
  it("should return true if url is internal", () => {
    expect(isInternalLink("/about")).toBeTruthy()
    expect(isInternalLink("http://localhost/about")).toBeTruthy()
  })

  it("should return false if url is external", () => {
    expect(isInternalLink("http://www.bbc.co.uk")).toBeFalsy()
    expect(isInternalLink("tel:+123456789")).toBeFalsy()
    expect(isInternalLink("mailto:jon@gmail.com")).toBeFalsy()
  })
})
