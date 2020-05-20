import { graphql, useStaticQuery } from "gatsby"

const useGooglePlacesData = () => {
  return useStaticQuery(graphql`
    query GooglePlacesQuery {
      allGooglePlacesPlace {
        edges {
          node {
            formatted_address
            opening_hours {
              periods {
                open {
                  day
                  time
                }
                close {
                  time
                  day
                }
              }
              weekday_text
            }
          }
        }
      }
      allGooglePlacesReview(filter: { rating: { gte: 4 }, text: { ne: "" } }) {
        edges {
          node {
            author_name
            author_url
            rating
            text
          }
        }
      }
    }
  `)
}

export default useGooglePlacesData
