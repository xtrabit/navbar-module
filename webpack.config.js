const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
dotenv.config();
let MY_URL = process.env.MY_URL;
if (MY_URL === 'http://localhost') {
  MY_URL = 'http://localhost:3001';
}

module.exports = env => {
  console.log('Building with url: ', MY_URL)
  return {
    mode: 'development',
    entry:  path.resolve(__dirname, 'client', 'index.jsx'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /(.js$|.jsx$)/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    node: {
      fs: 'empty'
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env.MY_URL': JSON.stringify(MY_URL) })
    ]
  };
};
