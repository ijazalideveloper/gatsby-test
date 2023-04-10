import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./LetHelp.module.css"
import { Facebook, WhatsAppIcon } from "../svgIcons/svgIcons"
import { letsHelpData } from "../../StaticData/staticData"
import { Link } from "gatsby"

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
              {btnText && <button>{btnText}</button>}
            </div>
          )
        }
      )}
      {/* <div className={styles.box}>
        {" "}
        <StaticImage
          src="https://i.ibb.co/1GTcwmk/logo.png"
          loading="eager"
          formats={["auto", "webp", "avif", "png"]}
          alt=""
        />
        <h3>Support ticket</h3>
        <p>
          Raise a support ticket and our team will get back to you within 12
          hours.
        </p>
        <button>Raise a support ticket</button>
      </div>
      <div className={styles.box}>
        {" "}
        <StaticImage
          src="https://i.ibb.co/1GTcwmk/logo.png"
          loading="eager"
          formats={["auto", "webp", "avif", "png"]}
          alt=""
        />
        <h3>FAQ’s</h3>
        <p>Here are frequently asked questions. Might help you as well.</p>
        <button>View FAQ’s</button>
      </div>
      <div className={styles.box}>
        {" "}
        <StaticImage
          src="https://i.ibb.co/1GTcwmk/logo.png"
          loading="eager"
          formats={["auto", "webp", "avif", "png"]}
          alt=""
        />
        <h3>Follow us</h3>
        <p>Keep in touch with us on Our social channels.</p>
        <button>Connect Now</button>
      </div> */}
    </div>
  )
}
