import React from "react"
import styles from "./styles/index.module.css"
import { useStaticQuery, graphql, Link, withPrefix } from "gatsby"
import { Helmet } from "react-helmet"

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


class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Stuff For Sale</title>
          <meta name="description" content="My stuff for sale. "  />
          <meta name="keywords" content="stuff, sale,, sell, buy, deals" />
        </Helmet>
        <h1 id={styles.header}>My Stuff For Sale</h1>
        <Listings />
      </div>
    )
  }
}

export default Index