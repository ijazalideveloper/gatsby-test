import React from "react"
import { Link } from "gatsby"
import * as styles from "./Sidebar.module.scss"
import { HomeIcon, UserIcon } from "../svgIcons/svgIcons"

export default function Sidebar({ openSheet, onClickHideShowSheet }) {
  return (
    <div
      className={`${styles.sidebarWrap} flex flexXcenter flex-column`}
    >
      <button
        className={styles.hamburger}
        id="hamburger-1"
        onClick={onClickHideShowSheet}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      {!openSheet && (
        <ul className="">
          <li className={`${styles.active} flex flexYcenter flexXcenter`}>
            <Link>
              <HomeIcon />
            </Link>
          </li>
          <li className={`flex flexYcenter flexXcenter`}>
            <Link>
              <UserIcon />
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}
