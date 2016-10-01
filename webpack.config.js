const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  // plugins: [
  //   new DotenvPlugin({
  //     sample: './.env.default',
  //     path: './.env'
  //   })
  // ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
