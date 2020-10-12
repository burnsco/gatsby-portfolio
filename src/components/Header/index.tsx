import { Flex, Link } from "@chakra-ui/core"
import * as React from "react"
import { useScrollSections } from "react-scroll-section"
import HeaderContainer from "./HeaderContainer"

const HeaderNew = () => {
  const sections = useScrollSections()
  return (
    <HeaderContainer>
      <Flex
        as="nav"
        role="navigation"
        justifyContent="space-evenly"
        alignItems="center"
        p={[2, 3]}
      >
        {sections.map(({ id, onClick, selected }) => (
          <Link
            key={`section-${id}-link`}
            color={selected ? `accent3` : `white`}
            fontWeight="500"
            _hover={{
              cursor: "pointer"
            }}
            aria-label={id}
            onClick={onClick}
            selected={selected}
          >
            {id}
          </Link>
        ))}
      </Flex>
    </HeaderContainer>
  )
}

export default HeaderNew
