import React from "react"
import cx from "clsx"

const Group = ({ className, children, gap, template, style = {}, ...rest }) => {
  return (
    <div
      {...rest}
      className={cx(className, "grid")}
      style={{ "--gap": gap, "--template": template, ...style }}
    >
      {children}
    </div>
  )
}

export default Group
