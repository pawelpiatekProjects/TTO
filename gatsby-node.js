/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const slugify = require(`slugify`);
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
  query queryCMSPage{
    allDatoCmsArticle {
      nodes{
        title,
        id
      }
    }
   }
  `).then(result => {
    console.log(result);
    // Create blog post pages.
    result.data.allDatoCmsArticle.nodes.forEach(edge => {
      const slugifiedTitle = slugify(edge.title,{lower: true});
      createPage({
        // Path for this page — required
        path: `blog/${slugifiedTitle}`,
        component: blogPostTemplate,
        context: {
          id: edge.id,
          slug: slugifiedTitle
        },
      })
    })
  })
}
