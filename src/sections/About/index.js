/** @jsx jsx */
import { jsx, Box, Grid } from 'theme-ui'
import PropTypes from 'prop-types'
import SectionContainer from '../Container/SectionContainer'

import AboutMe from './AboutMe'
import RandomFacts from './RandomFacts'
import CustomContainer from '../../components/Containers/CustomContainer'
import SectionHeading from '../Container/SectionHeading'

const About = ({ title }) => (
  <SectionContainer id={title} aria-label={title}>
    <Box sx={{ variant: 'layout.about' }}>
      <CustomContainer>
        <SectionHeading title="About" />
        <Grid
          sx={{
            gap: 2,
            mb: [4, 5, 6],
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          }}
        >
          <Box>
            <AboutMe />
          </Box>

          <Box>
            <Grid
              sx={{
                height: '100%',
              }}
            >
              <RandomFacts />
            </Grid>
          </Box>
        </Grid>
      </CustomContainer>
    </Box>
  </SectionContainer>
)

About.propTypes = {
  title: PropTypes.string.isRequired,
}

export default About
