module.exports = {
  siteMetadata: {
    siteUrl: `https://coreyburns.dev`,
    title: `My Portfolio Site`,
    description: `Contains my projects, skills, a little about me, and contact information`,
    author: `Corey Burns`,
    contact: [
      { name: `Email`, link: `coreyburns@outlook.com` },
      { name: `GitHub`, link: `https://github.com/burnsco` },
      { name: `Telegram`, link: `http://telegram.com` },
      { name: `ICQ`, link: `http://icq.com` }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-preload-link-crossorigin`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter:400,500,700,900,`, `Roboto Slab:900`],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`
      }
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75
      }
    },
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#292a2d`,
        theme_color: `#F39237`,
        display: `minimal-ui`,
        icon: `src/assets/buddha.png`
      }
    }
  ]
}
