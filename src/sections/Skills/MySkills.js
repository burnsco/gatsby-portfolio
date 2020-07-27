/** @jsx jsx */
import { jsx, Heading, Badge } from 'theme-ui'
import PropTypes from 'prop-types'
import RenderIcons from '../../components/SocialIcons/RenderIcons'

const MySkills = ({ delay, iconname, title, skills }) => (
  <ul sx={{ m: 0, p: 0, listStyleType: 'none' }}>
    <li data-sal="slide-up" data-sal-delay={delay} data-sal-easing="ease">
      <Heading
        sx={{
          fontSize: [2, 3],
          mb: 1,
        }}
      >
        <RenderIcons iconname={iconname} />
        <span sx={{ ml: 2 }}>{title}</span>
      </Heading>

      {skills.map((skill) => (
        <Badge key={skill.id} variant="outline" sx={{ m: [0, 1] }}>
          <small sx={{ fontSize: ['8px', '10px'] }}>{skill.title}</small>
        </Badge>
      ))}
    </li>
  </ul>
)

MySkills.propTypes = {
  title: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  iconname: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default MySkills
