import Shevy from "shevyjs"

const shevy = new Shevy({ proximity: true })

const theme = {
  ...shevy,
  breakpoints: {
    "mobile-md": 360,
    "mobile-lg": 480,
    "tablet-sm": 600,
    "tablet-md": 800,
    desktop: 1025,
    "widescreen-sm": 1366,
    "widescreen-md": 1440,
    "widescreen-lg": 1600,
    hd: 1920,
    "ultra-hd": 3840,
    "4k": 4096,
    "retina-5k": 5120,
  },
  fontFamily: {
    heading: "Orbitron, sans-serif",
    body: "Montserrat, sans-serif",
  },
  header: {
    borderWidth: 2,
    height: {
      mobile: 50,
      tablet: 50,
      desktop: 60,
    },
    spacer(breakpoint) {
      return this.height[breakpoint]
    },
  },
  heading: {
    get fontFamily() {
      return theme.fontFamily.heading
    },
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  maxWidth: 1300,
}

export default theme
