import React from "react"
import { useStaticQuery, graphql, Link, withPrefix } from "gatsby"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

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
    <Container>
      <style>
        {`
          .card-img-top.cardImg {
            width: 300px;
            height: 225px;
            object-fit: cover;
          }
          .card-text.imgOverlay {
            top: 0;
            position: absolute;
            left: 0;
            background-color: white;
            font-size: 12px;
            border-radius: .25rem 0 .25rem 0;
            border-right: 1px solid rgba(0,0,0,.125);
            border-bottom: 1px solid rgba(0,0,0,.125);
          }
        `}
      </style>
      <Row xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto" className="justify-content-center pb-5">
        {listings.map( (listing, i) => (
          <Col key={i} className="g-4">
            <Link to={listing.slug} key={listing.slug}  className="text-dark text-decoration-none">
              <Card className="shadow-sm rounded">
                <Card.Img variant="top" src={withPrefix(listing.images[0].src)} alt={listing.images[0].alt} className="cardImg" />
                <Card.ImgOverlay>
                  <Card.Text className="imgOverlay p-1">{listing.price}</Card.Text>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Text className="fs-5">{`${listing.title} ${listing.price}`}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AllListings