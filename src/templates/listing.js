import React, { useState, useRef } from "react"
import { graphql, withPrefix, Link } from "gatsby"
import * as styles from "./listing.module.css"
import Contact from "../components/contact.js"
import Layout from "../components/layout"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"

let imageIndex = 0

const Listing = ({ data }) => {
  const { description, images, price, title } = data.dataJson,
        numImages = images.length,
        imgModal = useRef(null),
        [image, setImage] = useState(images[imageIndex]),
        [imgNumber, setImageNumber] = useState(0),
        [controls, setControls] = useState(false),
        slideShow = useRef(null)
  let touchStartX = 0,
      touchEndX = 0

  function handleControls() {
    setControls(!controls)
  }

  function setActiveIndex(e) {
    if (typeof e == "number") {
      setImageNumber(e)
    } else {
      setImageNumber(Number(e.target.dataset.imgIndex))
    }
  }

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
    setImageNumber(imageIndex)
  }
  function nextSlide() {
    imageIndex++
    if (imageIndex > numImages - 1) imageIndex = 0
    setImage(images[imageIndex])
    setImageNumber(imageIndex)
  }
  function touchStart(e) {
    touchStartX = e.changedTouches[0].screenX
  }
  function touchEnd(e) {
    touchEndX = e.changedTouches[0].screenX
    handleGesture()
  }
  function handleGesture() {
    if (touchEndX < touchStartX && Math.abs(touchEndX - touchStartX) > 20) nextSlide()
    if (touchEndX > touchStartX && Math.abs(touchEndX - touchStartX) > 20) previousSlide()
  }

  return (
    <Layout>
      <Contact />
      <Container style={{marginTop: "60px"}}>
        <Link to="/">Home</Link>
        <h1 className="mt-3">{title} - {price}</h1>
        <Carousel
          slide={false}
          interval={null}
          indicators={false}
          controls={controls}
          ref={slideShow}
          activeIndex={imgNumber}
          onSelect={setActiveIndex}
          onMouseEnter={handleControls}
          onMouseLeave={handleControls}
          className={styles.carousel + " mb-2"}
        >
          {images.map( (image, i) => (
            <Carousel.Item key={`image${i}`}>
              <img 
                src={withPrefix(image.src)} 
                alt={image.alt} 
                className="d-block w-100" 
                style={{objectFit: "contain", objectPosition: "top", cursor: "zoom-in"}}
                onClick={openImgModal}
              />
              <Carousel.Caption 
                className="position-absolute top-0 pt-1" 
                style={{cursor: "zoom-in"}} 
                onClick={openImgModal}
              >
                <p style={{visibility: controls ? "visible" : "hidden"}}>Image {i + 1} of {numImages}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Container fluid="true" id={styles.thumbnailContainer}>
          {images.map( (image, i) => (
            <button className={styles.thumbnailWrapper} onClick={setActiveIndex} onMouseEnter={setActiveIndex} data-img-index={i} key={`image${i}`}>
              <img src={withPrefix(image.src)} alt={image.alt} className={styles.thumbnail} data-img-index={i} />
            </button>
          ))}
        </Container>
        <p className="pt-2 fs-5">{description}</p>
      </Container>
      <div className={styles.container}>
        <div id={styles.imgModalContainer} ref={imgModal}>
          <div className={styles.modalContent}>
            <span className={styles.closeModal} onClick={closeImgModal} onKeyDown={closeImgModal} role="button" tabIndex={0}>&times;</span>
            <div className={styles.imgNumber}>Image {imgNumber + 1} of {numImages}</div>
            <img className={styles.modalImg} src={withPrefix(image.src)} alt={image.alt} onTouchStart={touchStart} onTouchEnd={touchEnd}></img>
            <button className={styles.previousImg} onClick={previousSlide}>&#10094;</button>
            <button className={styles.nextImage} onClick={nextSlide}>&#10095;</button>
          </div>
        </div>
      </div>
    </Layout>
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

export default Listing