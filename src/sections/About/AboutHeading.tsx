import { Heading, PseudoBox } from "@chakra-ui/core"
import * as React from "react"

const AboutHeading = () => (
  <Heading
    data-sal="fade"
    data-sal-delay="300"
    data-sal-easing="ease-out-back"
    color="#36382E"
    overflow="hidden"
    textAlign="center"
    fontFamily="Roboto Slab"
    fontWeight="900"
    my={2}
  >
    <PseudoBox
      _hover={{ backgroundSize: "100% 88%" }}
      color="#36382E"
      backgroundImage="
          'linear-gradient(to right, rgb(250, 112, 154) 0%, rgb(254, 225, 64) 100%)'"
      backgroundRepeat="no-repeat"
      backgroundSize="100% 0.2em"
      backgroundPosition="0 88%"
      transition="background-size 0.25s ease-in"
    >
      About
    </PseudoBox>
  </Heading>
)

export default AboutHeading
