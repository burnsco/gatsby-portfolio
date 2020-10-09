import * as React from "react"

const IconContainer = (props: any) => (
  <div
    {...props}
    sx={{
      // values referencing scales defined in a theme
      color: "primary",
      bg: "lightgray",
      fontFamily: "body",
      // raw CSS value
      boxShadow: "0 0 1px 3px rgba(0, 0, 0, .125)"
    }}
  />
)

export default IconContainer
