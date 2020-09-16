const path = require(`path`)

exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allDataJson {
        edges {
          node {
            slug
            images {
              alt
              src
            }
            description
            price
            title
          }
        }
      }
    }
  `)
  
  result.data.allDataJson.edges.forEach( ({node}) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/listing.js`),
      context: {
        slug: node.slug,
      }
    })
  })
}
