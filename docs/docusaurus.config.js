// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NodeSignals',
  tagline: 'Node.js Signal Implementation Similar To Roblox\'s Signals',
  url: 'https://codedjimmy.github.io',
  baseUrl: '/NodeSignals',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CodedJimmy', // Usually your GitHub org/user name.
  projectName: 'NodeSignals', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
        out: "api",
        readme: "none"
      },
    ],
    [
      require.resolve('docusaurus-lunr-search'),
      {
      },
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark"
      },
      navbar: {
        title: 'NodeSignals',
        logo: {
          alt: 'Logo',
          src: 'img/NodeSignalsLogo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Intro',
            position: 'left',
            label: 'Intro',
          },
          {
            type: 'doc',
            docId: 'api/index',
            position: 'left',
            label: 'API',
          },
          //{ to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/CodedJimmy/nodesignals',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'API',
                to: '/docs/API',
              },
            ],
          },
          {
            title: 'Creator\'s Socials',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/CodedJimmy',
              }
            ],
          },
          {
            title: 'More',
            items: [
              /*
              {
                label: 'Blog',
                to: '/blog',
              },
              */
              {
                label: 'GitHub',
                href: 'https://github.com/CodedJimmy/nodesignals',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CodedJimmy, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
