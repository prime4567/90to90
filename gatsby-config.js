module.exports = {
  siteMetadata: {
    siteUrl: "https://90to90.benny.id",
    title: "90to90",
    description: "90to90 adalah catatan perubahan gaya hidup untuk kualitas hidup yang lebih sehat, bahagia secara fisik, mental dan lebih ramah lingkungan",
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md-pages`,
        path: `${__dirname}/src/md-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [ 
          "G-FR6T2QZ18Q"
        ],

        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },

        pluginConfig: {
          // Setting this parameter is also optional
          respectDNT: true,
        },
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap",
      }
    }
  ],
};
