require("typeface-roboto-slab")
require("typeface-inter")

import { ChakraProvider } from "@chakra-ui/core"
import React from "react"
import theme from "./src/styles/theme.ts"

export const wrapRootElement = ({ element }) => (
  <ChakraProvider resetCSS theme={theme}>
    {element}
  </ChakraProvider>
)
