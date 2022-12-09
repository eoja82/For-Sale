import React from "react"
import { Helmet } from "react-helmet"
import Container from "react-bootstrap/Container"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Stuff For Sale</title>
        <meta name="description" content="My stuff for sale. "  />
        <meta name="keywords" content="stuff, sale,, sell, buy, deals" />
        {/* <link rel="icon" type="image/png" href="favicon.ico" /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Helmet>
      <Container fluid="true">
        {children}
      </Container>
    </>
  )
}

export default Layout