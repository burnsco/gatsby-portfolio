/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

const styles = {
  position: 'absolute',
  top: 'unset',
  width: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
  userSelect: 'none',
}

export const imageQuery = graphql`
  fragment imageQuery on File {
    childImageSharp {
      fluid {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
`

const RenderImages = ({ image }) => {
  const data = useStaticQuery(graphql`
    query {
      coins: file(relativePath: { eq: "coins.jpg" }) {
        ...imageQuery
      }
      dice: file(relativePath: { eq: "dice2.jpeg" }) {
        ...imageQuery
      }
      lottery: file(relativePath: { eq: "lottery.jpg" }) {
        ...imageQuery
      }
      luggage: file(relativePath: { eq: "luggage.jpg" }) {
        ...imageQuery
      }
      monsters: file(relativePath: { eq: "monsters.jpg" }) {
        ...imageQuery
      }
      pizza: file(relativePath: { eq: "pizza.jpg" }) {
        ...imageQuery
      }
    }
  `)
  if (image === 'dice')
    return (
      <Img
        objectFit="cover"
        objectPosition="50% 50%"
        alt="Dice"
        sx={{
          ...styles,
        }}
        fluid={{ ...data.dice.childImageSharp.fluid, aspectRatio: 1 }}
      />
    )
  if (image === 'coins')
    return (
      <Img
        objectFit="cover"
        objectPosition="50% 50%"
        alt="Coins"
        sx={{
          ...styles,
        }}
        fluid={{ ...data.coins.childImageSharp.fluid, aspectRatio: 1 }}
      />
    )
  if (image === 'lottery')
    return (
      <Img
        objectFit="cover"
        objectPosition="50% 50%"
        alt="Lottery"
        sx={{
          ...styles,
        }}
        fluid={{ ...data.lottery.childImageSharp.fluid, aspectRatio: 1 }}
      />
    )
  if (image === 'luggage')
    return (
      <Img
        objectFit="cover"
        objectPosition="50% 50%"
        alt="Luggage"
        sx={{
          ...styles,
        }}
        fluid={{ ...data.luggage.childImageSharp.fluid, aspectRatio: 1 }}
      />
    )
  if (image === 'monsters')
    return (
      <Img
        objectFit="cover"
        objectPosition="50% 50%"
        alt="Monsters"
        sx={{
          ...styles,
        }}
        fluid={{ ...data.monsters.childImageSharp.fluid, aspectRatio: 1 }}
      />
    )
  if (image === 'pizza')
    return (
      <Img
        objectFit="cover"
        objectPosition="50% 50%"
        alt="Pizza"
        sx={{
          ...styles,
        }}
        fluid={{ ...data.pizza.childImageSharp.fluid, aspectRatio: 1 }}
      />
    )

  return null
}

RenderImages.propTypes = {
  image: PropTypes.string,
}

export default RenderImages
