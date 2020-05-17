import { graphql, useStaticQuery } from "gatsby"

const useMenuJson = () => {
  return useStaticQuery(graphql`
    query MenuQuery {
      allMenuContactJson {
        nodes {
          cta
          graphic
          href
          title
        }
      }
      allMenuMainJson {
        nodes {
          cta
          href
          title
        }
      }
      allMenuSocialJson {
        nodes {
          graphic
          href
          title
        }
      }
    }
  `)
}

export default useMenuJson
