import { Box } from "@chakra-ui/core"
import PropTypes from "prop-types"
import * as React from "react"
import { ScrollingProvider } from "react-scroll-section"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      overflowX="hidden"
      minWidth="100%"
      minHeight="100vh"
    >
      <ScrollingProvider>{children}</ScrollingProvider>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
