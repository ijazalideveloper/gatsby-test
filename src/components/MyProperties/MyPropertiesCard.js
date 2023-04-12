import React from "react"
import * as styles from "./MyProperties.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function MyPropertiesCard({ data }) {
  const { propId, location } = data
  return (
    <div className={styles.myPropertiesOuterWrap}>
      <StaticImage
        src="../../images/myProperties.jpg"
        loading="eager"
        formats={["auto", "webp", "avif", "png"]}
        alt=""
      />
      <div className={styles.sliderDesc}>
        {propId && <div className={styles.propid}>{propId}</div>}
        {location && <div className={styles.localtion}>{location}</div>}
      </div>
    </div>
  )
}
