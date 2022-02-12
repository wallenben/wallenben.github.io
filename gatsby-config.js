module.exports = {
  siteMetadata: {
    siteUrl: "https://www.benwallen.dev/",
    title: "benwallen.dev/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blogimages`,
          path: `${__dirname}/blog/images`,
        },
    },
  ],
};
