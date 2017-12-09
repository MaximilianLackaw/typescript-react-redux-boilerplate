const Webpack = require('webpack');
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {
  CheckerPlugin
} = require('awesome-typescript-loader');

const isProduction = process.argv.indexOf('-p') >= 0;
const outPath = Path.join(__dirname, './dist');
const sourcePath = Path.join(__dirname, './src');

module.exports = {
  context: sourcePath,
  entry: {
    main: './index.tsx',
    vendor: [
      'classnames',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-actions'
    ]
  },
  output: {
    pathinfo: !isProduction,
    path: outPath,
    publicPath: '/',
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js'
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // https://github.com/Microsoft/TypeScript/issues/11677
    mainFields: ['main']
  },
  module: {
    rules: [
      // .ts, .tsx
      {
        test: /\.(ts|tsx)$/,
        use: isProduction
          ? [
              {
                loader: 'awesome-typescript-loader',
                options: {
                  module: 'es6'
                }
              }
            ]
          : ['react-hot-loader/webpack', 'awesome-typescript-loader']
      },
      // css
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: !isProduction,
                importLoaders: 1,
                localIdentName: '[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('postcss-import')({}),
                  require('postcss-css-reset')({}),
                  require('postcss-url')(),
                  require('postcss-cssnext')(),
                  require('postcss-reporter')(),
                  require('postcss-browser-reporter')({
                    disabled: isProduction
                  })
                ]
              }
            }
          ]
        })
      },
      // static assets
      { test: /\.html$/, use: 'html-loader' },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000
            }
          }
        ]
      },
      { test: /\.jpg$/, use: 'file-loader' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV':
        isProduction === true
          ? JSON.stringify('production')
          : JSON.stringify('development')
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[hash:8].js',
      minChunks: Infinity
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new Webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
      disable: !isProduction
    }),
    // `CheckerPlugin` is optional. Use it if you want async error reporting.
    // We need this plugin to detect a `--watch` mode. It may be removed later
    // after https://github.com/webpack/webpack/issues/3460 will be resolved.
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new Webpack.NamedModulesPlugin(),
    new Webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: sourcePath,
    historyApiFallback: true,
    hot: true,
    port: 3000,
    stats: {
      warnings: false
    }
  },
  devtool: !isProduction ? 'cheap-module-source-map' : false,
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty'
  }
};
