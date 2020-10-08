import { Box, Flex, Grid } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import SectionContainer from "../Container/SectionContainer"
import SectionHeading from "../Container/SectionHeading"
import ProjectInfo from "./ProjectInfo"
import QuickEatsVideo from "./QuickEatsVideo"
import RedditCloneVideo from "./RedditVideo"

const Projects: React.FC<{ title: string }> = ({ title }) => {
  const { data } = useStaticQuery(graphql`
    {
      data: allProjectsJson {
        nodes {
          builtWith {
            iconName
            title
          }
          description {
            text
          }
          gitUrl
          title
          video
          webUrl
        }
      }
    }
  `)

  return (
    <SectionContainer id={title} aria-label={title}>
      <Box>
        <SectionHeading title="Projects" />
        <Grid gap={6}>
          {data.nodes.map(
            (project: {
              title: string
              builWith: string
              description: {
                text: string
              }[]
              webUrl: string
              builtWith: {
                iconName: string
                title: string
              }[]
              gitUrl: string
              video: string
            }) => (
              <Box
                border="1px solid red"
                key={`MainProject-${project.title}`}
                m={[1, 2]}
                p={[2, 3]}
              >
                <Flex flexDirection="column">
                  {project.video === "reddit" ? (
                    <RedditCloneVideo />
                  ) : (
                    <QuickEatsVideo />
                  )}

                  <ProjectInfo
                    title={project.title}
                    builtWith={project.builtWith}
                    description={project.description}
                    webUrl={project.webUrl}
                    gitUrl={project.gitUrl}
                  />
                </Flex>
              </Box>
            )
          )}
        </Grid>
      </Box>
    </SectionContainer>
  )
}

export default Projects
