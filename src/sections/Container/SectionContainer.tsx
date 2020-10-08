import { Box } from "@chakra-ui/core"
import PropTypes from "prop-types"
import * as React from "react"
import { Section } from "react-scroll-section"

const SectionContainer: React.FC<{
  id: string
  children: React.ReactNode
}> = ({ id, children, ...props }) => (
  <Box as={Section} id={id} {...props}>
    {children}
  </Box>
)

SectionContainer.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default SectionContainer
