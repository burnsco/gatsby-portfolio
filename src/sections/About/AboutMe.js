/** @jsx jsx */
import { jsx, Heading, Text, Flex } from 'theme-ui'
import PropTypes from 'prop-types'
import CustomContainer from '../../components/Containers/CustomContainer'
import RenderIcons from '../../components/SocialIcons/RenderIcons'

const AboutMe = ({ delay, iconname, title, excerpt }) => (
  <Flex sx={{ flexDirection: 'column', flexWrap: 'wrap' }}>
    <CustomContainer>
      <Heading
        data-sal="slide-right"
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
    </CustomContainer>
  </Flex>
)

AboutMe.propTypes = {
  delay: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.arrayOf(PropTypes.object).isRequired,
  iconname: PropTypes.string.isRequired,
}

export default AboutMe
