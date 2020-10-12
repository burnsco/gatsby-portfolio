import { Box, Heading } from "@chakra-ui/core"
import * as React from "react"

const SectionHeading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Heading
      data-sal="fade"
      data-sal-delay="300"
      data-sal-easing="ease-out-back"
      color="#36382E"
      overflow="hidden"
      textAlign="center"
      letterSpacing="tight"
      size="xl"
      fontFamily="Roboto Slab"
      fontWeight="900"
      my="2em"
    >
      <Box
        as="span"
        display="inline"
        color="#36382E"
        backgroundImage="linear-gradient(120deg, rgba(243,147, 55,1) 0%, rgb(250, 112, 154) 100%)"
        backgroundRepeat="no-repeat"
        backgroundSize="100% 0.2em"
        backgroundPosition="0 88%"
        transition="background-size 0.25s ease-in"
        _hover={{
          backgroundSize: "100% 88%"
        }}
      >
        {title}
      </Box>
    </Heading>
  )
}

export default SectionHeading
