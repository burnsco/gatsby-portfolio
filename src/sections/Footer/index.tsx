import { Box, Flex, Text } from "@chakra-ui/core"
import * as React from "react"
import TextSocials from "../../components/SocialIcons/TextSocials"

const Footer = () => (
  <Flex
    as="footer"
    width="100%"
    bg="#252323"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <TextSocials />

    <Box p={2} mt={3}>
      <Text color="#f7fafc">
        Corey Burns
        <Box as="span" color="#D63230">
          © {new Date().getFullYear()}
        </Box>
      </Text>
    </Box>
  </Flex>
)

export default Footer
