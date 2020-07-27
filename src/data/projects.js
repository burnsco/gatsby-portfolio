import redditdemo from '../assets/redditclonedemo.webm'
import quikeatsdemo from '../assets/quikeatsdemo.webm'

export const projects = [
  {
    id: 'reddit-clone-project',
    title: 'Reddit Clone',
    section: 'Projects',
    webUrl: 'https://reddit-frontend.now.sh',
    gitUrl: 'https://github.com/burnsco/reddit-clone',
    description: [
      {
        id: 'project1-paragraph-1',
        text:
          'As the title implies, this is a basic clone of reddit, created in order to learn a bunch cool libraries/technology I had wanted to check out for a while. ',
      },

      {
        id: 'project1-paragraph-2',
        text:
          'The front-end was built using react, hooks, apollo client, styled-components and styled-system. I love React, and hooks make it even better.  Apollo seemed to be most gentle introduction to using graphql and styled-components/system makes designing your UI and writing CSS a lot more fun! (i.e. media queries using an array of values)',
      },
      {
        id: 'project1-paragraph-3',
        text:
          'The back-end was created using nodejs, express, apollo server and prisma to interface with the postgres db.  Implemented my own authentication system (jwt) that uses refresh tokens (cookies) and does not store any user information in local storage.  I added subscriptions for posts and comments, though I later discovered it was unnecessary as you can just add polling to your queries and achieve the same result.  I was glad I did as it was quite a challenge and it would be useful if I choose add chat rooms at some point.',
      },
    ],

    builtWith: [
      { id: `p2-built-with-fe-1`, iconname: 'React' },
      { id: `p2-built-with-fe-4`, iconname: 'JS' },
      { id: `p2-built-with-fe-6`, iconname: 'Styled Components' },
      { id: `p2-built-with-fe-7`, iconname: 'Webpack' },
      { id: `p2-built-with-fe-8`, iconname: 'Babel' },
      { id: `p2-built-with-fe-9`, iconname: 'HTML5' },
      { id: `p2-built-with-fe-10`, iconname: 'CSS5' },
      { id: `p2-built-with-fe-12`, iconname: 'Apollo' },
      { id: `p2-built-with-be-1`, iconname: 'NodeJS' },
      { id: `p2-built-with-be-2`, iconname: 'PostgresQL' },
      { id: `p2-built-with-be-3`, iconname: 'Apollo' },
      { id: `p2-built-with-be-4`, iconname: 'Graphql' },
      { id: `p2-built-with-be-6`, iconname: 'JWT/Auth' },
      { id: `p2-built-with-de-1`, iconname: 'Docker' },
      { id: `p2-built-with-de-2`, iconname: 'Linux' },
      { id: `p2-built-with-de-5`, iconname: 'Google Cloud' },
    ],

    video: redditdemo,
  },
  {
    id: 'ubereats-clone-project',
    title: 'UberEats Clone',
    section: 'Projects',
    webUrl: 'https://quickeats-react.now.sh',
    gitUrl: 'https://github.com/burnsco/quickeats-react',
    description: [
      {
        id: 'project2-paragraph-1',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi unde nulla optio pariatur cumque quo laboriosam accusantium maiores magnam!',
      },

      {
        id: 'project2-paragraph-2',
        text:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, hic! Et natus nam aspernatur nobis architecto ipsa, asperiores nulla sint quisquam facere rerum deserunt voluptatem alias debitis excepturi molestiae ipsam.',
      },
    ],

    builtWith: [
      { id: `p1-built-with-fe-1`, iconname: 'React' },
      { id: `p1-built-with-fe-2`, iconname: 'Redux' },
      { id: `p1-built-with-fe-4`, iconname: 'JS' },
      { id: `p1-built-with-fe-6`, iconname: 'Styled Components' },
      { id: `p1-built-with-fe-7`, iconname: 'Webpack' },
      { id: `p1-built-with-fe-8`, iconname: 'Babel' },
      { id: `p1-built-with-fe-9`, iconname: 'HTML5' },
      { id: `p1-built-with-fe-10`, iconname: 'CSS5' },
      { id: `p1-built-with-fe-11`, iconname: 'SASS' },
      { id: `p1-built-with-be-8`, iconname: 'Firebase' },
    ],
    video: quikeatsdemo,
  },
]
