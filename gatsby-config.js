module.exports = {
  siteMetadata: {
    title: `Korhan Eser`,
    author: {
      name: `Korhan Eser`,
      summary: `Portfolio of a digital product designer.`,
    },
    description: `This is the meta data description`,
    siteUrl: `https://www.korhaneser.com`,
    social: {
      twitter: `korhan`,
    },
  },
  plugins: [
     `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `8739417`,
      },
    },
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        access_token: '80e2d05d8ce920e5c6ab743c22499080d51a19c428666c5900dc54baf7d16ad6'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/stories`,
        name: `story`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              showCaptions: true,
              linkImagesToOriginal: false,
              maxWidth: 1200,
              quality: 100,
              wrapperStyle: `margin: 4rem 0` // 4 iyi aq degisitirip durma
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {
              margin: 100,
              background: "#323232",
            }
          },
          `gatsby-remark-line-breaks`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-171067569-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Korhan Eser Portfolio`,
        short_name: `KSE`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/korhan-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}