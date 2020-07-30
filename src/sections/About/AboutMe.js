import { graphql, useStaticQuery } from 'gatsby'
/** @jsx jsx */
import { jsx, Heading, Text, Flex } from 'theme-ui'
import CustomContainer from '../../components/Containers/CustomContainer'
import RenderIcon from '../../components/SocialIcons/RenderIcon'

export default function AboutMe() {
  const { data } = useStaticQuery(graphql`
    {
      data: allMoreAboutMeJson {
        nodes {
          delay
          iconName
          title
          excerpt {
            text
          }
        }
      }
    }
  `)
  return (
    <Flex sx={{ flexDirection: 'column', flexWrap: 'wrap' }}>
      <CustomContainer>
        <Heading
          data-sal="slide-right"
          data-sal-delay={data.nodes[0].delay}
          data-sal-easing="ease"
          sx={{
            fontSize: [2, 3],
            mb: 2,
          }}
        >
          <RenderIcon iconName={data.nodes[0].iconName} />
          <span sx={{ ml: 2 }}>{data.nodes[0].title}</span>
        </Heading>

        {data.nodes[0].excerpt.map(paragraph => (
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
}
