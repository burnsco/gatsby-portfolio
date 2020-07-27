import React from 'react'
import { Link } from 'theme-ui'
import Tippy from '@tippyjs/react'
import PropTypes from 'prop-types'
import "tippy.js/dist/tippy.css" // eslint-disable-line

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
        width: '2.5em',
        height: '2.5em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        WebkitTransition: 'all 0.3s ease 0s',
        MozTransition: 'all 0.3s ease 0s',
        OTransition: 'all 0.3s ease 0s',
        transition: 'all 0.3s ease 0s',
        border: '2px dashed rgba(169, 84,  3,1)',
        borderRadius: '50%',
        m: 2,
        color: 'muted',
        '&:hover': {
          borderColor: 'accent3',
          WebkitTransition: 'all 0.3s ease 0s',
          MozTransition: 'all 0.3s ease 0s',
          OTransition: 'all 0.3s ease 0s',
          transition: 'all 0.3s ease 0s',
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
