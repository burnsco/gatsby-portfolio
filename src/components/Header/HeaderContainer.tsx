import React from "react"
import Headroom from "react-headroom"

const HeaderContainer = (props: any) => (
  <Headroom
    style={{
      zIndex: "9999",
      bg: "primary",
      "*": {
        transition: "background-color 0.1s ease"
      },

      ".headroom--pinned": {
        bg: "primary",
        zIndex: "9999"
      },
      width: "100%"
    }}
    {...props}
  />
)

export default HeaderContainer
