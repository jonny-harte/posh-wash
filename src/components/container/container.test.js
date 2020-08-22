import React from "react"
import { ThemeProvider } from "emotion-theming"
import { render, cleanup } from "@testing-library/react"
import Container from "./container.component"

import { theme } from "../../styles"

afterEach(cleanup)

describe("Container component", () => {
  it("should render correctly in the browser", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Container columns={2}>
          <div>Column 1</div>
          <div>Column 2</div>
        </Container>
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
