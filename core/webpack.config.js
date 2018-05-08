const path = require('path');
const nodeExternals = require('webpack-node-externals');

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  entry: './src/index.ts',
  externals: process.env.NODE_ENV === 'production' ? [] : [nodeExternals()],
  mode: "production",
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: "@my-project/core",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@src": srcPath('')
    }
  }
};