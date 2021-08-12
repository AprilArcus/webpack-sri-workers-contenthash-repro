const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity')
const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[contenthash].bundle.js',
    // fail
    chunkFilename: '[name]-[contenthash].chunk.js',
    // pass
    // chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new SubresourceIntegrityPlugin({
      enabled: true,
    })
  ],
};
