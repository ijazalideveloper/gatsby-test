import React from "react"
import { Link } from "gatsby"
import * as styles from "./Header.module.scss"
import LogoSvg from "../svgIcons/Logo"
import { BillIcon } from "../svgIcons/svgIcons"

export default function Header() {
  return (
    <header className={`${styles.navOuterWrap} flex flexBetween flexYcenter`}>
      <Link to="/">
        <LogoSvg />
      </Link>
      <div
        className={`${styles.notificationWrap} flex flexBetween flexYcenter`}
      >
        <div className={`${styles.bellIcon} flex`}>
          <BillIcon />
          <div className={styles.notificationDot}></div>
        </div>
        <div className={`${styles.userInfo} flex flexXcenter`}>JD</div>
      </div>
    </header>
  )
}
