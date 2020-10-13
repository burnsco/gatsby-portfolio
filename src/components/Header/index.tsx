import { Flex, Link } from "@chakra-ui/core"
import * as React from "react"
import { useScrollSections } from "react-scroll-section"
import HeaderContainer from "./Container"

const Header = () => {
  const sections = useScrollSections()
  return (
    <HeaderContainer>
      <Flex
        as="nav"
        role="navigation"
        justifyContent="space-evenly"
        alignItems="center"
        p={[4, 5]}
      >
        {sections.map(({ id, onClick, selected }) => (
          <Link
            key={`section-${id}-link`}
            color={selected ? `rgba(255,172, 93,1)` : `white`}
            fontFamily="Inter"
            fontWeight="500"
            _hover={{
              cursor: "pointer",
              color: "rgba(255,172, 93,1)"
            }}
            aria-label={id}
            onClick={onClick}
          >
            {id}
          </Link>
        ))}
      </Flex>
    </HeaderContainer>
  )
}

export default Header
