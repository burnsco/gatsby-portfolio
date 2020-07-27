/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Icon } from '@iconify/react'
import emailIcon from '@iconify/icons-entypo/email'
import icqIcon from '@iconify/icons-brandico/icq'
import githubIcon from '@iconify/icons-fa-brands/github'
import telegramIcon from '@iconify/icons-fa-brands/telegram'
import SocialLink from './SocialLink'

const SocialIcons = (props) => (
  // TODO fix tippy position when its in top position
  <div
    sx={{
      display: 'flex',
      mt: 2,
    }}
  >
    <SocialLink name="E-mail" url="mailto:coreyburns@outlook.com" {...props}>
      <Icon icon={emailIcon} width="2em" height="2em" />
    </SocialLink>
    <SocialLink name="Github" url="https://www.github.com/burnsco" {...props}>
      <Icon icon={githubIcon} width="2em" height="2em" />
    </SocialLink>
    <SocialLink name="Telegram" url="https://t.me/coreyburns" {...props}>
      <Icon icon={telegramIcon} width="2em" height="2em" />
    </SocialLink>
    <SocialLink name="ICQ" url="https://icq.im/767901533" {...props}>
      <Icon icon={icqIcon} width="2em" height="2em" />
    </SocialLink>
  </div>
)

export default SocialIcons
