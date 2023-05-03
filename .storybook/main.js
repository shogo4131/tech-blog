const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-css-modules-preset',
    'storycap',
  ],
  framework: { name: '@storybook/nextjs', options: {} },

  webpackFinal: async (baseConfig) => {
    baseConfig.resolve.modules = [
      ...(baseConfig.resolve.modules || []),
      path.resolve(__dirname, '../'),
    ];
    baseConfig.resolve.plugins = [...(baseConfig.resolve.plugins || []), new TsconfigPathsPlugin()];

    return baseConfig;
  },
};
