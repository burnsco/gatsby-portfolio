/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'

const AboutHeading = () => (
  <Heading
    data-sal="fade"
    data-sal-delay="300"
    data-sal-easing="ease-out-back"
    sx={{
      color: 'blackolive',
      overflow: 'hidden',
      textAlign: 'center',
      fontSize: [7, 8],
      fontFamily: 'Roboto Slab',
      fontWeight: 900,
      my: 2,
    }}
    variant="textStyles.projectTitle"
  >
    <span
      sx={{
        color: 'blackolive',
        backgroundImage:
          'linear-gradient(to right, rgb(250, 112, 154) 0%, rgb(254, 225, 64) 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 0.2em',
        backgroundPosition: '0 88%',
        transition: 'background-size 0.25s ease-in',
        '&:hover': {
          backgroundSize: '100% 88%',
        },
      }}
    >
      About
    </span>
  </Heading>
)

export default AboutHeading
