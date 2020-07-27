/** @jsx jsx */
import { jsx, Flex, NavLink } from 'theme-ui'
import { SectionLink } from 'react-scroll-section'
import HeaderContainer from './HeaderContainer'

const sections = ['Home', 'Skills', 'Projects', 'About', 'Contact']

const HeaderNew = () => (
  <HeaderContainer>
    <Flex
      as="nav"
      role="navigation"
      sx={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        p: [1, 2, 3],
      }}
    >
      {sections.map((section) => (
        <SectionLink section={section} key={`${section}`}>
          {({ onClick, isSelected }) => (
            <NavLink
              sx={{
                fontSize: ['10px', 0, 1, 2],
                color: isSelected ? `accent3` : `#A9A9B3`,
                textTransform: 'uppercase',
                fontWeight: 500,
                ':hover': {
                  cursor: 'pointer',
                },
                fontColor: isSelected && `accent4`,
              }}
              aria-label={section}
              onClick={onClick}
              selected={isSelected}
            >
              {section}
            </NavLink>
          )}
        </SectionLink>
      ))}
    </Flex>
  </HeaderContainer>
)

export default HeaderNew
