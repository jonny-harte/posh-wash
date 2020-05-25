import { graphql } from "gatsby"

export const fluidImageFragment = graphql`
  fragment fluidImageFragment on File {
    childImageSharp {
      fluid(maxWidth: 5120) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export default fluidImageFragment
