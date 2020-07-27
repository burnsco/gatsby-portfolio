/** @jsx jsx */
import { jsx, Flex, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import SectionContainer from '../Container/SectionContainer'
import SocialIcons from '../../components/SocialIcons'
import AnimatedWave from '../../components/AnimatedWave'
import Header from '../../components/Header'

const Hero = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Me.jpg" }) {
        childImageSharp {
          fixed(width: 130, height: 130) {
            base64
            width
            height
            src
            srcSet
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
          background: (theme) => [
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
          sx={{
            objectFit: 'cover',
            objectPosition: '50% 50%',
            WebkitBoxShadow:
              '0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)',
            boxShadow:
              '0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)',
            borderRadius: '9999px',
            transform: `rotate(-35deg)`,
          }}
          fixed={data.file.childImageSharp.fixed}
        />
        <Heading variant="textStyles.display">Corey Burns</Heading>
        <Heading variant="textStyles.subDisplay">Full-stack Developer</Heading>
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
