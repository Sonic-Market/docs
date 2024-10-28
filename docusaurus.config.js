// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clober',
  tagline: 'Documentation and Guides',
  url: 'https://docs.clober.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'developers',
          path: 'docs/developers',
          routeBasePath: 'developers/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: 'https://github.com/clober-dex/docs/tree/main/',
          includeCurrentVersion: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          filename: 'sitemap.xml',
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/twitter_card_bg.jpg',
      prism: {
        additionalLanguages: ['solidity'],
      },
      algolia: {
        apiKey: '403cfcb838d3306c2cd5ebc1f06f5ac9',
        indexName: 'docs',
        appId: 'N3RLNMQ10C',
      },
      navbar: {
        title: 'Clober Docs',
        logo: {
          alt: 'Clober',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/concepts/introduction',
            label: 'Concepts',
            position: 'left',
          },
          {
            to: '/developers/overview',
            label: 'Developers',
            position: 'left',
          },
          {
            label: 'Brand Kit',
            to: 'https://clober.notion.site/Brand-Kit-12d394942ff88016ba6cf048298a3e6e',
            position: 'right',
            className: 'persistent',
          },
          {
            label: 'Audit Report',
            to: 'https://github.com/clober-dex/v2-core/blob/master/audits/Clober_V2.pdf',
            position: 'right',
            className: 'persistent',
          },
          {
            href: 'https://github.com/clober-dex',
            label: 'GitHub',
            position: 'right',
            className: 'persistent',
          },
        ],
      },
      footer: {
        // style: "dark",
        links: [
          {
            title: 'Developers',
            items: [
              {
                label: 'Brand Kit',
                href: 'https://clober.notion.site/Brand-Kit-12d394942ff88016ba6cf048298a3e6e',
              },
              {
                label: 'Audit Report',
                href: 'https://github.com/clober-dex/v2-core/blob/master/audits/Clober_V2.pdf',
              },
              {
                label: '#dev-chat',
                href: 'http://clober.io/',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: '@clober-dex',
                href: 'https://github.com/clober-dex',
              }
            ],
          },
          {
            title: 'Product',
            items: [
              {
                label: 'Home',
                href: 'https://clober.io/',
              },
              {
                label: 'App',
                href: 'https://app.clober.io/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/clober-dex',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/clober',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/CloberDEX',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/CloberDEX',
              },
            ],
          },
        ],
        // copyright: `unlicensed`,
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: true,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'concepts',
        path: 'docs/concepts',
        routeBasePath: 'concepts/',
        remarkPlugins: [math],
        rehypePlugins: [katex],
        includeCurrentVersion: true,
      },
    ],
  ],
}

module.exports = config
