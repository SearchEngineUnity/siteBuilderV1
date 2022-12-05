require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const isProd = process.env.NODE_ENV === 'production';

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://sitebuilderv1.netlify.app', // update to new netlify URL
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-5GLG7DW',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        // includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        // defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME',

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: 'YOUR_SELF_HOSTED_ORIGIN',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Material+Icons`,
              },
              {
                family: `Roboto`,
                variants: [`100`, `300`, `400`, `500`, `700`, `900`],
              },
              {
                family: `Open+Sans`,
                variants: [`300`, `400`, `500`, `600`, `700`, `800`],
              },
            ],
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'yb6s8gw4',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        overlayDrafts: process.env.SANITY_OVERLAY_DRAFTS || !isProd,
        watchMode: !isProd,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-netlify`,
      // options: {
      //   headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
      //   allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
      //   mergeSecurityHeaders: true, // boolean to turn off the default security headers
      //   mergeCachingHeaders: true, // boolean to turn off the default caching headers
      //   transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
      //   generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      // },
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    'gatsby-transformer-sharp',
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*', disallow: ['/404'] }],
            sitemap: `${siteUrl}/sitemap.xml`,
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
};
