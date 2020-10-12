import { Box } from "@chakra-ui/core"
import * as React from "react"
import Container from "../../components/Layout/Container"
import SectionContainer from "../Container/SectionContainer"
import SectionHeading from "../Container/SectionHeading"
import MiniAppsCards from "./MiniAppsCards"

const MiniApps: React.FC<{ title: string }> = ({ title }) => {
  return (
    <SectionContainer id={title} aria-label={title}>
      <Container>
        <Box my={5} pb={3}>
          <SectionHeading title="Mini-Apps" />
          <MiniAppsCards />
        </Box>
      </Container>
    </SectionContainer>
  )
}

export default MiniApps
