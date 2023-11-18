const config = {
  title: 'Law Knowledge',
  tagline:
    "A legal knowledge search and Q&A application based on Vietnam's Legal Code and legal document database",
  url: 'https://foxminchan.github.io',
  baseUrl: '/LawKnowledge',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'foxminchan',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/foxminchan/LawKnowledge/tree/main/apps/docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content: 'chatbot, chính phủ, pháp luật, mô hình ngôn ngữ lớn',
      },
      {
        name: 'description',
        content:
          'Ứng dụng tìm kiếm kiến thức pháp luật và hỏi đáp dựa trên cơ sở dữ liệu Bộ luật và văn bản quy phạm pháp luật của Việt Nam',
      },
      { name: 'og:title', content: 'Tri Thức Pháp Luật' },
    ],
    navbar: {
      title: 'Law Knowledge',
      logo: {
        alt: 'Law Knowledge Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://www.olp.vn/',
          label: 'Website',
          position: 'left',
          target: '_self',
        },
        {
          href: 'https://github.com/foxminchan/LawKnowledge',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
      ],
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    announcementBar: {
      id: 'announcement-bar',
      content:
        '<a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/foxminchan/LawKnowledge">⭐ Star Application on GitHub</a>',
      isCloseable: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Organization',
          items: [
            {
              label: 'ICPC Vietnam',
              href: 'https://www.olp.vn/',
            },
            {
              label: 'Vfossa',
              href: 'https://vfossa.vn/',
            },
            {
              html: `
                <a href="https://vfossa.vn/" target="_blank" rel="noreferrer noopener" aria-label="Vfossa">
                  <img loading="lazy" src="/img/vfossa.png" alt="Vfossa" width="150" height="55" />
                </a>
              `,
            },
          ],
        },
        {
          title: 'References',
          items: [
            {
              label: 'Pháp điển',
              href: 'https://phapdien.moj.gov.vn/',
            },
            {
              label: 'QPPL',
              href: 'https://vbpl.vn/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About the Contest',
              href: 'https://vfossa.vn/topic/olympic-tin-hoc-sinh-vien-viet-nam-lan-thu-32/',
            },
            {
              label: 'OLP - HUSC',
              href: 'http://olp.husc.edu.vn',
            },
            {
              label: 'Hutech University',
              href: 'https://www.hutech.edu.vn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hutech. All rights reserved`,
      logo: {
        alt: 'School Logo',
        loading: 'lazy',
        src: 'img/school.png',
        href: 'https://www.hutech.edu.vn/',
        width: 300,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.svg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    async function myPlugin(_context) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
