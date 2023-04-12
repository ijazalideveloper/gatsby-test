import React from "react"
import Heading from "../Common/Heading/Heading"
import * as styles from "./MyProperties.module.scss"
import SlickSlider from "../Slider/SlickSlider"
import MyPropertiesCard from "./MyPropertiesCard"
import { myPropertiesSlider } from "../../StaticData/staticData"

export default function MyProperties() {
  const defaultSettings = {
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className={styles.myPropertiesOuter}>
      <Heading className={styles.headingMargin} variant="h2">
        My Properties
      </Heading>

      <SlickSlider customSliderSettings={defaultSettings}>
        {myPropertiesSlider?.map((obj, index) => (
          <MyPropertiesCard key={index} data={obj} />
        ))}
      </SlickSlider>
    </div>
  )
}
