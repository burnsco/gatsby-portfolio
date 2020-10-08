import { Box, Flex } from "@chakra-ui/core"
import * as React from "react"
import TextSocials from "../../components/SocialIcons/TextSocials"

const Footer = () => (
  <Flex
    as="footer"
    width="100%"
    bg="eerieblack"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <TextSocials />

    <Box color="light" p={2} mt={3}>
      Corey Burns
      <Box as="span" color="persianred" fontSize="0">
        © {new Date().getFullYear()}
      </Box>
    </Box>
  </Flex>
)

export default Footer
