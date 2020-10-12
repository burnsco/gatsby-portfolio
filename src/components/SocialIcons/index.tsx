import { Flex } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import RenderIcon from "./RenderIcon"
import SocialLink from "./SocialLink"

const SocialIcons = () => {
  const { data } = useStaticQuery(graphql`
    {
      data: allSocialsJson {
        nodes {
          iconName
          title
          url
        }
      }
    }
  `)
  return (
    <Flex mt={4} ml={8} width="12em" justifyContent="space-evenly">
      {data.nodes.map(
        (item: { title: string; url: string; iconName: string }) => (
          <SocialLink
            key={`SocialLink-${item.title}`}
            name={item.title}
            url={item.url}
          >
            <RenderIcon
              iconname={item.iconName}
              width="1.5em"
              height="1.5em"
              color="white"
            />
          </SocialLink>
        )
      )}
    </Flex>
  )
}

export default SocialIcons
