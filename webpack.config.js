const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const DotenvWebpackPlugin = require('dotenv-webpack')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = (env) => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.js', '.jsx']
    },
    devServer: {
      port: 3000,
      // contentBase: path.join(__dirname, 'dist'),
      compress: true
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
          test: /\.(png|jpg )/,
          type: 'asset/resource'
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
      new CleanWebpackPlugin(),
      new DotenvWebpackPlugin({
        path: path.resolve(
          __dirname,
          `./.env${env.file ? `.${env.file}` : ''}`
        )
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
      minimize: true,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
    }
  }
}
