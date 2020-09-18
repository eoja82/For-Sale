import React from "react"
import { Helmet } from "react-helmet"
import styles from "./contact.module.css"

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
            <a className={styles.contactIcon} href="tel:1-651-492-0437" aria-label="Phone Number"><i class="fa fa-phone"></i></a>
            <a className={styles.contactIcon} href="sms:1-651-492-0437" aria-label="Text Number"><i class="fa fa-comment"></i></a>
            <a className={styles.contact} href="tel:1-651-492-0437">651-492-0437</a>
          </div>
          <div>
            <a className={styles.contactIcon} href="mailto:erik-oja@outlook.com" aria-label="Email"><i class="fa fa-envelope"></i></a>
            <a className={styles.contact} href="mailto:erik-oja@outlook.com">erik-oja@outlook.com</a>
          </div>
        </div>
    </div>
  )
}