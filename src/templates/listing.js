import React, { useState, useRef } from "react"
import { graphql } from "gatsby";
import styles from "./listing.module.css"

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
    console.log("pre " + imageIndex)
    imageIndex++
    console.log(imageIndex)
    if (imageIndex > numImages - 1) imageIndex = 0
    console.log("imageIndex now " + imageIndex)
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
      {/* <h1>{data.dataJson.title}</h1> */}
      <div className={styles.container}>
        <h1>{data.dataJson.title} - {data.dataJson.price}</h1>
        <img className={styles.mainImage} src={image.src} alt={image.alt} onClick={openImgModal}></img>
        <div id={styles.thumbnailContainer}>
          {images.map( (x, i) => (
            <div className={styles.thumbnailDiv} key={`image${i}`}>
              <img className={styles.thumbnail} src={x.src} alt={x.alt} data-img-index={i} onClick={updateMainImage} onMouseEnter={updateMainImage}></img>
            </div>
          ))}
        </div>
          <p id={styles.description}>{data.dataJson.description}</p>
          {/* modal images */}
          <div id={styles.imgModalContainer} ref={imgModal}>
            <span className={styles.closeModal} onClick={closeImgModal}>&times;</span>
            <div className={styles.modalContent}>
              <div className={styles.imgNumber}>
                Image {imgNumber} of {numImages}
              </div>
              <img className={styles.modalImg} src={image.src} alt={image.alt}></img>
              <a className={styles.previousImg} onClick={previousSlide}>&#10094;</a>
              <a className={styles.nextImage} onClick={nextSlide}>&#10095;</a>
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