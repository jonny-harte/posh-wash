require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Posh Wash`,
    description: `London's number one hand car wash and alloy wheel refurbishment centre.`,
    author: `Jonathan Harte`,
    siteUrl: `https://poshwash.london`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "UA-25509309-3",
        head: false,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Posh Wash`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: `./src/state/createStore`,
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
        // [optional] - if true will clean up after itself on the client, default:
        cleanupOnClient: true,
        // [optional] - name of key on `window` where serialized state will be stored, default:
        windowKey: `__PRELOADED_STATE__`,
      },
    },
    {
      resolve: `gatsby-source-google-places`,
      options: {
        placeIds: process.env.GOOGLE_PLACE_ID.split(` `),
        apiKey: process.env.GOOGLE_PLACES_KEY,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
        instagram_id: process.env.INSTAGRAM_ID,
        username: process.env.INSTAGRAM_USER_ID,
      },
    },
    {
      resolve: `gatsby-plugin-extract-schema`,
      options: {
        dest: `${__dirname}/schema.json`,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://poshwash.london`,
        sitemap: `https://poshwash.london/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
  ],
}
