/** @jsx jsx */
import { jsx, Text, Flex, Link, Heading } from 'theme-ui'
import PropTypes from 'prop-types'

import CoolButton from '../../components/Buttons/CoolButton'
import RenderIcon from '../../components/SocialIcons/RenderIcon'

const ProjectInfo = ({ description, webUrl, gitUrl, title, builtWith }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      fontSize: [0, 1],
    }}
  >
    {' '}
    <Flex sx={{ my: 2 }}>
      <Heading
        sx={{
          color: 'black',
          fontWeight: '800',
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
    </Flex>
    <Flex sx={{ my: [1, 2] }}>
      <span>Tech:</span>
      {builtWith.map(item => (
        <span sx={{ ml: 2, fontSize: [2, 3] }}>
          <RenderIcon iconName={item.iconName} />
        </span>
      ))}
    </Flex>
    {description.map(p => (
      <Text key={`paragraph-${p.text}`} my="2">
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
          <RenderIcon iconName="gitAlt" />
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
            border: theme => `3px solid ${theme.colors.orangesoda}`,
            m: 2,

            ':hover': {
              bg: 'primaryDark',
              border: theme => `3px solid ${theme.colors.primaryDark}`,
            },
          }}
          title="Demo"
        >
          <RenderIcon iconName="webIcon" />
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
