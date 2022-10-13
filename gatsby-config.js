module.exports = {
  siteMetadata: {
    title: `The Grill On Third`,
    siteUrl: `https://thegrill.bulldog.rocks`
  },
  plugins: [{
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `The Grill On Third`,
      short_name: `=The Grill`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#1abc9c`,
      display: `minimal-ui`,
      icon: `src/images/grill.png`,
    },
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://thegrill.bulldog.rocks/admin/graphql"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "334917002"
    }
  }]
};