const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    hello: './src/hello.js',
    sample: './src/sample.js',
  } /**multiple entrypoints */,
  output: {
    filename: '[name].bundle.js' /**bundled JS file */,
    path: path.resolve(__dirname, './dist') /**define absolute path */,
    publicPath: '' /**base path for the assets within the application */,
    // publicPath: 'dist/',
    // publicPath: 'http://external-source-for-static-files.domain/',
  },
  mode:
    'development' /** sets process.env.NODE_ENV === 'production' on DefinePlugin - enables 'source map' for debugging */,
  devServer: {
    contentBase: path.resolve(
      __dirname,
      'dist'
    ) /**serve content from...; the actual files are served from the memory */,
    index: 'hello.html' /**specifies the index entry of the server */,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader' /**resolves import/require() on a file into a url -> emits the file into the output directory */,
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader' /**inject CSS into the DOM */,
          'css-loader' /**interprets @import and url() like import/require() and resolve them */,
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader' /**inject CSS into the DOM */,
          'css-loader' /**interprets @import and url() like import/require() and resolve them */,
          'sass-loader' /**transpiles Sass/SCSS to CSS */,
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env' /**covers ECMA5~10 */],
            plugins: [
              'transform-class-properties' /**specifies ECMA features to add */,
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'hello.html',
      chunks: ['hello'] /**specifies which bundle to include in this HTML */,
      title: 'Hello Page',
      meta: { description: 'hello page' },
      template: 'src/hello-template.js',
    }) /**dynamically create HTML files */,
    new HtmlWebpackPlugin({
      filename: 'sample.html',
      chunks: ['sample'] /**specifies which bundle to include in this HTML */,
      title: 'Sample Page',
      description: 'sample page',
      template: 'src/sample-template.js',
    }) /**multiple HTML files */,
  ],
};
