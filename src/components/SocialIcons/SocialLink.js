import React from 'react'
import { Link } from 'theme-ui'
import Tippy from '@tippyjs/react'
import PropTypes from 'prop-types'
import 'tippy.js/dist/tippy.css' // eslint-disable-line

// TODO fix social media icons to look nicer

const SocialLink = ({ name, url, top, children }) => (
  <Tippy
    content={name}
    placement={top ? 'top' : 'bottom'}
    trigger="mouseenter"
    arrow
  >
    <Link
      sx={{
        MsTransform: 'translate(-50%,-50%)',
        WebkitTransform: 'translate(-50%,-50%)',
        transform: 'translate(-50%,-50%)',
        height: '2.5em',
        width: '2.5em',
        borderStyle: 'solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        borderColor: '#666',
        background: '#3b3d42',
        borderRadius: 4,
        OTransition: 'all .5s',
        WebkitTransition: 'all .5s',
        MozTransition: 'all .5s',
        transition: 'all .5s',
        WebkitFontSmoothing: 'antialiased',
        '&:hover': {
          opacity: 0.9,
          background: '#666;',
        },
      }}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={name}
    >
      {children}
    </Link>
  </Tippy>
)

SocialLink.propTypes = {
  top: PropTypes.bool,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default SocialLink
