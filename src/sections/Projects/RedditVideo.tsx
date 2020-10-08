import { Box } from "@chakra-ui/core"
import * as React from "react"
const redditmp4 = require("../../data/videos/reddit.mp4")
const redditwebm = require("../../data/videos/redditclonedemo.webm")

const RedditCloneVideo: React.FC = () => {
  return (
    <Box>
      <video
        style={{
          height: "auto",
          width: "100%"
        }}
        controls
        autoPlay
        loop
        muted
      >
        <source src={redditwebm} type="video/webm" />
        <source src={redditmp4} type="video/mp4" />
      </video>
    </Box>
  )
}

export default RedditCloneVideo
