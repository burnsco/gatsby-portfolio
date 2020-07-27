/** @jsx jsx */
import { jsx, Text, Flex } from 'theme-ui'
import TextSocials from '../../components/SocialIcons/TextSocials'

const Footer = () => (
  <Flex
    as="footer"
    sx={{
      variant: 'layout.footer',
      width: '100%',
      bg: 'eerieblack',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <TextSocials />

    <Text sx={{ color: 'light', p: 2, mt: 3 }}>
      Corey Burns
      <span sx={{ color: 'persianred', fontSize: 0 }}>
        © {new Date().getFullYear()}
      </span>
    </Text>
  </Flex>
)

export default Footer
