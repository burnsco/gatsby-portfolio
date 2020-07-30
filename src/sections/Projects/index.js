/** @jsx jsx */
import { jsx, Box, Flex, Card, Grid } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Video } from 'gatsby-video'
import SectionContainer from '../Container/SectionContainer'
import ProjectInfo from './ProjectInfo'
import CustomContainer from '../../components/Containers/CustomContainer'
import SectionHeading from '../Container/SectionHeading'

export default function Projects({ title }) {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        nodes {
          gitUrl
          builtWith {
            iconName
            title
          }
          title
          webUrl
          video {
            childVideoFfmpeg {
              webm: transcode(
                outputOptions: ["-crf 20", "-b:v 0"]
                maxWidth: 1280
                maxHeight: 720
                fileExtension: "webm"
                codec: "libvpx-vp9"
              ) {
                width
                src
                presentationMaxWidth
                presentationMaxHeight
                originalName
                height
                fileExtension
                aspectRatio
              }
              mp4: transcode(
                maxWidth: 1280
                maxHeight: 720
                fileExtension: "mp4"
                codec: "libx264"
              ) {
                width
                src
                presentationMaxWidth
                presentationMaxHeight
                originalName
                height
                fileExtension
                aspectRatio
              }
            }
          }
          description {
            text
          }
        }
      }
    }
  `)

  return (
    <SectionContainer id={title} aria-label={title}>
      <Box variant="layout.projects">
        <CustomContainer>
          <SectionHeading title="Projects" />
          <Grid gap={6}>
            {data.allProjectsJson.nodes.map(project => (
              <Card key={`MainProject-${project.title}`} m={[1, 2]} p={[2, 3]}>
                <Flex
                  sx={{
                    flexDirection: 'column',
                  }}
                >
                  <Video
                    sx={{
                      border: 'none',
                      '&:hover': { opacity: 0.8, cursor: 'pointer' },
                    }}
                    autoPlay
                    muted
                    loop
                    controls
                    sources={[
                      project.video.childVideoFfmpeg.webm,
                      project.video.childVideoFfmpeg.mp4,
                    ]}
                  />

                  <ProjectInfo
                    title={project.title}
                    builtWith={project.builtWith}
                    description={project.description}
                    webUrl={project.webUrl}
                    gitUrl={project.gitUrl}
                  />
                </Flex>
              </Card>
            ))}
          </Grid>
        </CustomContainer>
      </Box>
    </SectionContainer>
  )
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
}
