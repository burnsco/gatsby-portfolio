/** @jsx jsx */
import { jsx, Heading, Badge, Grid } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import RenderIcons from '../../components/SocialIcons/RenderIcons'
import CustomContainer from '../../components/Containers/CustomContainer'

export default function MySkills() {
  const { data } = useStaticQuery(graphql`
    {
      data: allMySkillsJson {
        nodes {
          delay
          iconName
          title
          skills {
            title
          }
        }
      }
    }
  `)

  return (
    <Grid
      sx={{
        height: '100%',
      }}
    >
      {data.nodes.map((item, i) => (
        <CustomContainer>
          <ul sx={{ m: 0, p: 0, listStyleType: 'none' }}>
            <li
              key={`my-skills-${item.title}-${i}`}
              data-sal="slide-up"
              data-sal-delay={item.delay}
              data-sal-easing="ease"
            >
              <Heading
                sx={{
                  fontSize: [2, 3],
                  mb: 1,
                }}
              >
                <RenderIcons iconname={item.iconName} />
                <span sx={{ ml: 2 }}>{item.title}</span>
              </Heading>

              {item.skills.map((skill) => (
                <Badge
                  key={`MySkills-${i}`}
                  variant="outline"
                  sx={{ m: [0, 1] }}
                >
                  <small sx={{ fontSize: ['8px', '10px'], color: 'black' }}>
                    {skill.title}
                  </small>
                </Badge>
              ))}
            </li>
          </ul>
        </CustomContainer>
      ))}
    </Grid>
  )
}
