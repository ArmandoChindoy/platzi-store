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
    entry: {
      home: './src/index.js',
      header: './src/Header/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]bundle.js',
      chunkFilename: '[name]bundle.js'
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
          test: /\.(ts|tsx)/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
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
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          commons: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            chunks: 'all',
            name: 'commons',
            filename: 'assets/common.[chunckhash.js]',
            reuseExistingChunk: true,
            enforce: true,
            priority: 20
          },
          vendors: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            chunks: 'all',
            name: 'vendors',
            filename: 'assets/vendor.[chunckhash.js]',
            reuseExistingChunk: true,
            enforce: true,
            priority: 10
          }
        }

      }
    }
  }
}
