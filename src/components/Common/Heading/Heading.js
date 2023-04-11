import { createElement } from "react";
import cx from "clsx";
import * as styles from "./heading.module.scss";

const Heading = ({ children, className = "", variant = "h2", style = {}, ...props }) => {
  return createElement(variant, { className: cx(className, styles[variant]), style: style, ...props }, children);
};

export default Heading;
