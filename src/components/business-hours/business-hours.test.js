import React from "react"
import { ThemeProvider } from "emotion-theming"
import { render, cleanup } from "@testing-library/react"
import { PureBusinessHours as BusinessHours } from "./business-hours.component"

import { theme } from "../../styles"

afterEach(cleanup)

describe("BusinessHours component", () => {
  it("should render correctly in the browser", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <BusinessHours />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
