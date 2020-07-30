/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import SocialLink from './SocialLink'
import RenderIcon from './RenderIcon'

const SocialIcons = () => {
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
    <div
      sx={{
        display: 'flex',
        mt: 2,
      }}
    >
      {data.nodes.map(item => (
        <SocialLink
          key={`SocialLink-${item.title}`}
          name={item.title}
          url={item.url}
        >
          <RenderIcon
            iconname={item.iconName}
            width="2em"
            height="2em"
            color="white"
          />
        </SocialLink>
      ))}
    </div>
  )
}

export default SocialIcons
