import { isValidDate } from "./isGooglePlaceOpen"

describe("isValidDate", () => {
  it("should throw error if no argument supplied", () => {
    expect(() => {
      isValidDate()
    }).toThrow(Error)
  })

  it("should return false if not valid date object", () => {
    expect(isValidDate(null)).toBeFalsy()
    expect(isValidDate(false)).toBeFalsy()
    expect(isValidDate(true)).toBeFalsy()
    expect(isValidDate([])).toBeFalsy()
    expect(isValidDate({})).toBeFalsy()
    expect(isValidDate(1)).toBeFalsy()
    expect(isValidDate("this is a string")).toBeFalsy()
  })

  it("should return true if valid date object", () => {
    const date = new Date()
    expect(isValidDate(date)).toBeTruthy()
  })
})
