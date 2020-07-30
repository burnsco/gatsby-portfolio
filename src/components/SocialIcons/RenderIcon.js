/* eslint-disable no-unused-vars */
import React from 'react'
import { InlineIcon, addIcon } from '@iconify/react'
import PropTypes from 'prop-types'
import reactIcon from '@iconify/icons-logos/react'
import graphqlIcon from '@iconify/icons-logos/graphql'
import reduxIcon from '@iconify/icons-logos/redux'
import gatsbyIcon from '@iconify/icons-logos/gatsby'
import linuxTux from '@iconify/icons-logos/linux-tux'
import tuxIcon from '@iconify/icons-logos/tux'
import javascriptIcon from '@iconify/icons-logos/javascript'
import styledComponents from '@iconify/icons-simple-icons/styled-components'
import webpackIcon from '@iconify/icons-logos/webpack'
import babelIcon from '@iconify/icons-logos/babel'
import html5 from '@iconify/icons-logos/html-5'
import css3 from '@iconify/icons-logos/css-3'
import postcssIcon from '@iconify/icons-logos/postcss'
import tailwindcssIcon from '@iconify/icons-logos/tailwindcss-icon'
import sassIcon from '@iconify/icons-logos/sass'
import apollostackIcon from '@iconify/icons-logos/apollostack'
import bootstrapIcon from '@iconify/icons-logos/bootstrap'
import vueIcon from '@iconify/icons-logos/vue'
import jestIcon from '@iconify/icons-logos/jest'
import nodejsIcon from '@iconify/icons-logos/nodejs'
import postgresqlIcon from '@iconify/icons-logos/postgresql'
import mongodbIcon from '@iconify/icons-logos/mongodb'
import firebaseIcon from '@iconify/icons-logos/firebase'
import webauthIcon from '@iconify/icons-simple-icons/webauthn'
import dockerIcon from '@iconify/icons-logos/docker'
import awsIcon from '@iconify/icons-logos/aws'
import herokuIcon from '@iconify/icons-logos/heroku'
import googleCloud from '@iconify/icons-logos/google-cloud'
import emailIcon from '@iconify/icons-entypo/email'
import telegramIcon from '@iconify/icons-fa-brands/telegram'
import icqIcon from '@iconify/icons-cib/icq'
import gitIcon from '@iconify/icons-cib/git'
import gitAlt from '@iconify/icons-fa-brands/git-alt'
import webIcon from '@iconify/icons-ls/web'
import githubIcon from '@iconify/icons-cib/github'

addIcon('react', reactIcon)
addIcon('gitAlt', gitAlt)
addIcon('webIcon', webIcon)
addIcon('email', emailIcon)
addIcon('gitIcon', gitIcon)
addIcon('telegram', telegramIcon)
addIcon('icq', icqIcon)
addIcon('github', githubIcon)
addIcon('styled', styledComponents)
addIcon('graphql', graphqlIcon)
addIcon('linux', linuxTux)
addIcon('linuxAlt', tuxIcon)
addIcon('javascript', javascriptIcon)
addIcon('redux', reduxIcon)
addIcon('gatsby', gatsbyIcon)
addIcon('webpack', webpackIcon)
addIcon('babel', babelIcon)
addIcon('html', html5)
addIcon('css', css3)
addIcon('postcss', postcssIcon)
addIcon('tailwind', tailwindcssIcon)
addIcon('sass', sassIcon)
addIcon('apollo', apollostackIcon)
addIcon('bootstrap', bootstrapIcon)
addIcon('vue', vueIcon)
addIcon('jest', jestIcon)
addIcon('nodejs', nodejsIcon)
addIcon('postgresql', postgresqlIcon)
addIcon('mongodb', mongodbIcon)
addIcon('firebase', firebaseIcon)
addIcon('auth', webauthIcon)
addIcon('docker', dockerIcon)
addIcon('aws', awsIcon)
addIcon('heroku', herokuIcon)
addIcon('google', googleCloud)

export default function RenderIcon(props) {
  const { iconname } = props
  return <InlineIcon icon={iconname} {...props} />
}

RenderIcon.propTypes = {
  iconname: PropTypes.string.isRequired,
}
