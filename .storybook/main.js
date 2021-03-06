const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
   
    config.module.rules.push(
    {
      // test: /\.scss$/,
      test: /\.((c|sa|sc)ss)$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            url:false
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              indentWidth: 2,
              includePaths: [
                path.resolve(__dirname, '../src/styles'),
                path.resolve(__dirname, '../public')
              ]
            },
          },
        },        
      ],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        esModule: false,
      }
    },
    );
    // console.log(config.module.rules)
    // Return the altered config
    return config;
  },
  
}