import getMenuItemByURL from "./getMenuItemByURL"

const menu = [
  {
    href: "tel:+442072624050",
    title: "Menu Title",
  },
]

describe("getMenuItemByURL", () => {
  it("should return a menu item from a menu array that contains 'tel' in the URL", () => {
    const telLink = getMenuItemByURL(menu, "tel")
    expect(telLink.title).toBe("Menu Title")
  })
})
