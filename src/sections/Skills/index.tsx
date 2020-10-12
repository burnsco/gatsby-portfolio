import { Box, Grid } from "@chakra-ui/core"
import PropTypes from "prop-types"
import * as React from "react"
import SectionContainer from "../Container/SectionContainer"
import SectionHeading from "../Container/SectionHeading"
import DeveloperInfo from "./DeveloperInfo"
import MySkills from "./MySkills"

const Skills: React.FC<{ title: string }> = ({ title }) => {
  return (
    <SectionContainer id={title} aria-label={title} bg="#FFFFFF">
      <SectionHeading title="Skills" />
      <Grid
        gap={4}
        mb={[4, 5, 6]}
        gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))"
      >
        <Box>
          <DeveloperInfo />
        </Box>

        <Box>
          <MySkills />
        </Box>
      </Grid>
    </SectionContainer>
  )
}
Skills.propTypes = {
  title: PropTypes.string.isRequired
}

export default Skills
