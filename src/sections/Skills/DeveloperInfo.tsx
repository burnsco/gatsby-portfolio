import { Box, Flex, Heading, Text } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Container from "../../components/Layout/Container"
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
    <Container>
      <Flex flexDirection="column" flexWrap="wrap">
        <Heading
          size="md"
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
          <Text fontSize="sm" key={`DeveloperInfo-Paragraph-${i}`}>
            {paragraph.text}
          </Text>
        ))}
      </Flex>
    </Container>
  )
}
