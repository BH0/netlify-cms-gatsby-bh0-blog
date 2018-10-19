module.exports = {
  siteMetadata: {
    title: "BH0's Blog"
  },
  pathPrefix: `/bh0-gatsby-blog`, 
  plugins: [
    'gatsby-plugin-react-helmet', 
    { 
      resolve: `gatsby-source-filesystem`, 
      options: { 
        path: `${__dirname}/src/pages`, 
        name: `pages` 
      }
    }, 
    { 
      resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                classPrefix: "language-",
                inlineCodeMarker: null,
                // This lets you set up language aliases.  For example,
                // setting this to '{ sh: "bash" }' will let you use
                // the language "sh" which will highlight using the
                // bash highlighter.
                aliases: {},
              },
            },
          ],
      }, 
    } 
  ],
} 


