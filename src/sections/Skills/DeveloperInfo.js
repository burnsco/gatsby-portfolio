/** @jsx jsx */
import { jsx, Heading, Text, Flex } from 'theme-ui'
import PropTypes from 'prop-types'
import RenderIcons from '../../components/SocialIcons/RenderIcons'

const DeveloperInfo = ({ delay, iconname, title, excerpt }) => (
  <Flex sx={{ flexDirection: 'column', flexWrap: 'wrap' }}>
    <Heading
      data-sal="slide-left"
      data-sal-delay={delay}
      data-sal-easing="ease"
      sx={{
        fontSize: [2, 3],
        mb: 2,
      }}
    >
      <RenderIcons iconname={iconname} />
      <span sx={{ ml: 2 }}>{title}</span>
    </Heading>

    {excerpt.map((paragraph) => (
      <Text
        key={paragraph.id}
        sx={{
          fontSize: [0, 1],
        }}
      >
        {paragraph.text}
      </Text>
    ))}
  </Flex>
)

DeveloperInfo.propTypes = {
  delay: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.arrayOf(PropTypes.object).isRequired,
  iconname: PropTypes.string.isRequired,
}

export default DeveloperInfo
