import React from 'react'
import PropTypes from 'prop-types'
import { Section } from 'react-scroll-section'
import { Box } from 'theme-ui'

const SectionContainer = ({ id, children, background, ...props }) => (
  <Box as={Section} sx={{ bg: `${background}` }} id={id} {...props}>
    {children}
  </Box>
)

SectionContainer.propTypes = {
  background: PropTypes.string,
  sectionBackground: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SectionContainer
