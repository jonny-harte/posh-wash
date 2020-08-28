import { graphql, useStaticQuery } from "gatsby"

const useInstagramData = () => {
  return useStaticQuery(graphql`
    query InstagramQuery {
      allInstaNode(
        filter: { mediaType: { eq: "IMAGE" } }
        limit: 1
        sort: { fields: timestamp, order: DESC }
      ) {
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
