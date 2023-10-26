const themeName = 'hum-wp-next'; // name of theme
const localSiteName = 'hum-wp-next';  // name of local site

const path = require('path');
const homeDir = require('os').homedir();
const localDir = 'LOCALS~2';
const localThemePath = path.normalize('app\\public\\wp-content\\themes');
const localPath = path.join( homeDir, localDir, localSiteName, localThemePath );
const sourcePath = path.join(__dirname, '/src');
const outputPath = path.join(localPath, themeName);
const assetPath = 'assets';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const CopyPlugin = require('copy-webpack-plugin');
const ProgressPlugin = require('cli-progress-webpack-plugin');


module.exports = {
  context: path.join(sourcePath, assetPath),
  mode: 'development',
  entry: {
    'editor': '/scss/_editor.scss',
    'admin': '/scss/_admin.scss',
  },
  devtool: 'source-map',
  plugins: [
    // remove empty .js for css entry points
    new RemoveEmptyScriptsPlugin(),
    // extract and write css
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    // copy files excempt from build process
    new CopyPlugin({
      patterns: [
        // assets
        /*
        {
          from: 'fonts/*.woff2',
        },
        */
        {
          from: 'images/*.*',
        },
        // template files
        {
          from: sourcePath,
          to: outputPath,
          globOptions: {
           ignore: [
             // Ignore all files in assets dir (because these are imported above)
             '**/assets/**',
           ],
         },
        },
      ],
    }),
    // CLI progress bars
    new ProgressPlugin(),
  ],
  /*
   * https://webpack.js.org/guides/output-management/
   */
  output: {
    filename: 'js/[name].js',
    path: path.join(outputPath, assetPath),
    clean: {
      keep(asset) {
        return asset.includes('acf-json');
      },
    },
    assetModuleFilename: '[path][name][ext]'
  },
  /*
   * module type: https://webpack.js.org/guides/asset-modules/
   * sass https://webpack.js.org/guides/entry-advanced/
   * resolve url loader: https://github.com/bholloway/resolve-url-loader/blob/v4-maintenance/packages/resolve-url-loader/README.md
   */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            // Extract css
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // Translates CSS into CommonJS
            loader: 'css-loader',
          },
          {
            // postcss.config.js
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
              },
            },
          },
          {
            // Dart sass compiler
            loader: 'sass-loader',
            options: {
              implementation: require("sass"),
            }
          }
        ],
      },
      {
        test: /\.(jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  externals: {
    jquery: 'jQuery'
  }
};
