import React, { useState } from "react"
import { graphql } from "gatsby";
import styles from "./listing.module.css"

export default ({ data }) => {
  const images = data.dataJson.images,
        numImages = images.length
  let imageIndex = 0
  const [image, setImage] = useState(images[imageIndex])
  
  function updateMainImage(e) {
    let index = Number(e.target.dataset.imgIndex)
    setImage(images[index])
  }
  return (
    <div>
      {/* <h1>{data.dataJson.title}</h1> */}
      <div className={styles.container}>
        <h1>{data.dataJson.title} - {data.dataJson.price}</h1>
        <img className={styles.bigImage} src={image.src} alt={image.alt}></img>
        <div id={styles.thumbnailContainer}>
          {images.map( (x, i) => (
            <div className={styles.thumbnailDiv} key={`image${i}`}>
              <img className={styles.thumbnail} src={x.src} alt={x.alt} data-img-index={i} onClick={updateMainImage} onMouseEnter={updateMainImage}></img>
            </div>
          ))}
        </div>
          <p id={styles.description}>{data.dataJson.description}</p>
      </div>
    </div>
  )
}

export const query = graphql`
  query ($slug: String!) {
    dataJson(slug: {eq: $slug}) {
      description
      images {
        alt
        src
      }
      price
      title
      slug
    }
  }
`