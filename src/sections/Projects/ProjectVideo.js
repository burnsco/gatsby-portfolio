import React from 'react'
import { Box } from 'theme-ui'
import reddit from '../../assets/redditclonedemo.webm'
import quickeats from '../../assets/quikeatsdemo.webm'

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
      {video === 'reddit' ? (
        <source src={reddit} type="video/webm" />
      ) : (
        <source src={quickeats} type="video/webm" />
      )}
    </video>
  </Box>
)

export default ProjectVideo
