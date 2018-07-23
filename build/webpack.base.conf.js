const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')
const assetsSubDirectory = 'static'
module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: assetsSubDirectory + '/js/[name].[hash:5].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader',
        //   {
        //     loader: 'postcss-loader',
        //     options: {
        //       plugins: [require('postcss-cssnext')]
        //       // config: {
        //       //   path: './.postcssrc.js'
        //       // }
        //     }
        //   }
        // ]
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
              // options:{
              //   minimize: true
              // }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: './.postcssrc.js'
                }
              }
            }
          ]
        })
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {root: path.resolve(__dirname, '../'), verbose: true}),
    new ExtractTextWebpackPlugin({
      // filename: assetsSubDirectory + '/css/[name]-[hash:5].css',
      filename: path.posix.join(assetsSubDirectory, '/css/[name]-[hash:5].css'),
      allChunks: true
    }),
    // new OptimizeCss({
    //   assetNameRegExp: /\.optimize\.css$/g,
    //   cssProcessor: require('cssnano'),
    //   cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
    //   canPrint: true
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/view/index.pug'
    })
  ]
}