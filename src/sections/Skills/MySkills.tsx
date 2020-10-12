import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  List,
  ListItem,
  Text
} from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Container from "../../components/Layout/Container"
import RenderIcon from "../../components/SocialIcons/RenderIcon"

export default function MySkills() {
  const { data } = useStaticQuery(graphql`
    {
      data: allMySkillsJson {
        nodes {
          delay
          iconName
          title
          skills {
            title
          }
        }
      }
    }
  `)

  return (
    <Grid height="100%">
      {data.nodes.map(
        (
          item: {
            title: string
            iconName: string
            delay: number
            skills: {
              title: string
            }[]
          },
          i: number
        ) => (
          <Container key={`my-skills-${item.title}-${i}`}>
            <List listStyleType="none">
              <ListItem
                data-sal="slide-up"
                data-sal-delay={item.delay}
                data-sal-easing="ease"
              >
                <Heading
                  size="md"
                  color="#36382E"
                  fontFamily="Inter"
                  data-sal="slide-left"
                  data-sal-delay={data.nodes[0].delay}
                  data-sal-easing="ease"
                  mb={1}
                >
                  <Flex align="center">
                    <RenderIcon iconname={item.iconName} />
                    <Box ml={2} as="span">
                      {item.title}
                    </Box>
                  </Flex>
                </Heading>

                {item.skills.map((skill: { title: string }, d: number) => (
                  <Badge
                    p={1}
                    key={`MySkills-${skill.title}-${d}`}
                    variant="subtle"
                    m={[0, 1]}
                    ml={[1, null, null, null]}
                  >
                    <Text as="small" color="red">
                      {skill.title}
                    </Text>
                  </Badge>
                ))}
              </ListItem>
            </List>
          </Container>
        )
      )}
    </Grid>
  )
}
