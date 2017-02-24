
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin("common.js");
module.exports = {
  entry: {
    bundle: [ /*"babel-polyfill",*/ path.resolve(__dirname, 'src/root/main.js')],
    vendor: ["react-router", "react", "react-dom", "lodash"],
  },
  resolve: {
    // When requiring, you don't need to add these extensions
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/build/', // /build_artifacts/build/dzs-mhotel/front-hotel-h5app/1.0.0.1/
    filename: './[name].1.8.10.js', //[chunkhash:6] --> 换成版本1.0前面代表重大更改，后面代表bug修复，需求增加
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
  // externals: {
  //   'lodash': '_',
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  // },
  plugins: [
    new ExtractTextPlugin('styles/styles.1.8.10.css', {
      allChunks: true,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,  // remove all comments
      },
      compress: {
        warnings: false,
      },
    }),
  ],
};
