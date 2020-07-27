/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import CustomContainer from '../../components/Containers/CustomContainer'
import RenderIcons from '../../components/SocialIcons/RenderIcons'

const RandomFacts = ({ delay, iconname, title, facts }) => (
  <CustomContainer>
    <Heading
      sx={{
        fontSize: [2, 3],
        mb: 2,
      }}
    >
      <RenderIcons iconname={iconname} />
      <span sx={{ ml: 2 }}>{title}</span>
    </Heading>
    <ul sx={{ m: 0, p: 0, fontSize: [0, 1, 2] }}>
      {facts.map((fact) => (
        <li
          data-sal="slide-up"
          key={fact.id}
          data-sal-delay={delay}
          data-sal-easing="ease"
        >
          {fact.title}
        </li>
      ))}
    </ul>
  </CustomContainer>
)

RandomFacts.propTypes = {
  title: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  iconname: PropTypes.string.isRequired,
  facts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default RandomFacts
