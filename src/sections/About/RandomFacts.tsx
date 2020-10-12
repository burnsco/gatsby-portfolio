import { Box, Heading, List, ListItem } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import RenderIcon from "../../components/SocialIcons/RenderIcon"

export default function RandomFacts() {
  const { data } = useStaticQuery(graphql`
    {
      data: allRandomFactsJson {
        nodes {
          delay
          iconName
          title
          facts {
            title
          }
        }
      }
    }
  `)

  return (
    <Box>
      <Heading mb={2}>
        <RenderIcon iconname={data.nodes[0].iconName} />
        <Box as="span" ml={2}>
          {data.nodes[0].title}
        </Box>
      </Heading>
      <List m={0} p={0}>
        {data.nodes[0].facts.map((fact: { title: string }, i: number) => (
          <ListItem
            data-sal="slide-up"
            key={`random-fact-${fact}-${i}`}
            data-sal-delay={data.nodes[0].delay}
            data-sal-easing="ease"
          >
            {fact.title}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
