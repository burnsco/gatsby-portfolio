/** @jsx jsx */
import PropTypes from 'prop-types'
import { Box, Grid, jsx } from 'theme-ui'
import SectionContainer from '../Container/SectionContainer'
import SectionHeading from '../Container/SectionHeading'
import DeveloperInfo from './DeveloperInfo'
import MySkills from './MySkills'

const Skills = ({ title }) => (
  <SectionContainer id={title} aria-label={title}>
    <Box sx={{ variant: 'layout.about' }}>
      <SectionHeading title="Skills" />

      <Grid
        sx={{
          gap: 2,
          mb: [4, 5, 6],
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        }}
      >
        <Box>
          <DeveloperInfo />
        </Box>

        <Box>
          <MySkills />
        </Box>
      </Grid>
    </Box>
  </SectionContainer>
)

Skills.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Skills
