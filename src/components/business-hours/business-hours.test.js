import React from "react"
import { ThemeProvider } from "emotion-theming"
import { render, cleanup } from "@testing-library/react"
import { PureBusinessHours as BusinessHours } from "./business-hours.component"

import { theme } from "../../styles"

afterEach(cleanup)

const isOpen = true
const menu = [
  {
    cta: "020 7262 4050",
    graphic: "phone-alt",
    href: "tel:+442072624050",
    title: "Phone Us",
  },
  {
    cta: "info@poshwash.london",
    graphic: "envelope",
    href: "mailto:info@poshwash.london?subject=Posh Wash Enquiry",
    title: "Email Us",
  },
]
const weekdayText = ["monday"]
const today = weekdayText[0]

describe("BusinessHours component", () => {
  it("should render correctly in the browser", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <BusinessHours
          isOpen={isOpen}
          menu={menu}
          weekdayText={weekdayText}
          today={today}
        />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
