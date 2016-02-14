'use strict';

// Settings configured here will be merged into the final config object.
export default {
  resolve: {
    modulesDirectories: [
      'src'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
