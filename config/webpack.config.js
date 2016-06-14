var webpack = require('webpack');
var path = require('path')
module.exports = {
  devtool: 'inline-source-map',
  entry: ['./client/client.js', 'webpack-hot-middleware/client'],
  output: {
    path: path.join(__dirname, './public/javascripts'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    // Plugins required for hot reloading
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
      }
    ]
  },

  // Config to sass loader
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./styles")]
  }
}
