/** @jsx jsx */
import { jsx, Flex, Link, Grid, Card, Text, Heading, Button } from 'theme-ui'
import { miniapps } from '../../data/miniapps'
import RenderImages from '../../components/Images/RenderImages'

const MiniAppsCards = () => (
  <Grid
    sx={{
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    }}
  >
    {miniapps.map((app) => (
      <Card
        sx={{ display: 'flex', flexDirection: 'column' }}
        variant="compact"
        key={app.id}
      >
        <Heading sx={{ textAlign: 'center', fontSize: [1, 2, 3], p: 1 }}>
          {app.title}
        </Heading>

        <RenderImages image={app.image} />

        <Text sx={{ fontSize: [0, 1], p: 1, flexGrow: 2 }}>{app.excerpt}</Text>

        <Flex
          sx={{
            mt: 1,
            justifyContent: 'space-evenly',
          }}
        >
          <Link
            href={app.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'background' }}
          >
            <Button
              sx={{
                fontSize: [0, 1],
                fontWeight: 500,
                backgroundColor: 'white',
                color: 'text',
                transition: 'all 0.3s ease',
                border: '1px solid #e7e7e7',
                ':hover': {
                  backgroundColor: '#e7e7e7',
                },
              }}
            >
              Source
            </Button>
          </Link>
          <Link
            href={app.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'background' }}
          >
            <Button
              sx={{
                fontSize: [0, 1],
                fontWeight: 500,
                backgroundColor: 'white',
                color: 'text',
                transition: 'all 0.3s ease',
                border: (theme) => `1px solid ${theme.colors.gray[5]}`,
                ':hover': {
                  color: 'white',
                  bg: 'gray.5',
                },
              }}
            >
              Demo
            </Button>
          </Link>
        </Flex>
      </Card>
    ))}
  </Grid>
)

export default MiniAppsCards
