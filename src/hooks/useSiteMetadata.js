import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)
  return siteMetadata
}

export default useSiteMetadata
