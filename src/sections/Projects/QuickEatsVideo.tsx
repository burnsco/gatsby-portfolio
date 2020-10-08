import { Box } from "@chakra-ui/core"
import * as React from "react"
import * as quickeatsmp4 from "../../data/videos/quickeats.mp4"
import * as quickeatswebm from "../../data/videos/quikeatsdemo.webm"

const QuickEatsVideo = () => {
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
        <source src={quickeatswebm} type="video/webm" />
        <source src={quickeatsmp4} type="video/mp4" />
      </video>
    </Box>
  )
}

export default QuickEatsVideo
