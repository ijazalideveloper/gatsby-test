import React from "react"
import * as styles from "./LetHelp.module.scss"
import { Facebook, WhatsAppIcon } from "../svgIcons/svgIcons"
import { letsHelpData } from "../../StaticData/staticData"
import { Link } from "gatsby"
import Button from "../Common/Button"
import LayoutGrid from "../base/layout-grid"

export default function LetHelp() {
  return (
    <div className={styles.appLayout}>
      {letsHelpData.map(
        (
          { icon, heading, description, btnText, showSocialIcon, ...rest },
          i
        ) => {
          return (
            <div className={styles.box} key={i} {...rest}>
              {icon}
              {heading && <h3>{heading}</h3>}
              {description && <p>{description}</p>}
              {showSocialIcon === true && (
                <ul className={`${styles.socialIcon} flex flexXcenter`}>
                  <li>
                    <Link>
                      <Facebook />
                    </Link>
                    <Link>
                      <Facebook />
                    </Link>
                    <Link>
                      <Facebook />
                    </Link>
                    <Link>
                      <Facebook />
                    </Link>
                  </li>
                </ul>
              )}
              {btnText && <Button size="lg">{btnText}</Button>}
              {/* <Button>Data</Button> */}
            </div>
          )
        }
      )}
    </div>
  )
}
