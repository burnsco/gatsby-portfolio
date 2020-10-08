import { Flex, Link } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"

const TextSocials = () => {
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
    <Flex
      width="100%"
      fontSize={[0, 1, 2]}
      justifyContent="space-evenly"
      mt={2}
    >
      {data.nodes.map((item: { title: string; url: string }, i: number) => (
        <Link
          key={`TextSocials-${item}-${i}`}
          textDecoration="none"
          color="orange"
          _hover={{
            color: "red"
          }}
          id={`TextSocialLink-${item.title}`}
          href={item.url}
          target="_blank"
          rel="noreferrer noopen"
        >
          {item.title}
        </Link>
      ))}
    </Flex>
  )
}

export default TextSocials
