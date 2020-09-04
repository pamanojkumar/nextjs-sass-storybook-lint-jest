const path = require('path');

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
            sourceMap: true,
            url:false
          },
        },
        'resolve-url-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              indentWidth: 2,
              includePaths: [
                path.resolve(__dirname, '../src/styles')
              ]
            },
            sourceMap: true,
          },
        },
        // { loader: 'postcss-loader', options: { sourceMap: true } }
        
      ],
      include: path.resolve(__dirname, '../'),
    },
    );
    //console.log('custom config sass includepath', config.module.rules[10].use[3].options.sassOptions);
    // console.log(config.module.rules)
    // Return the altered config
    return config;
  },
  
}