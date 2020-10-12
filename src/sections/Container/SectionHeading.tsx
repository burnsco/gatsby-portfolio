import { Heading, PseudoBox } from "@chakra-ui/core"
import * as React from "react"

const SectionHeading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Heading
      data-sal="fade"
      data-sal-delay="300"
      data-sal-easing="ease-out-back"
      color="black"
      overflow="hidden"
      textAlign="center"
      p={5}
      letterSpacing="tight"
      size="lg"
      fontFamily="Roboto Slab"
      fontWeight="900"
      my={2}
    >
      <PseudoBox
        color="blackolive"
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
      </PseudoBox>
    </Heading>
  )
}

export default SectionHeading
