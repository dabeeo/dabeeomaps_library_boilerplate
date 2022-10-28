const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  // target:'web',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`, // 번들링 결과물 위치 
    libraryTarget: 'window',
    clean:true,
  },
  devtool : 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};