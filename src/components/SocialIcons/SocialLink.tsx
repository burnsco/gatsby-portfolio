import { Link } from "@chakra-ui/core"
import * as React from "react"

const SocialLink: React.FC<{
  name: string
  url: string
  top: boolean
  children: React.ReactNode
}> = ({ name, url, children }) => {
  return (
    <Link
      transformOrigin="translate(-50%,-50%)"
      transform="translate(-50%,-50%)"
      height="2.5em"
      width="2.5em"
      borderStyle="solid"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="#fff"
      borderColor="#666"
      background="#3b3d42"
      borderRadius={4}
      transition="all .5s"
      _hover={{
        opacity: 0.9,
        background: "#666;"
      }}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={name}
    >
      {children}
    </Link>
  )
}

export default SocialLink
