require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

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
      '@server': path.resolve(__dirname, 'server'),
      '@middle': path.resolve(__dirname, 'middle'),
      '@api': path.resolve(__dirname, 'client/api'), 
      '@components': path.resolve(__dirname, 'client/components'),
      '@constants': path.resolve(__dirname, 'client/constants'),
      '@pages': path.resolve(__dirname, 'client/pages'), 
      '@constants': path.resolve(__dirname, 'client/constants'), 
      '@store': path.resolve(__dirname, 'client/store'), 
      '@utils': path.resolve(__dirname, 'client/utils'), 
      '@image': path.resolve(__dirname, 'public/image'), 
      '@font': path.resolve(__dirname, 'public/font'),
      '@type': path.resolve(__dirname, 'client/types'),
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
        test: /\.(png|jpg|jpeg|gif|ico)$/,
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
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/", to: "./public" },
        { from: "public/favicon.ico", to: "./favicon.ico" },
      ],
    }),
  ],
};
