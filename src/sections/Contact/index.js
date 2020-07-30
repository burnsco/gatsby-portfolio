/** @jsx jsx */
import { jsx, Flex, Input, Textarea, Label, Box, Heading } from 'theme-ui'
import { InlineIcon } from '@iconify/react'
import mailOpen from '@iconify/icons-heroicons-outline/mail-open'
import PropTypes from 'prop-types'
import SectionContainer from '../Container/SectionContainer'
import CoolButton from '../../components/Buttons/CoolButton'

const Contact = ({ title }) => (
  <SectionContainer id={title} aria-label={title}>
    <Box sx={{ variant: 'layout.contact' }}>
      <Flex
        sx={{
          width: '100%',
          flexDirection: 'column',
          px: 3,
          py: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Heading
          variant="textStyles.projectTitle"
          sx={{
            display: 'flex',
            fontSize: [7, 8],
            fontFamily: 'Roboto Slab',
            color: 'white',
            width: '100',
            flexWrap: 'wrap',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          Contact
        </Heading>
        <Flex
          sx={{
            width: ['95%', '75%', '65%', '50%'],
            flexDirection: 'column',
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
          }}
          as="form"
          name="contact"
          method="POST"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <Label htmlFor="name">Name</Label>
          <Input required id="name" type="text" name="name" />

          <Label htmlFor="email">Email</Label>
          <Input required id="email" type="email" name="email" />

          <Label htmlFor="message">Message</Label>
          <Textarea required id="message" name="message" rows="6" />

          <CoolButton
            sx={{
              cursor: `pointer`,
              fontSize: `100%`,
              lineHeight: `inherit`,
              alignSelf: 'flex-end',
              mt: 2,
              bg: 'blueDark',
              ':hover': { bg: 'carolinablue' },
            }}
            title="Send"
            type="submit"
          >
            <InlineIcon icon={mailOpen} height="1.2em" width="1.2em" />
          </CoolButton>
        </Flex>
      </Flex>
    </Box>
  </SectionContainer>
)

Contact.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Contact
