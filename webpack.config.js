require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: './client/index.tsx',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    alias: {
      '@client': path.resolve(__dirname, 'client'),
      '@api': path.resolve(__dirname, 'client/api'), 
      '@components': path.resolve(__dirname, 'client/components'), 
      '@pages': path.resolve(__dirname, 'client/pages'), 
      '@constants': path.resolve(__dirname, 'client/constants'), 
      '@store': path.resolve(__dirname, 'client/store'), 
      '@utils': path.resolve(__dirname, 'client/utils'), 
      '@image': path.resolve(__dirname, 'public/image'), 
      '@font': path.resolve(__dirname, 'public/font'), 
    },
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": [              
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true, //  타입체크 없이 트랜스파일링만. (타입체크는 ForkTsCheckWebpackPlugin 에서)
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "public/[contenthash].[ext]",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/", to: "./public" },
        { from: "public/favicon.ico", to: "./favicon.ico" },
      ],
    }),
  ],
};
