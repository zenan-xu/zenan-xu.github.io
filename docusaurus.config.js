// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zenan XU',
  tagline: 'A software engineer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zenan-xu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'zenan-xu',
  projectName: 'zenan-xu.github.io',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-TSGJCGFXLW',
          anonymizeIP: true,
        },
        docs: {
          path: 'notes',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/zenan-xu/zenan-xu.github.io/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/zenan-xu/zenan-xu.github.io/tree/main',
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
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //       'test <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
      image: 'img/icon.jpg',
      navbar: {
        title: 'Zenan',
        logo: {
          alt: 'Zenan Site Logo',
          src: 'img/icon.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Notes',
          },
          {
            href: "https://github.com/zenan-xu",
            position: "right",
            className: "header-link header-github-link"
          },
          {
            href: "https://www.linkedin.com/in/zenan-xu15",
            position: "right",
            className: "header-link header-linkedin-link"
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="mailto:zenan.xu15@gmail.com">@</a>\n',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Zenan XU. All Rights Reserved.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['bash', 'diff', 'json']
      },
    }),
};

module.exports = config;
