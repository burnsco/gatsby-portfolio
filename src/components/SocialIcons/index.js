/** @jsx jsx */
import { jsx } from 'theme-ui'
import SocialLink from './SocialLink'
import { socials } from '../../data/socials'
import RenderIcon from './RenderIcon'

const SocialIcons = props => (
  <div
    sx={{
      display: 'flex',
      mt: 2,
    }}
  >
    {socials.map(item => (
      <SocialLink
        key={`SocialLink-${item.title}`}
        name={item.title}
        url={item.url}
        {...props}
      >
        <RenderIcon
          iconName={item.iconName}
          width="2em"
          height="2em"
          color="white"
        />
      </SocialLink>
    ))}
  </div>
)

export default SocialIcons
