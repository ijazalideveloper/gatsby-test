import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import * as styles from "./slickSlider.module.scss";
import React from "react";

const defaultSettings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
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
};

const SlickSlider = ({ className = "", children, customSliderSettings = {}, ...props }) => {
  const sliderDefaultPlusCustomSettings = {
    ...defaultSettings,
    ...customSliderSettings,
  };

  return (
    <Slider className={`${className} ${styles.slickSlider}`} {...sliderDefaultPlusCustomSettings} {...props}>
      {children}
    </Slider>
  );
};

export default SlickSlider;
