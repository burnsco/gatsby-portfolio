import { Box, Flex, Heading } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import RenderIcon from "../../components/SocialIcons/RenderIcon"

export default function AboutMe() {
  const { data } = useStaticQuery(graphql`
    {
      data: allMoreAboutMeJson {
        nodes {
          delay
          iconName
          title
          excerpt {
            text
          }
        }
      }
    }
  `)
  return (
    <Flex flexDirection="column" flexWrap="wrap">
      <Heading
        data-sal="slide-right"
        data-sal-delay={data.nodes[0].delay}
        data-sal-easing="ease"
        fontSize={[2, 3]}
        mb={2}
      >
        <RenderIcon iconname={data.nodes[0].iconName} />
        <Box as="span" ml={2}>
          {data.nodes[0].title}
        </Box>
      </Heading>

      {data.nodes[0].excerpt.map((paragraph: { text: string }, i: number) => (
        <Box key={`p-${paragraph}-${i}`} fontSize={[0, 1]}>
          {paragraph.text}
        </Box>
      ))}
    </Flex>
  )
}
