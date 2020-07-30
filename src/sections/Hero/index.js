/** @jsx jsx */
import { jsx, Flex, Heading } from 'theme-ui'
import Img from 'gatsby-image/withIEPolyfill'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import SectionContainer from '../Container/SectionContainer'
import SocialIcons from '../../components/SocialIcons'
import AnimatedWave from '../../components/AnimatedWave'
import Header from '../../components/Header'

const Hero = ({ title }) => {
  const { data } = useStaticQuery(graphql`
    {
      data: allHeroJson {
        nodes {
          display
          subDisplay
          image {
            childImageSharp {
              fixed(width: 130, height: 130) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  return (
    <SectionContainer id={title} aria-label={title}>
      <Header />
      <Flex
        sx={{
          background: theme => [
            `${theme.colors.eerieblack}`,
            `linear-gradient(${theme.colors.primary}, ${theme.colors.secondary})`,
          ],
          minHeight: '95vh',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Img
          objectFit="cover"
          objectPosition="50% 50%"
          sx={{
            WebkitBoxShadow:
              '0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)',
            boxShadow:
              '0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)',
            borderRadius: '9999px',
            transform: `rotate(-35deg)`,
          }}
          fixed={data.nodes[0].image.childImageSharp.fixed}
        />
        <Heading variant="textStyles.display">{data.nodes[0].display}</Heading>
        <Heading variant="textStyles.subDisplay">
          {data.nodes[0].subDisplay}
        </Heading>
        <SocialIcons />
        <AnimatedWave enableWave bottom />
      </Flex>
    </SectionContainer>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Hero
