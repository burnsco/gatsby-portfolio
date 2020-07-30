/** @jsx jsx */
import { jsx, Flex, Link } from 'theme-ui'
import socials from '../../data/socials.json'

const TextSocials = () => (
  <Flex
    sx={{
      width: '100%',
      fontSize: [0, 1, 2],
      justifyContent: 'space-evenly',
      mt: 2,
    }}
  >
    {socials.map(item => (
      <Link
        key={item.id}
        sx={{
          textDecoration: 'none',
          color: 'orange',
          '&:hover': {
            color: 'red',
          },
        }}
        id={`TextSocialLink-${item.title}`}
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
