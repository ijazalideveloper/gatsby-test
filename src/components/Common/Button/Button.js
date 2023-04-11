import cx from "clsx";
import * as styles from "./button.module.scss";
import React from "react";
import Spinner from '../Spinner/Spinner';

const Button = ({
  children,
  className = "",
  variant = "",
  size = "",
  color = "",
  block = false,
  wide = false,
  type = "button",
  icon = "",
  iconPosition = "left",
  loading,
  onClick = () => {},
  ...props
}) => {
  const setClass = (variant) => {
    switch (variant) {
      case variant:
        return styles[variant];
      default:
        return "";
    }
  };

  return (
    <button
      className={cx(
        className,
        styles.btn,
        setClass(variant),
        setClass(size),
        setClass(color),
        setClass(wide ? "wide" : ""),
        setClass(block ? "block" : "")
      )}
      onClick={onClick}
      type={type}
      {...props}
    >
      {icon && iconPosition === "left" ? icon : null}
      {loading && <Spinner />}
      {children}
      {icon && iconPosition === "right" ? icon : null}
    </button>
  );
};

export default Button;
