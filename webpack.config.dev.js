const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DotenvWebpackPlugin = require('dotenv-webpack')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = (env) => {
  return {
    entry: {
      home: ['react-hot-loader/patch', './src/index.js'],
      header: ['react-hot-loader/patch', './src/Header/index.js']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
      port: 3000,
      // contentBase: path.join(__dirname, 'dist'),
      compress: true,
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(ts|tsx)/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader'
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.css|.styl$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            'stylus-loader'
          ]
        },
        {
          test: /\.(png|jpg)/,
          type: 'asset'
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/[name].css'
      }),
      new DotenvWebpackPlugin({
        path: path.resolve(__dirname, `.env${env.file ? `.${env.file}` : ''}`)
      }),
      new ImageMinimizerPlugin({
        minimizerOptions: {
          plugins: [
            ['optipng', { optimizationLevel: 5 }]
          ]
        }
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
}
