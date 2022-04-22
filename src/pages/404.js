import React from "react"
import * as styles from "./styles/404.module.css"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <div>
      <div className={styles.notFoundContainer}>
        <h1>Page not found</h1>
        <p>Sorry, the page you are looking for has been removed, relocated, or never existed.</p>
        <Link to="/">Back to My Stuff For Sale</Link>
      </div>
    </div>
  )
}

export default NotFound