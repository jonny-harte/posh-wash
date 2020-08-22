import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import Anchor from "./anchor.component"

afterEach(cleanup)

const clickEvent = jest.fn()
const title = "Some Title"
const href = "https://www.bbc.co.uk/this should encode correctly"

describe("Anchor Component", () => {
  it("should render correctly", () => {
    const { asFragment } = render(
      <Anchor isBrowser title={title} href={href}>
        Test
      </Anchor>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("should render without target & rel attributes if href is not http", () => {
    const { asFragment } = render(
      <Anchor isBrowser title={title} href="mailto:name@email.com">
        Test
      </Anchor>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without rel attributes if target is not "_blank"', () => {
    const { asFragment } = render(
      <Anchor isBrowser target="_self" title={title} href={href}>
        Test
      </Anchor>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("should render with a clickEvent", () => {
    const { asFragment } = render(
      <Anchor clickEvent={clickEvent} isBrowser title={title} href={href}>
        Test
      </Anchor>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("should trigger the click event correctly", () => {
    global.encodeURI = jest.fn()

    const { getByText } = render(
      <Anchor clickEvent={clickEvent} isBrowser title={title} href={href}>
        Click Me
      </Anchor>
    )

    fireEvent.click(getByText("Click Me"))

    expect(clickEvent).toHaveBeenCalled()
  })
})
