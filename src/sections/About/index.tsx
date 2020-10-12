import { Box, Grid } from "@chakra-ui/core"
import PropTypes from "prop-types"
import * as React from "react"
import Container from "../../components/Layout/Container"
import SectionContainer from "../Container/SectionContainer"
import SectionHeading from "../Container/SectionHeading"
import AboutMe from "./AboutMe"
import MyInterests from "./MyInterests"

const About: React.FC<{ title: string }> = ({ title }) => (
  <SectionContainer id={title} aria-label={title} bg="#FFFFF">
    <Container>
      <SectionHeading title="About" />
      <Grid
        gap={[3, 4]}
        mb={[4, 5, 6]}
        gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))"
      >
        <Box>
          <AboutMe />
        </Box>

        <Box>
          <Grid height="100%">
            <MyInterests />
          </Grid>
        </Box>
      </Grid>
    </Container>
  </SectionContainer>
)

About.propTypes = {
  title: PropTypes.string.isRequired
}

export default About
