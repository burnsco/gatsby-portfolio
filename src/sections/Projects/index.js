/** @jsx jsx */
import { jsx, Box, Flex, Card, Grid } from 'theme-ui'
import PropTypes from 'prop-types'
import { projects } from '../../data/projects'
import SectionContainer from '../Container/SectionContainer'
import ProjectInfo from './ProjectInfo'
import ProjectVideo from './ProjectVideo'
import CustomContainer from '../../components/Containers/CustomContainer'
import SectionHeading from '../Container/SectionHeading'

const Projects = ({ title }) => (
  <SectionContainer id={title} aria-label={title}>
    <Box variant="layout.projects">
      <CustomContainer>
        <SectionHeading title="Projects" />
        <Grid gap={6}>
          {projects.map((project) => (
            <Card key={project.id} m={[1, 2]} p={[2, 3]}>
              <Flex
                key={project.id}
                sx={{
                  flexDirection: 'column',
                }}
              >
                <ProjectVideo video={project.video} />

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

Projects.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Projects
