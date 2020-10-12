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
        background="linear-gradient(#292a2d, #3b3d42)"
        minHeight="95vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          height="130px"
          width="130px"
          rounded="full"
          transform="rotate(-35deg)"
          transition="transform .5s, filter 1.5s ease-in-out"
          boxShadow="0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)"
          mb={3}
          objectFit="cover"
          objectPosition="50% 50%"
          src={avatar}
        />
        <Heading
          size="xl"
          fontFamily="Inter"
          color="#F39237"
          letterSpacing="tight"
          fontWeight="900"
        >
          Corey Burns
        </Heading>
        <Heading
          mb={4}
          fontFamily="Inter"
          size="md"
          letterSpacing="tight"
          fontWeight="500"
        >
          Full-stack Developer
        </Heading>
        <SocialIcons />
        <AnimatedWave bottom />
      </Flex>
    </SectionContainer>
  )
}

export default Hero
