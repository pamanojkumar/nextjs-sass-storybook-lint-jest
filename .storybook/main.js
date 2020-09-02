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

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      // test: /\.scss$/,
      test: /\.((c|sa|sc)ss)$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: true,
            importLoaders: 1,
            modules: { auto: true },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              indentWidth: 2,
              includePaths: path.resolve(__dirname, '../src/styles')
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    }
    /* ,
    {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publiscPath: path.resolve(__dirname, '../'),
      }
      
    } */
    /*,{
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: path.resolve(__dirname, '../public/resources/fonts/')
          }
        }
      ],
    } */
    );
    //console.log('custom config css includepath', config.module.rules[9]);
    // test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/
    // console.log('custom config sass includepath', config.module.rules[10].use[2].options.sassOptions);
    // console.log('custom config include', config.module.rules[10].include);
    
    
    // fonts
   
    // console.log('custom config include',config.module.rules[11].include);
    // console.log('custom config use',config.module.rules[11].use[0].options);
    //exit;
    
    
    
    
    // Return the altered config
    return config;
  },
}