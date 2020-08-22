import isNewTab from "./isNewTab"

describe("isNewTab", () => {
  it("should return true if no target supplied and URL is http", () => {
    expect(isNewTab(null, "http://www.bbc.co.uk")).toBeTruthy()
    expect(isNewTab(null, "https://www.bbc.co.uk")).toBeTruthy()
  })

  it("should return true if _blank specified in target, regardless of URL", () => {
    expect(isNewTab("_blank", "https://www.bbc.co.uk")).toBeTruthy()
    expect(isNewTab("_blank", "/")).toBeTruthy()
    expect(isNewTab("_blank", "mailto:jon@gmail.com")).toBeTruthy()
  })

  it("should return false if no target supplied and URL is not http", () => {
    expect(isNewTab(null, "mailto:jon@gmail.com")).toBeFalsy()
  })

  it("should return false if not _blank specified in target, regardless of URL", () => {
    expect(isNewTab("_self", "https://www.bbc.co.uk")).toBeFalsy()
    expect(isNewTab("_parent", "https://www.bbc.co.uk")).toBeFalsy()
    expect(isNewTab("_top", "https://www.bbc.co.uk")).toBeFalsy()
    expect(isNewTab("framename", "https://www.bbc.co.uk")).toBeFalsy()
  })
})
