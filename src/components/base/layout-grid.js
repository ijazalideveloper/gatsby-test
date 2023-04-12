import React from "react"
import cx from "clsx"
import * as styles from "./layout-grid.module.scss"

const LayoutGrid = ({
  children,
  className = "",
  gridColumns = "",
  rowGap = "",
  style = {},
  ...props
}) => {
  return (
    <div
      className={cx(className, styles.layoutGrid)}
      style={{
        "--grid-columns": `${gridColumns}`,
        "--grid-row-gap": `${rowGap}`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default LayoutGrid
