/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import PropTypes from 'prop-types'

const CoolButton = ({ title, children, ...props }) => (
  <Button
    {...props}
    aria-label={title}
    sx={{
      transitionDuration: '0.4s',
      textTransform: 'uppercase',
      cursor: 'pointer',
      fontWeight: 500,
      color: 'white',
      display: 'flex',
      fontFamily: 'Inter',
      justifyContent: 'center',
      alignItems: 'center',
      outline: 'none',
    }}
  >
    {children}
    <span sx={{ ml: 1 }}>{title}</span>
  </Button>
)

CoolButton.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
}

export default CoolButton
