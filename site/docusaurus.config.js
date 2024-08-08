/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = {
  title: 'webtir-dev',
  tagline: 'A React framework for building drag-n-drop page editors',
  url: '',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'prevwong', // Usually your GitHub org/user name.
  projectName: 'webtir-dev', // Usually your repo name.
  onBrokenLinks: 'warn',
  themeConfig: {
    algolia: {
      appId: 'PH8YTBNA7Q',
      apiKey: '7a21621f37e010ec9a8c39298d71b045',
      indexName: 'webtir-dev',
      contextualSearch: false
    },
    prism: {
      theme: require('prism-react-renderer/themes/shadesOfPurple'),
    },
    // navbar: {
    //   hideOnScroll: false,
    //   title: 'webtir-dev',
    //   items: [
    //    
    //   ],
    // },
    footer: {
      style: 'light',
        

      copyright: `Copyright © ${new Date().getFullYear()} Prev Wong`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
