const src = 'src';
const src_dir = `${__dirname}/${src}`;
const theme = require(`${src_dir}/styles/jss.js`).theme;

module.exports = {
  siteMetadata: {
    title: 'Pandas',
    description: 'Pandas love eating bamboo.',
    author: 'Ronald Macmaster <ronnymacmaster@gmail.com>',
  },

  plugins: [
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${src}/images`,
      },
    },

    {
      resolve: 'gatsby-plugin-jss',
      options: { theme },
    },

    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `${src}/styles/typography.js`,
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/sweden.svg',
        icons: [{
          src: '/favicon/sweden-48x48.svg',
          sizes: '48x48',
          type: 'image/svg+xml',
        }],
      },
    },

    `gatsby-plugin-offline`,
  ],
}
