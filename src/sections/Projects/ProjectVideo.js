import React from 'react'
import { Box } from 'theme-ui'

// eslint-disable-next-line react/prop-types
const ProjectVideo = ({ video }) => (
  <Box>
    <video
      style={{
        height: 'auto',
        width: '100%',
      }}
      controls
      autoPlay
      loop
      muted
    >
      <source src={video} type="video/webm" />
    </video>
  </Box>
)

export default ProjectVideo
