const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    hello: './src/hello.js',
    sample: './src/sample.js',
  } /**multiple entrypoints */,
  output: {
    filename:
      '[name].[contentHash].js' /**bundled JS file with md5-hashed cache busting */,
    path: path.resolve(__dirname, './dist') /**define absolute path */,
    publicPath: '' /**base path for the assets within the application */,
  },
  mode:
    'production' /** sets process.env.NODE_ENV === 'development' on DefinePlugin & enables TerserPlugin */,
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000 /**minimum module size to be split */,
      automaticNameDelimiter: '_' /**set the delimiter (default: '~') */,
    } /**common chunks strategies for imported modules - emits into the vendor file */,
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
          MiniCssExtractPlugin.loader /**extracts CSS into separate files; create a CSS file per JS file, supporting on-demand-loading(async) of CSS */,
          'css-loader' /**interprets @import and url() like import/require() and resolve them */,
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader /**extracts CSS into separate files; create a CSS file per JS file, supporting on-demand-loading(async) of CSS */,
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
    // new TerserPlugin() /** JS compressor & uglifier */,
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css',
    }) /**extracts CSS into separate files; create a CSS file per JS file, supporting on-demand-loading(async) of CSS */,
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*' /**remove all the files and sub-directories under the output.path directory */,
        path.join(
          process.cwd(),
          'build/**/*'
        ) /**removes all the files and sub-directories under specified(default=output.path) directory */,
      ] /**Array of file patterns to clean before build */,
    }) /**cleans the build folders */,
    new HtmlWebpackPlugin({
      filename: 'hello.html',
      chunks: [
        'hello',
        'vendors~hello~sample' /**need to specify the vendor bundle to include */,
      ] /**specifies which bundle to include in this HTML */,
      title: 'Hello Page',
      meta: { description: 'hello page' },
      template: 'src/hello-template.js',
    }) /**dynamically create HTML files */,
    new HtmlWebpackPlugin({
      filename: 'sample.html',
      chunks: [
        'sample',
        'vendors~hello~sample' /**need to specify the vendor bundle to include */,
      ] /**specifies which bundle to include in this HTML */,
      title: 'Sample Page',
      description: 'sample page',
      template: 'src/sample-template.js',
    }) /**multiple HTML files */,
  ],
};
