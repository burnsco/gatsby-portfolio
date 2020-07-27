/** @jsx jsx */
import { jsx, Box, Grid } from 'theme-ui'
import PropTypes from 'prop-types'
import SectionContainer from '../Container/SectionContainer'

import { skillsDevInfo, mySkillsData } from '../../data/skills'
import DeveloperInfo from './DeveloperInfo'
import MySkills from './MySkills'
import CustomContainer from '../../components/Containers/CustomContainer'
import SectionHeading from '../Container/SectionHeading'

const Skills = ({ title }) => (
  <SectionContainer id={title} aria-label={title}>
    <Box sx={{ variant: 'layout.about' }}>
      <CustomContainer>
        <SectionHeading title="Skills" />
        <Grid
          sx={{
            gap: 4,
            mb: [4, 5, 6],
            gridTemplateColumns: 'repeat(auto-fill, minmax(320x, 1fr))',
          }}
        >
          <Box>
            {skillsDevInfo.map((data) => (
              <DeveloperInfo key={data.id} {...data} />
            ))}
          </Box>

          <Box>
            <Grid
              sx={{
                height: '100%',
              }}
            >
              {mySkillsData.map((data) => (
                <MySkills key={data.id} {...data} />
              ))}
            </Grid>
          </Box>
        </Grid>
      </CustomContainer>
    </Box>
  </SectionContainer>
)

Skills.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Skills
