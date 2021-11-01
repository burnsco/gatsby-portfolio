/** @jsx jsx */
import { useScrollSections } from 'react-scroll-section'
import { Flex, jsx, NavLink } from 'theme-ui'
import HeaderContainer from './HeaderContainer'

export default function HeaderNew() {
  const sections = useScrollSections()

  return (
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
        {sections.map(({ id, onClick, selected }) => (
          <NavLink
            id={id}
            selected={selected}
            sx={{
              fontSize: [0, 1, 2],
              color: selected ? `accent3` : `white`,
              fontWeight: 500,
              ':hover': {
                cursor: 'pointer',
              },
              fontColor: selected && `accent4`,
            }}
            aria-label={id}
            onClick={onClick}
          >
            {id}
          </NavLink>
        ))}
      </Flex>
    </HeaderContainer>
  )
}
