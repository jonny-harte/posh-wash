import React from "react"
import { ThemeProvider } from "emotion-theming"
import { render, cleanup } from "@testing-library/react"
import { PureHeroSlider as HeroSlider } from "./hero-slider.component"

import { theme } from "../../styles"

afterEach(cleanup)

const images = [
  {
    node: {
      name: "wheel-customization",
      childImageSharp: {
        fluid: {
          base64:
            "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAEEAgMF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAeZswsDUQizBMCP/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIRAxIiMf/aAAgBAQABBQLxdauNifTyRY5GqKs1R//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABsQAAIDAAMAAAAAAAAAAAAAAAARARAhAkFR/9oACAEBAAY/AlBE+jG8Hx6rDa//xAAdEAACAwACAwAAAAAAAAAAAAABEQAhMRBBUXGB/9oACAEBAAE/IXUfYOmJLPMASU4ZAXsVkQBdglcwirYeodCJPB//2gAMAwEAAgADAAAAEEQwPf/EABkRAAMAAwAAAAAAAAAAAAAAAAABERAhMf/aAAgBAwEBPxDdiHKV8x//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAbEAEBAAMBAQEAAAAAAAAAAAABEQAhMUFhwf/aAAgBAQABPxBYLFO8UhUBBQOEgSbJi0SB2SfPdZvBIHr1pJz8xqJYeED5myiyKu5TqiW9Mh5n/9k=",
          aspectRatio: 1,
          src:
            "/static/c71fc18afbb65816ed6e5a35dbc41850/f422e/wheel-customization.jpg",
          srcSet:
            "/static/c71fc18afbb65816ed6e5a35dbc41850/f422e/wheel-customization.jpg 640w",
          srcWebp:
            "/static/c71fc18afbb65816ed6e5a35dbc41850/991d2/wheel-customization.webp",
          srcSetWebp:
            "/static/c71fc18afbb65816ed6e5a35dbc41850/991d2/wheel-customization.webp 640w",
          sizes: "(max-width: 640px) 100vw, 640px",
        },
      },
    },
  },
  {
    node: {
      name: "car-valeting",
      childImageSharp: {
        fluid: {
          base64:
            "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAGJJR2Chf/EABsQAAICAwEAAAAAAAAAAAAAAAECAAMEERIT/9oACAEBAAEFAvd+jlNBlvGqOxWBFr6H/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bp//EABoQAAMAAwEAAAAAAAAAAAAAAAABIRARIjH/2gAIAQEABj8CXUEm5j0tI9H/xAAbEAADAQEAAwAAAAAAAAAAAAABESEAMVGBof/aAAgBAQABPyEyqDgpOBQgIlcQGL6W5PzrhYVinjf/2gAMAwEAAgADAAAAEIAv/8QAFhEAAwAAAAAAAAAAAAAAAAAAEBEh/9oACAEDAQE/EFR//8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAB/9oACAECAQE/EATt/8QAGRABAQEBAQEAAAAAAAAAAAAAAREAITFR/9oACAEBAAE/EBWlx7j44IQeFDXA2+xj0mMnfBhamd7gsrwjf//Z",
          aspectRatio: 1.4269788182831662,
          src:
            "/static/9d1f2229649d73040d156c0f68b3f1c3/69755/car-valeting.jpg",
          srcSet:
            "/static/9d1f2229649d73040d156c0f68b3f1c3/ec6c5/car-valeting.jpg 1280w,\n/static/9d1f2229649d73040d156c0f68b3f1c3/69755/car-valeting.jpg 2048w",
          srcWebp:
            "/static/9d1f2229649d73040d156c0f68b3f1c3/96ec1/car-valeting.webp",
          srcSetWebp:
            "/static/9d1f2229649d73040d156c0f68b3f1c3/135cd/car-valeting.webp 1280w,\n/static/9d1f2229649d73040d156c0f68b3f1c3/96ec1/car-valeting.webp 2048w",
          sizes: "(max-width: 2048px) 100vw, 2048px",
        },
      },
    },
  },
  {
    node: {
      name: "wheel-refurbishment",
      childImageSharp: {
        fluid: {
          base64:
            "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAc8riHEGv//EABkQAAIDAQAAAAAAAAAAAAAAAAERAAIQE//aAAgBAQABBQJgk3deLxRz/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERIRAyYTH/2gAIAQEABj8C2a6bTwqyJePWf//EABoQAQACAwEAAAAAAAAAAAAAAAEAESExQXH/2gAIAQEAAT8hbexilyYFoWL5IE0FEODLbKhTh5P/2gAMAwEAAgADAAAAEIwP/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQMBAT8QgL//xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAgEBPxBX/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFBUbH/2gAIAQEAAT8QrIQQlFXHtTa6q6sfRemA747Mp8whscTpFw0wLYJxFKGnRZ9n/9k=",
          aspectRatio: 1.420643729189789,
          src:
            "/static/b99375738a8a40906d8e76d451e4461e/69755/wheel-refurbishment.jpg",
          srcSet:
            "/static/b99375738a8a40906d8e76d451e4461e/ec6c5/wheel-refurbishment.jpg 1280w,\n/static/b99375738a8a40906d8e76d451e4461e/69755/wheel-refurbishment.jpg 2048w",
          srcWebp:
            "/static/b99375738a8a40906d8e76d451e4461e/96ec1/wheel-refurbishment.webp",
          srcSetWebp:
            "/static/b99375738a8a40906d8e76d451e4461e/135cd/wheel-refurbishment.webp 1280w,\n/static/b99375738a8a40906d8e76d451e4461e/96ec1/wheel-refurbishment.webp 2048w",
          sizes: "(max-width: 2048px) 100vw, 2048px",
        },
      },
    },
  },
  {
    node: {
      name: "car-wash",
      childImageSharp: {
        fluid: {
          base64:
            "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIDBAUG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAWiooXRmUD//xAAaEAADAQADAAAAAAAAAAAAAAABAgMAFCEi/9oACAEBAAEFAqWYDkVVg/VG3jAM4//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABwQAAMAAQUAAAAAAAAAAAAAAAABESECEEFhcf/aAAgBAQAGPwJR5FdSa62nBiv0p//EABwQAAICAgMAAAAAAAAAAAAAAAERACEQMVFhcf/aAAgBAQABPyGofsca8KQcQSZe0YJ/JLh3xU//2gAMAwEAAgADAAAAEL8v/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QJ//EAB0QAQACAgIDAAAAAAAAAAAAAAERIQAxQVFxgZH/2gAIAQEAAT8QRRa+DUWZQDMIjXzGBbJ3OJaQUL13k1tTYYB6WcInzKLFa4z/2Q==",
          aspectRatio: 1.263573543928924,
          src: "/static/d5f05eb7f5e8ca7c3e7bf22111679131/69755/car-wash.jpg",
          srcSet:
            "/static/d5f05eb7f5e8ca7c3e7bf22111679131/ec6c5/car-wash.jpg 1280w,\n/static/d5f05eb7f5e8ca7c3e7bf22111679131/69755/car-wash.jpg 2048w",
          srcWebp:
            "/static/d5f05eb7f5e8ca7c3e7bf22111679131/96ec1/car-wash.webp",
          srcSetWebp:
            "/static/d5f05eb7f5e8ca7c3e7bf22111679131/135cd/car-wash.webp 1280w,\n/static/d5f05eb7f5e8ca7c3e7bf22111679131/96ec1/car-wash.webp 2048w",
          sizes: "(max-width: 2048px) 100vw, 2048px",
        },
      },
    },
  },
]
const slides = [
  {
    heading: "Hand<br /> Car Wash",
    imageName: "car-wash",
  },
  {
    heading: "Wheel<br /> Refurbishment",
    imageName: "wheel-refurbishment",
  },
  {
    heading: "Car<br /> Valeting",
    imageName: "car-valeting",
  },
  {
    heading: "Wheel<br /> Customization",
    imageName: "wheel-customization",
  },
]

describe("Hero Slider", () => {
  it("should render correctly in the browser", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <HeroSlider images={images} slides={slides} />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
