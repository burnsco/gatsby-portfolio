import { graphql, useStaticQuery } from 'gatsby'
/** @jsx jsx */
import { jsx, Flex, Link } from 'theme-ui'

const TextSocials = () => {
  const { data } = useStaticQuery(graphql`
    {
      data: allSocialsJson {
        nodes {
          iconName
          title
          url
        }
      }
    }
  `)

  return (
    <Flex
      sx={{
        width: '100%',
        fontSize: [0, 1, 2],
        justifyContent: 'space-evenly',
        mt: 2,
      }}
    >
      {data.nodes.map((item, i) => (
        <Link
          key={`TextSocials-${item}-${i}`}
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
}

export default TextSocials
