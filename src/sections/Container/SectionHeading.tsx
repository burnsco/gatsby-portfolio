import { Box, Heading } from "@chakra-ui/core"
import * as React from "react"

const SectionHeading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Heading
      data-sal="fade"
      data-sal-delay="300"
      data-sal-easing="ease-out-back"
      color="blackolive"
      overflow="hidden"
      textAlign="center"
      fontFamily="Roboto Slab"
      fontWeight="900"
      my={2}
    >
      <Box
        color="blackolive"
        backgroundImage="linear-gradient(120deg, rgba(243,147, 55,1) 0%, rgb(250, 112, 154) 100%)"
        backgroundRepeat="no-repeat"
        backgroundSize="100% 0.2em"
        backgroundPosition="0 88%"
        transition="background-size 0.25s ease-in"
      >
        {title}
      </Box>
    </Heading>
  )
}

export default SectionHeading
