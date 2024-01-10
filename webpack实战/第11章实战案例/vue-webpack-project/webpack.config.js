const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const {
  VueLoaderPlugin
} = require('vue-loader')
// 接收package.json中的环境变量
const isProduction = process.env.NODE_ENV == 'production'


module.exports = () => {
  return {
    entry: './src/index.js',
    output: {
      chunkFilename: isProduction ? '[name].[chunkhash:8].chunk.js' : '[name].chunk.js',
      filename: isProduction ? '[name].[contenthash:8].js' : '[name].js'
    },
    devServer: {
      open: true, // 自动打开浏览器
      port: 3000
    },
    mode: isProduction ? "production" : "development",
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      isProduction ? new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].chunk.css'
      }) : null
    ].filter(Boolean),
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false
            }
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            'css-loader',
          ]
        },
        {
          test: /\.(png|jpg|svg|jpeg|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource'
        }
      ]
    },
    resolve: {
      alias: {
        // '@': path.resolve(__dirname, 'src'),
        'vue': 'vue/dist/vue.runtime.esm.js'
      },
      extensions: ['.js', '.vue']
    }

  }
}