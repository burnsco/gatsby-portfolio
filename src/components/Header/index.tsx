import { Flex, Link } from "@chakra-ui/core"
import * as React from "react"
import HeaderContainer from "./HeaderContainer"

const sections = ["Home", "Skills", "Projects", "About", "Contact"]

const HeaderNew = () => (
  <HeaderContainer>
    <Flex
      as="nav"
      role="navigation"
      justifyContent="space-evenly"
      alignItems="center"
      p={[1, 2, 3]}
    >
      {sections.map(section => (
        <SectionLink section={section} key={`${section}`}>
          {({ onClick, isSelected }) => (
            <Link
              
                fontSize={[0, 1, 2]}
                color={isSelected ? `accent3` : `white`}
                fontWeight="500"
                _hover={{
                  cursor: "pointer",
                }}
                fontColor={isSelected && `accent4`}
              }}
              aria-label={section}
              onClick={onClick}
              selected={isSelected}
            >
              {section}
            </Link>
          )}
        </SectionLink>
      ))}
    </Flex>
  </HeaderContainer>
)

export default HeaderNew
