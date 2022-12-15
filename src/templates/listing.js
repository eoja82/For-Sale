import React, { useState, useRef } from "react"
import { graphql, withPrefix, Link } from "gatsby"
import * as styles from "./listing.module.css"
import Contact from "../components/contact.js"
import Layout from "../components/layout"
import Carousel from "react-bootstrap/Carousel"
import CloseButton from "react-bootstrap/CloseButton"
import Container from "react-bootstrap/Container"
import Modal from "react-bootstrap/Modal"


const Listing = ({ data }) => {
  const { description, images, price, title } = data.dataJson,
        numImages = images.length,
        [imgNumber, setImageNumber] = useState(0),
        [controls, setControls] = useState(false),
        [showModal, setShowModal] = useState(false)

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

  function handleModal() {
    setShowModal(!showModal)
  }

  return (
    <Layout>
      <style>
        {`
          .modal-header.modalHeader {
            border: none;
          }
          @media only screen and (min-width: 1200px) {
            .modalContent {
              max-width: 1200px;
              margin: 0 auto;
            }
          }
        `}
      </style>
      <Contact />
      <Container style={{marginTop: "60px"}}>
        <Link to="/">Home</Link>
        <h1 className="mt-3">{title} - {price}</h1>
        <Carousel
          slide={false}
          interval={null}
          indicators={false}
          controls={controls}
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
                onClick={handleModal}
              />
              <Carousel.Caption 
                className="position-absolute top-0 pt-1" 
                style={{cursor: "zoom-in"}}
                onClick={handleModal}
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
      <Modal show={showModal} fullscreen={true} dialogClassName="modalContent">
        <Modal.Header className="bg-dark modalHeader">
          <CloseButton variant="white" onClick={handleModal} />
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Carousel
            fade
            interval={null}
            indicators={false}
            controls
            activeIndex={imgNumber}
            onSelect={setActiveIndex}
          >
            {images.map( (image, i) => (
              <Carousel.Item key={`image${i}`}>
                <img 
                  src={withPrefix(image.src)} 
                  alt={image.alt} 
                  className="d-block w-100" 
                  style={{objectFit: "contain", objectPosition: "top"}}
                />
                <Carousel.Caption 
                  className="position-absolute top-0 pt-1">
                  <p>Image {i + 1} of {numImages}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
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