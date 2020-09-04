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
   
    // Make whatever fine-grained changes you need
    /* config.output.push({
      publicPath:path.resolve(__dirname, '../'),
    }); */
    //console.log(config.module.rules);
    //exit;
    config.module.rules.push(
    {
      // test: /\.scss$/,
      test: /\.((c|sa|sc)ss)$/i,
      use: [
        // MiniCssExtractPlugin.loader,
        //'css-to-string-loader',
        'style-loader',
        //'css-loader',
       {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            sourceMap: true,
            url:false
          },
        },
        //'postcss-loader',
        // 'resolve-url-loader',
        /* {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname, 'postcss.config.js')
            },
          }
        }, */
        /* {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            sourceMap: true,
          },
        }, */
        /* {
          loader: 'resolve-url-loader',
          options: { 
            sourceMap: true,
            join: (uri,base) => {return '../../public/';}
          }
        }, */
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
            sourceMap: true,
          },
        },
        // { loader: 'postcss-loader', options: { sourceMap: true } }
        
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

    /* {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'file-loader',
      options: {
        name: 'public/resources/fonts/[name].[ext]',
        publicPath: path.resolve(__dirname, '../'),
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
    //console.log('custom config sass includepath', config.module.rules[10].use[3].options.sassOptions);
    // console.log('custom config include', config.module.rules[10].include);
    
    
    // fonts
   
    // console.log('custom config include',config.module.rules[11].include);
    // console.log('custom config use',config.module.rules[11].use[0].options);
    //exit;
    
    
    
    // console.log(config.module.rules)
    // Return the altered config
    return config;
  },
  
}