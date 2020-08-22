import React from "react"
import { render, cleanup } from "@testing-library/react"
import AnchorLink from "./anchor-link.component"

afterEach(cleanup)

const title = "Some Title"
const internalLink = "/this should encode correctly"
const externalLink = "https://www.bbc.co.uk/this should encode correctly"

describe("External Link", () => {
  it("should render correctly in the browser", () => {
    const { asFragment } = render(
      <AnchorLink title={title} href={externalLink}>
        Test
      </AnchorLink>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

describe("Internal Link", () => {
  it("should render correctly in the browser", () => {
    const { asFragment } = render(
      <AnchorLink title={title} href={internalLink}>
        Test
      </AnchorLink>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
