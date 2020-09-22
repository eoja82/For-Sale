import React, { useState, useRef } from "react"
import { graphql, withPrefix, Link } from "gatsby"
import styles from "./listing.module.css"
import Contact from "../components/contact.js"

let imageIndex = 0

export default ({ data }) => {
  const images = data.dataJson.images,
        numImages = images.length,
        imgModal = useRef(null),
        [image, setImage] = useState(images[imageIndex]),
        [imgNumber, setImageNumber] = useState(imageIndex + 1)
  
  function openImgModal() {
    imgModal.current.style.display = "block"
  }
  function closeImgModal() {
    imgModal.current.style.display = "none"
  }
  function previousSlide() {
    imageIndex--
    if (imageIndex < 0) imageIndex = numImages - 1
    setImage(images[imageIndex])
    setImageNumber(imageIndex + 1)
  }
  function nextSlide() {
    imageIndex++
    if (imageIndex > numImages - 1) imageIndex = 0
    setImage(images[imageIndex])
    setImageNumber(imageIndex + 1)
  }
  function updateMainImage(e) {
    imageIndex = Number(e.target.dataset.imgIndex)
    setImage(images[imageIndex])
    setImageNumber(imageIndex + 1)
  }

  return (
    <div>
      <Contact />
      <div className={styles.container}>
        <Link to="/">Home</Link>
        <h1 id={styles.title}>{data.dataJson.title} - {data.dataJson.price}</h1>
        <div id={styles.mainImageContainer}>
          <div className={styles.imgNumber}>Image {imgNumber} of {numImages}</div>
          <button className={styles.mainImageBtn} onClick={openImgModal}>
            <img className={styles.mainImage} src={withPrefix(image.src)} alt={image.alt}></img>
          </button>
          <button className={`${styles.previousImg} ${styles.mainControl}`} onClick={previousSlide}>&#10094;</button>
          <button className={`${styles.nextImage} ${styles.mainControl}`} onClick={nextSlide}>&#10095;</button>
        </div>
        <div id={styles.thumbnailContainer}>
          {images.map( (x, i) => (
            <button className={styles.thumbnailBtn} key={`image${i}`} onClick={updateMainImage} onMouseEnter={updateMainImage} data-img-index={i}>
              <img className={styles.thumbnail} src={withPrefix(x.src)} alt={x.alt} data-img-index={i}></img>
            </button>
          ))}
        </div>
        <p id={styles.description}>{data.dataJson.description}</p>
        {/* modal images */}
        <div id={styles.imgModalContainer} ref={imgModal}>
          <div className={styles.modalContent}>
            <span className={styles.closeModal} onClick={closeImgModal} onKeyDown={closeImgModal} role="button" tabIndex={0}>&times;</span>
            <div className={styles.imgNumber}>Image {imgNumber} of {numImages}</div>
            <img className={styles.modalImg} src={withPrefix(image.src)} alt={image.alt}></img>
            <button className={styles.previousImg} onClick={previousSlide}>&#10094;</button>
            <button className={styles.nextImage} onClick={nextSlide}>&#10095;</button>
          </div>
        </div>
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