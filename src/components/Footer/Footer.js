import React from "react"
import * as styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <div className={`${styles.copyright} flex flexXcenter`}>
        <p>© Copyright 2021. DAMAC Properties. All rights reserved.</p>
      </div>
    </footer>
  )
}
