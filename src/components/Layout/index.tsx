import { Flex } from "@chakra-ui/core"
import PropTypes from "prop-types"
import * as React from "react"
import { ScrollingProvider } from "react-scroll-section"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex as="main" direction="column" justify="center" overflowX="hidden">
      <ScrollingProvider>{children}</ScrollingProvider>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
