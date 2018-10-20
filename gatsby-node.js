/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        /*
      graphql(`
        {
            allMarkdownRemark {
            edges {
              node {
                slug
              }
            }
          }        
        }
      `)
      */
     graphql(`     
     {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              html
              id
              frontmatter {
                date
                path
                title
              }
            }
          }
        }
      }
   `).then(result => {
        if (result.errors) {
            console.log("Result error #### *");
            return Promise.reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.map(({ node }) => {
          createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              slug: node.slug
            },
          })
        })
        resolve()
      })
    })
  }

/* 
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/post.js');
      return new Promise((resolve, reject) => {
        return graphql(`
            {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                node {
                    excerpt(pruneLength: 250)
                    html
                    id
                    frontmatter {
                    date
                    path
                    title
                    }
                }
                }
            }
            }
        `).then(result => {
            if (result.errors) {
                return Promise.reject(result.errors);
            }

            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {},
            });
          });
        });
        resolve();
    });
};
*/

 /*
const path = require('path'); 

 
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve('src/templates/post.js');
    return new Promise((resolve, reject) => {  
        return graphql(`{
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter__date] }
                limit: 1000
            ) {
                edges {
                    node { 
                        excerpt(pruneLength: 250)
                        html
                        id
                        frontmatter {
                            date
                            path
                            title
                        }
                    }
                }
            }
        }
        `).then(result => {
            if (result.errors) {
                return Promise.reject(result.errors);
            }
        
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {},
            });
        });
        resolve()
        });
    });
};
*/
/*
 exports.createPages = ({actions, graphql}) => { 
    const {createPage} = actions; 
    const postTemplate = path.resolve('src/templates/post.js'); 
    return graphql(`{ 
        allMarkdownRemark { 
            edges { 
                node { 
                    html
                    id
                    frontmatter { 
                        path
                        title
                    }
                }
            }
        }   
    }`).then(res => { 
        if (res.errors) { 
            return Promise.reject(res.errors); 
        } 

        res.data.allMarkdownRemark.edges.forEach(({node}) => { 
            createPage({
                path: node.frontmatter.path, 
                component: postTemplate 
            }); 
        }); 
    }); 
 } 

*/
