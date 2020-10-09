import { Box, Button, Flex, Grid, Heading, Link } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import * as React from "react"

export default function MiniAppsCards() {
  const { data } = useStaticQuery(graphql`
    {
      data: allMiniAppsJson {
        nodes {
          title
          webUrl
          gitUrl
          excerpt
          image {
            childImageSharp {
              fluid(fit: CONTAIN) {
                aspectRatio
                base64
                sizes
                src
                srcWebp
                srcSet
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grid gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))">
      {data.nodes.map(
        (
          app: {
            title: string
            webUrl: string
            gitUrl: string
            excerpt: string
            image: {
              childImageSharp: {
                fluid: {
                  aspectRatio: string
                  base64: string
                  sizes: string
                  src: string
                  srcWebp: string
                  srcSet: string
                  srcSetWebp: string
                }
              }
            }
          },
          i: number
        ) => (
          <Box
            display="flex"
            flexDirection="column"
            key={`mini-apps-${app.title}-${i}`}
          >
            <Heading textAlign="center" fontSize={[1, 2, 3]} p={1}>
              {app.title}
            </Heading>

            <Img
              objectFit="cover"
              objectPosition="50% 50%"
              alt="Coins"
              fluid={{ ...app.image.childImageSharp.fluid, aspectRatio: 1 }}
            />

            <Box fontSize={[0, 1]} p={1} flexGrow={2}>
              {app.excerpt}
            </Box>

            <Flex mt={1} justifyContent="space-evenly">
              <Link href={app.gitUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  fontSize={[0, 1]}
                  fontWeight="500"
                  backgroundColor="white"
                  color="text"
                  transition="all 0.3s ease"
                  border="1px solid #e7e7e7"
                  _hover={{
                    backgroundColor: "#e7e7e7"
                  }}
                >
                  Source
                </Button>
              </Link>
              <Link
                href={app.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                color="background"
              >
                <Button
                  fontSize={[0, 1]}
                  fontWeight="500"
                  backgroundColor="white"
                  color="text"
                  transition="all 0.3s ease"
                  _hover={{
                    color: "white",
                    bg: "gray.5"
                  }}
                >
                  Demo
                </Button>
              </Link>
            </Flex>
          </Box>
        )
      )}
    </Grid>
  )
}
