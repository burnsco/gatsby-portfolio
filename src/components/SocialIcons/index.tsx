import { Flex, Link } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import RenderIcon from "./RenderIcon"

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
    <Flex mt={4} ml={4} width="12em" justifyContent="space-evenly">
      {data.nodes.map(
        (item: { title: string; url: string; iconName: string }) => (
          <Link
            key={`SocialLink-${item.title}`}
            name={item.title}
            href={item.url}
          >
            <RenderIcon
              iconname={item.iconName}
              width="1.5em"
              height="1.5em"
              color="white"
            />
          </Link>
        )
      )}
    </Flex>
  )
}

export default SocialIcons
