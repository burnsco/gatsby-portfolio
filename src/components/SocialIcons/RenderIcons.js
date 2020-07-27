/* eslint-disable react/display-name */
import React from 'react'
import { InlineIcon } from '@iconify/react'
import PropTypes from 'prop-types'
import reactIcon from '@iconify/icons-logos/react'
import graphqlIcon from '@iconify/icons-logos/graphql'
import linuxTux from '@iconify/icons-logos/linux-tux'
import javascriptIcon from '@iconify/icons-logos/javascript'

const logos = {
  react: () => <InlineIcon icon={reactIcon} />,
  graphql: () => <InlineIcon icon={graphqlIcon} />,
  linux: () => <InlineIcon icon={linuxTux} />,
  javascript: () => <InlineIcon icon={javascriptIcon} />,
}

function RenderIcons({ iconname }) {
  const SelectedIcon = logos[iconname]
  return <SelectedIcon />
}

RenderIcons.propTypes = {
  iconname: PropTypes.string.isRequired,
}

export default RenderIcons
