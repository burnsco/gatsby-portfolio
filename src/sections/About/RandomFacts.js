import { graphql, useStaticQuery } from 'gatsby'
/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import CustomContainer from '../../components/Containers/CustomContainer'
import RenderIcon from '../../components/SocialIcons/RenderIcon'

export default function RandomFacts() {
  const { data } = useStaticQuery(graphql`
    {
      data: allRandomFactsJson {
        nodes {
          delay
          iconName
          title
          facts {
            title
          }
        }
      }
    }
  `)

  return (
    <CustomContainer>
      <Heading
        sx={{
          fontSize: [2, 3],
          mb: 2,
        }}
      >
        <RenderIcon iconName={data.nodes[0].iconName} />
        <span sx={{ ml: 2 }}>{data.nodes[0].title}</span>
      </Heading>
      <ul sx={{ m: 0, p: 0, fontSize: [0, 1, 2] }}>
        {data.nodes[0].facts.map(fact => (
          <li
            data-sal="slide-up"
            key={fact.id}
            data-sal-delay={data.nodes[0].delay}
            data-sal-easing="ease"
          >
            {fact.title}
          </li>
        ))}
      </ul>
    </CustomContainer>
  )
}
