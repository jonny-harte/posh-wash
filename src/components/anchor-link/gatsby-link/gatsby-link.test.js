import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import GatsbyLink from "./gatsby-link.component"

afterEach(cleanup)

const clickEvent = jest.fn()
const title = "Some Title"
const href = "/this should encode correctly"

describe("GatsbyLink Component", () => {
  it("should render correctly", () => {
    const { asFragment } = render(
      <GatsbyLink isBrowser title={title} href={href}>
        Test
      </GatsbyLink>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("should render with a clickEvent", () => {
    const { asFragment } = render(
      <GatsbyLink clickEvent={clickEvent} isBrowser title={title} href={href}>
        Test
      </GatsbyLink>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("should trigger the click event correctly", () => {
    global.encodeURI = jest.fn()

    const { getByText } = render(
      <GatsbyLink clickEvent={clickEvent} isBrowser title={title} href={href}>
        Click Me
      </GatsbyLink>
    )

    fireEvent.click(getByText("Click Me"))

    expect(clickEvent).toHaveBeenCalled()
  })
})
