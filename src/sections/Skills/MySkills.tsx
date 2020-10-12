import { Badge, Box, Grid, Heading, List, ListItem } from "@chakra-ui/core"
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
            <List m={0} p={0} listStyleType="none">
              <ListItem
                data-sal="slide-up"
                data-sal-delay={item.delay}
                data-sal-easing="ease"
              >
                <Heading mb={1}>
                  <RenderIcon iconname={item.iconName} />
                  <Box as="span" ml={2}>
                    {item.title}
                  </Box>
                </Heading>

                {item.skills.map((skill: { title: string }, d: number) => (
                  <Badge
                    key={`MySkills-${skill.title}-${d}`}
                    variant="outline"
                    m={[0, 1]}
                    ml={[1, null, null, null]}
                  >
                    <Box as="small">{skill.title}</Box>
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
