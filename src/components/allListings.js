import React from "react"
import * as styles from "./styles/allListings.module.css"
import { useStaticQuery, graphql, Link, withPrefix } from "gatsby"

const AllListings = () => {
  const data = useStaticQuery(graphql`
    query SlugToQuery {
      allDataJson {
        nodes {
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
  `)
  
  let listings = data.allDataJson.nodes
  return (
    <div id={styles.listings}>
      {listings.map ( (x, i) => (
        <div className={styles.listing} key={`${x.slug}_${i}`}>
          <Link to={x.slug} key={x.slug} className={styles.listingLink}>
            {<img className={styles.thumbnail} src={withPrefix(x.images[0].src)} alt={x.images[0].alt} />}
            <h3 className={styles.listingTitle}>{x.title} {x.price}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default AllListings