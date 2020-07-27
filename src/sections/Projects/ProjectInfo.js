/** @jsx jsx */
import { jsx, Text, Flex, Link, Heading, Badge } from 'theme-ui'
import PropTypes from 'prop-types'

import { InlineIcon } from '@iconify/react'
import gitAlt from '@iconify/icons-fa-brands/git-alt'
import webIcon from '@iconify/icons-ls/web'
import CoolButton from '../../components/Buttons/CoolButton'

const ProjectInfo = ({ description, webUrl, gitUrl, title, builtWith }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      fontSize: [0, 1],
    }}
  >
    {' '}
    <Heading
      sx={{
        color: 'black',
        fontWeight: '800',
        my: 2,
      }}
    >
      <span
        sx={{
          color: 'blackolive',
        }}
      >
        {title}
      </span>
    </Heading>
    <Text sx={{ mb: [1, 2] }}>
      {builtWith.map((item) => (
        <Badge key={item.id} variant="outline" sx={{ m: [0, 1] }}>
          <small sx={{ fontSize: ['8px', '10px'], color: 'black' }}>
            {item.iconname}
          </small>
        </Badge>
      ))}
    </Text>
    {description.map((p) => (
      <Text key={p.id} my="2">
        {p.text}
      </Text>
    ))}
    <Flex
      sx={{
        mt: 3,
        justifyContent: 'space-evenly',
      }}
    >
      <Link
        href={gitUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'background' }}
      >
        <CoolButton
          sx={{
            fontSize: [0, 1],
            backgroundColor: 'white',
            color: 'text',
            alignSelf: 'flex-start',
            border: '2px solid #e7e7e7',
            m: 2,

            ':hover': {
              backgroundColor: '#e7e7e7',
            },
          }}
          title="Source"
        >
          <InlineIcon width="1.5em" height="1.5em" icon={gitAlt} />
        </CoolButton>
      </Link>
      <Link
        href={webUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'background' }}
      >
        <CoolButton
          sx={{
            fontSize: [0, 1],
            backgroundColor: 'orangesoda',
            color: 'white',
            border: (theme) => `3px solid ${theme.colors.orangesoda}`,
            m: 2,

            ':hover': {
              bg: 'primaryDark',
              border: (theme) => `3px solid ${theme.colors.primaryDark}`,
            },
          }}
          title="Demo"
        >
          <InlineIcon width="1.3em" height="1.3em" icon={webIcon} />
        </CoolButton>
      </Link>
    </Flex>
  </Flex>
)

ProjectInfo.propTypes = {
  builtWith: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.object).isRequired,
  webUrl: PropTypes.string.isRequired,
  gitUrl: PropTypes.string.isRequired,
}

export default ProjectInfo
