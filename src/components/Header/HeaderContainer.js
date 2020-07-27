/** @jsx jsx */
import { jsx } from 'theme-ui'
import Headroom from 'react-headroom'

const HeaderContainer = (props) => (
  <Headroom
    style={{
      zIndex: '9999',
    }}
    sx={{
      zIndex: '9999',
      bg: 'primary',
      '*': {
        transition: 'background-color 0.1s ease',
      },

      '.headroom--pinned': {
        bg: 'primary',
        zIndex: '9999',
      },
      width: '100%',
    }}
    {...props}
  />
)

export default HeaderContainer
