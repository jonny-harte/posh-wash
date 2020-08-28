import { graphql, useStaticQuery } from "gatsby"

const useInstagramData = () => {
  return useStaticQuery(graphql`
    query InstagramQuery {
      allInstaNode(limit: 12, filter: { mediaType: { eq: "GraphImage" } }) {
        edges {
          node {
            id
            caption
            likes
            localFile {
              childImageSharp {
                fluid(maxWidth: 5120) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
}

export default useInstagramData
