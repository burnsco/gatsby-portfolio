import { Flex, Heading, Image } from "@chakra-ui/core"
import * as React from "react"
import AnimatedWave from "../../components/AnimatedWave"
import Header from "../../components/Header"
import SocialIcons from "../../components/SocialIcons"
import * as avatar from "../../data/images/Me.jpg"
import SectionContainer from "../Container/SectionContainer"

const Hero: React.FC<{ title: string }> = ({ title }) => {
  return (
    <SectionContainer id={title} aria-label={title}>
      <Header />
      <Flex
        minHeight="95vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          height="130"
          width="130"
          mb={3}
          objectFit="cover"
          objectPosition="50% 50%"
          src={avatar}
        />
        <Heading>Corey Burns</Heading>
        <Heading>Full-stack Developer</Heading>
        <SocialIcons />
        <AnimatedWave enableWave bottom />
      </Flex>
    </SectionContainer>
  )
}

export default Hero
