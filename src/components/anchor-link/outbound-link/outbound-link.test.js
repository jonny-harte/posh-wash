import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import OutboundLink from "./outbound-link.component"

afterEach(cleanup)

const clickEvent = jest.fn()
const title = "Some Title"
const href = "https://www.bbc.co.uk/this should encode correctly"

describe("OutboundLink Component", () => {
  it("should render correctly", () => {
    const { asFragment } = render(
      <OutboundLink isBrowser title={title} href={href}>
        Test
      </OutboundLink>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("should render without target and rel attributes if href is not http", () => {
    const { asFragment } = render(
      <OutboundLink isBrowser title={title} href="mailto:name@email.com">
        Test
      </OutboundLink>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without rel attributes if target is not "_blank"', () => {
    const { asFragment } = render(
      <OutboundLink isBrowser target="_self" title={title} href={href}>
        Test
      </OutboundLink>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("should render with a clickEvent", () => {
    const { asFragment } = render(
      <OutboundLink clickEvent={clickEvent} isBrowser title={title} href={href}>
        Test
      </OutboundLink>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("should trigger the click event correctly", () => {
    global.encodeURI = jest.fn()

    const { getByText } = render(
      <OutboundLink clickEvent={clickEvent} isBrowser title={title} href={href}>
        Click Me
      </OutboundLink>
    )

    fireEvent.click(getByText("Click Me"))

    expect(clickEvent).toHaveBeenCalled()
  })
})
