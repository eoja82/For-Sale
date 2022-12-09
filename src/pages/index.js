import React from "react"
import * as styles from "./styles/index.module.css"
import { Helmet } from "react-helmet"
import AllListings from "../components/allListings"


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
        <AllListings />
      </div>
    )
  }
}

export default Index