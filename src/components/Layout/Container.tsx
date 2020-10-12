import { Box, BoxProps } from "@chakra-ui/core"
import React from "react"

export const Container = (props: BoxProps) => (
  <Box w="full" mx={["1em", "2em"]} maxW="1200px" {...props} />
)

export default Container
