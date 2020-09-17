import React from "react"
import styles from "./styles/index.module.css"
import { withPrefix } from "gatsby"
import { useStaticQuery, graphql, Link } from "gatsby"

let Listings = () => {
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
  console.log(data.allDataJson.nodes)
  let listings = data.allDataJson.nodes
  return (
    <div id={styles.listings}>
      {listings.map ( x => (
        <div className={styles.listing}>
          <Link to={x.slug} key={x.slug} className={styles.listingLink}>
            {<img className={styles.thumbnail} src={withPrefix(x.images[0].src)} alt={x.alt} />}
            <h3 className={styles.listingTitle}>{x.title} {x.price}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}


class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1 id={styles.header}>My Stuff For Sale</h1>
        <Listings />
      </div>
      
    )
  }
}

export default Index