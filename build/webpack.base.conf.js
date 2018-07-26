const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('mini-css-extract-plugin')
// const ExtractTextWebpackPlugin1 = require('extract-text-webpack-plugin')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')
const assetsSubDirectory = 'static'
// const extractBaseCss = new ExtractTextWebpackPlugin(path.posix.join(assetsSubDirectory, '/css/[name]-[hash:5].css'))
module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: assetsSubDirectory + '/js/[name].[hash:5].js',
    path: path.resolve(__dirname, '../docs')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: 'styles',
  //         test: /\.css$/,
  //         chunks: 'all',
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        // include:[path.resolve(__dirname, "main.css")],
        use: [
          ExtractTextWebpackPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './.postcssrc.js'
              }
            }
          }
        ]
        // include:[path.resolve(__dirname, "../src/assets/css/main.css")],
        // use: ExtractTextWebpackPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     {
        //       loader: 'css-loader'
        //       // options:{
        //       //   minimize: true
        //       // }
        //     },
        //     {
        //       loader: 'postcss-loader',
        //       options: {
        //         config: {
        //           path: './.postcssrc.js'
        //         }
        //       }
        //     }
        //   ]
        // })
      },
      // {
      //   test: /\.css$/,
      //   include:[path.resolve(__dirname, "../src/assets/css/demo/index.css")],
      //   use: ExtractTextWebpackPlugin1.extract({
      //     fallback: 'style-loader',
      //     use: [
      //       {
      //         loader: 'css-loader'
      //         // options:{
      //         //   minimize: true
      //         // }
      //       },
      //       {
      //         loader: 'postcss-loader',
      //         options: {
      //           config: {
      //             path: './.postcssrc.js'
      //           }
      //         }
      //       }
      //     ]
      //   })
      // },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['docs'], {root: path.resolve(__dirname, '../'), verbose: true}),
    new ExtractTextWebpackPlugin({
      filename: path.posix.join(assetsSubDirectory, '/css/main-[hash:5].css'),
      // allChunks: true
      // chunkFilename: path.posix.join(assetsSubDirectory, '/css/[id].css')
    }),
    // new ExtractTextWebpackPlugin1({
    //   filename: path.posix.join(assetsSubDirectory, '/css/base.min.css'),
    //   allChunks: true
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/view/index.pug'
    })
  ]
}