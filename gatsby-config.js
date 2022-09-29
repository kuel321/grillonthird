module.exports = {
  siteMetadata: {
    title: `The Grill On Third`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://thegrill.bulldog.rocks/graphql"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "334917002"
    }
  }]
};