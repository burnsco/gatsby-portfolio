/** @jsx jsx */
import { jsx, Flex, Link } from 'theme-ui'

const socials = [
  { id: 'social-email', url: 'mailto:coreyburns@outlook.com', title: 'Email' },
  {
    id: 'social-github',
    url: 'https://www.github.com/burnsco',
    title: 'Github',
  },
  {
    id: 'social-telegram',
    url: 'https://t.me/coreyburns',
    title: 'Telegram',
  },
  { id: 'social-icq', url: 'https://icq.im/767901533', title: 'ICQ' },
]

const TextSocials = () => (
  <Flex
    sx={{
      width: '100%',
      fontSize: [0, 1, 2],
      justifyContent: 'space-evenly',
      mt: 2,
    }}
  >
    {socials.map((item) => (
      <Link
        key={item.id}
        sx={{
          textDecoration: 'none',
          color: 'indigo.4',
          '&:hover': {
            color: 'indigo.2',
          },
        }}
        id={item.id}
        href={item.url}
        target="_blank"
        rel="noreferrer noopen"
      >
        {item.title}
      </Link>
    ))}
  </Flex>
)

export default TextSocials
