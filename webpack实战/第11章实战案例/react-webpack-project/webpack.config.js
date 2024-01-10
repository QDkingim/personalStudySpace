const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 接收package.json中的环境变量
const isProduction = process.env.NODE_ENV == 'production'


module.exports = () => {
  return {
    entry: {
      index: {
        import: './src/index.tsx', // 文件路径
        dependOn: 'shared' // 公共chunk
      },
      detail: {
        import: './src/detail.tsx',
        dependOn: 'shared'
      },
      shared: ['react', 'react-dom']
    },
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
      new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html',
        chunks: ['index', 'shared']
      }),
      new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'detail.html',
        chunks: ['detail', 'shared']
      }),
      isProduction ? new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].chunk.css'
      }) : null
    ].filter(Boolean),
    module: {
      rules: [{
          test: /\.jsx?$/,
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
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.less$/i,
          use: [
            // 编译less到css
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'less-loader'
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
      extensions: ['.js', '.jsx', '.tsx', '.less']
    }

  }
}