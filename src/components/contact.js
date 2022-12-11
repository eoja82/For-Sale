import React from "react"
import * as styles from "./styles/contact.module.css"

const Contact = () => {
  return (
    <div>
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

export default Contact