const Webpack = require('webpack');
const Path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// variables
const isProduction = process.argv.indexOf('-p') >= 0;
const outPath = Path.join(__dirname, './dist');
const sourcePath = Path.join(__dirname, './src');

module.exports = {
  context: sourcePath,
  entry: {
    main: './index.tsx'
  },
  output: {
    pathinfo: !isProduction,
    path: outPath,
    publicPath: '/',
    chunkFilename: "[name].[hash:4].js",
    filename: "[name].[hash:4].js",
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // https://github.com/Microsoft/TypeScript/issues/11677
    mainFields: ['module', 'browser', 'main']
  },
  module: {
    rules: [
      // .ts, .tsx
      {
        test: /\.(ts|tsx)$/,
        use: ['awesome-typescript-loader']
      },
      // css
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: !isProduction,
              importLoaders: 1,
              localIdentName: isProduction ? '[hash:base64:5]' : '[local]__[hash:base64:5]'
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
      },
      // static assets
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
      { test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/, use: 'file-loader' }
    ]
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: -10
        }
      }
    },
    runtimeChunk: true
  },
  plugins: [
    new Webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new MiniCssExtractPlugin({
      filename: '[contenthash].css',
      disable: !isProduction
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new Webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: outPath,
    historyApiFallback: true,
    hot: true,
    port: 3000,
    stats: {
      warnings: false
    }
  },
  devtool: isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',
};
