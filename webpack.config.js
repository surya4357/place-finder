const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',   // entry file for webpack to start 
  output: {
    path: __dirname + './dist',   // output destination for bundled files
    filename: 'app.js'  // output js file after bundling
  },
  devServer: {
    contentBase: __dirname + '/dist',
    port: 8000  // port for application to run
  },
  module: {
    rules: [
      {
        // transpile all JSX and ES6 code to browser specific js code
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // process all scss and css files
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    // Creates index.html from the given template and adds script tag with bundled js file
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}