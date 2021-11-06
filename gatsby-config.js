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
    `gatsby-plugin-react-helmet`
  ],
};
