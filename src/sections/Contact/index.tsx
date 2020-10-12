import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Textarea
} from "@chakra-ui/core"
import * as React from "react"
import Container from "../../components/Layout/Container"
import SectionContainer from "../Container/SectionContainer"

const Contact: React.FC<{ title: string }> = ({ title }) => {
  return (
    <SectionContainer id={title} aria-label={title} bg="#3b3d42">
      <Container>
        <Flex
          width="100%"
          flexDirection="column"
          px={3}
          py={3}
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            display="flex"
            fontFamily="Roboto Slab"
            color="white"
            width="100"
            flexWrap="wrap"
            justifyContent="center"
            justifyItems="center"
          >
            Contact
          </Heading>
          <Box
            display="flex"
            width={["95%", "75%", "65%", "50%"]}
            flexDirection="column"
            justifyContent="center"
            justifyItems="center"
            alignItems="center"
            as="form"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" name="name" />

            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" name="email" />

            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea id="message" name="message" />

            <Button
              border="2px dashed"
              alignSelf="flex-end"
              mt={2}
              p={2}
              title="Send"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Flex>
      </Container>
    </SectionContainer>
  )
}

export default Contact
