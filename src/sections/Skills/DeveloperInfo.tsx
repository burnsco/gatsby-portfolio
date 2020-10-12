import { Box, Flex, Heading, Text } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import RenderIcon from "../../components/SocialIcons/RenderIcon"

export default function DeveloperInfo() {
  const { data } = useStaticQuery(graphql`
    {
      data: allDeveloperInfoJson {
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
    <Box>
      <Flex flexDirection="column" flexWrap="wrap">
        <Heading
          data-sal="slide-left"
          data-sal-delay={data.nodes[0].delay}
          data-sal-easing="ease"
          mb={2}
        >
          <RenderIcon iconname={data.nodes[0].iconName} />
          <Box as="span" ml={2}>
            {data.nodes[0].title}
          </Box>
        </Heading>

        {data.nodes[0].excerpt.map((paragraph: { text: string }, i: number) => (
          <Text key={`DeveloperInfo-Paragraph-${i}`}>{paragraph.text}</Text>
        ))}
      </Flex>
    </Box>
  )
}
