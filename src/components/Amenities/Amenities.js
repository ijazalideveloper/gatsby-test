import React from "react"
import * as styles from "./Amenities.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { amentiesDataList } from "../../StaticData/staticData"

export default function Amenities() {
  return (
    <div className={styles.amentiesOuterWrap}>
      {amentiesDataList.map(({ imagePath, description, ...rest }, i) => {
        return (
          <div className={`${styles.amenitiesWrap}`} key={i}>
            <div className={styles.iconWrap}>
              <StaticImage
                src="../../images/amenties-02.png"
                loading="eager"
                formats={["auto", "webp", "avif", "png"]}
                alt=""
              />
            </div>
            <div className={styles.description}>{description}</div>
          </div>
        )
      })}
    </div>
  )
}
