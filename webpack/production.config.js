const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const execPath = process.cwd();
const cssLoaderOptions = { importLoaders: 1 };
const cssModulesLoaderOptions = {
  modules: { localIdentName: "[path]-[name]__[local]" },
  importLoaders: 1,
};

const share = require("../src/share");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

exports.mode = "production";

exports.entry = [resolve(execPath, "src/index.js")];

exports.plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
  new CssMinimizerPlugin(),
  new HtmlWebpackPlugin({
    template: resolve(execPath, "src/index.html"),
    minify: false,
    meta: share.makeMeta(share),
  }),
  ...share.result.map(({ filename, ...props }) => 
    new HtmlWebpackPlugin({
      filename,
      template: resolve(execPath, "src/share/index.html"),
      minify: false,
      meta: share.makeMeta(props),
    })
  ),
  new CopyPlugin({
    patterns: [
      { from: "src/share/pics", to: "" },
      { from: "public", to: "" },
    ],
  }),
];

exports.output = {
  path: resolve(execPath, "dist"),
  publicPath: "/winlinederbyfive/",
  filename: "js/[name].[hash].js",
};

exports.module = {
  rules: [
    {
      test: /\.(jsx?)$/,
      exclude: /node_modules/,
      use: ["babel-loader", "eslint-loader"],
    },
    {
      test: cssRegex,
      exclude: [cssModuleRegex],
      // exclude: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: "css-loader", options: cssLoaderOptions },
        "postcss-loader",
      ],
    },
    {
      test: cssModuleRegex,
      exclude: [/node_modules/],
      use: [
        MiniCssExtractPlugin.loader,
        { loader: "css-loader", options: cssModulesLoaderOptions },
        "postcss-loader",
      ],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            fallback: 'file-loader',
            limit: 1024 * 20,
          },
        },
      ],
    },
    {
      test: /\.(otf|ttf|woff|woff2)$/,
      exclude: /node_modules/,
      use: ["file-loader?name=fonts/[name].[ext]"],
    },
  ],
};

exports.resolve = {
  extensions: [".js", ".jsx"],
  alias: {
    fonts: resolve(execPath, "src/fonts/"),
    utils: resolve(execPath, "src/utils/"),
    components: resolve(execPath, "src/components/"),
    screens: resolve(execPath, "src/components/screens/"),
    base: resolve(execPath, "src/components/base/"),
    modules: resolve(execPath, "src/components/modules/"),
    config: resolve(execPath, "src/config.js"),
  },
};
