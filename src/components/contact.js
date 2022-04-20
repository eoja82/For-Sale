import React from "react"
import { Helmet } from "react-helmet"
import * as styles from "./contact.module.css"

export default () => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Stuff For Sale</title>
        <meta name="description" content="Reloading equipment and books for sale. "  />
        <meta name="keywords" content="reloading, books, scale, dies, press, vice" />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
      </Helmet>
        <div id={styles.contactContainer}>
          <div>
            <a className={styles.contactIcon} href="tel:1-555-555-5555" aria-label="Phone Number"><i className="fa fa-phone"></i></a>
            <a className={styles.contactIcon} href="sms:1-555-555-5555" aria-label="Text Number"><i className="fa fa-comment"></i></a>
            <a className={styles.contact} href="tel:1-555-555-5555">555-555-5555</a>
          </div>
          <div>
            <a className={styles.contactIcon} href="mailto:fake@email.com" aria-label="Email"><i className="fa fa-envelope"></i></a>
            <a className={styles.contact} href="mailto:fake@email.com">fake@email.com</a>
          </div>
        </div>
    </div>
  )
}