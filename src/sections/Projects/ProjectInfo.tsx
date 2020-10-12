import { Box, Button, Flex, Heading, Link } from "@chakra-ui/core"
import * as React from "react"
import RenderIcon from "../../components/SocialIcons/RenderIcon"

const ProjectInfo: React.FC<{
  description: {
    text: string
  }[]
  webUrl: string
  gitUrl: string
  title: string
  builtWith: {
    iconName: string
    title: string
  }[]
}> = ({ description, webUrl, gitUrl, title, builtWith }) => {
  return (
    <Flex flexDirection="column">
      <Flex my={2}>
        <Heading color="black" fontWeight="800">
          <Box as="span" color="black">
            {title}
          </Box>
        </Heading>
      </Flex>
      <Flex my={[1, 2]} flexWrap="wrap">
        {builtWith.map((item, i) => (
          <Box as="span" key={`BuiltWith-${item.title}-${i}`} ml={2}>
            <RenderIcon iconname={item.iconName} />
          </Box>
        ))}
      </Flex>
      {description.map(p => (
        <Box key={`paragraph-${p.text}`} my="2">
          {p.text}
        </Box>
      ))}
      <Flex mt={3} justifyContent="space-evenly">
        <Link
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          color="background"
        >
          <Button
            backgroundColor="white"
            alignSelf="flex-start"
            border="2px solid #e7e7e7"
            m={2}
            _hover={{
              backgroundColor: "#e7e7e7"
            }}
            title="Source"
          >
            <RenderIcon width="1.4em" height="1.5em" iconname="gitAlt" />
          </Button>
        </Link>
        <Link
          href={webUrl}
          target="_blank"
          rel="noopener noreferrer"
          color="background"
        >
          <Button
            backgroundColor="white"
            color="text"
            alignSelf="flex-start"
            border="2px solid #e7e7e7"
            m={2}
            _hover={{
              backgroundColor: "#e7e7e7"
            }}
            title="Demo"
          >
            <RenderIcon width="1.4em" height="1.5em" iconname="webIcon" />
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default ProjectInfo
