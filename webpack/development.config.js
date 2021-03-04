const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const execPath = process.cwd();
const webpackDevServerHost = process.env.WEBPACK_DEV_SERVER_HOST || "localhost";
const webpackDevServerPort = process.env.WEBPACK_DEV_SERVER_PORT || 3000;

const cssLoaderOptions = { importLoaders: 1 };
const cssModulesLoaderOptions = {
  modules: { localIdentName: "[path]-[name]__[local]" },
  importLoaders: 1,
};

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

exports.stats = { children: false };

exports.mode = "development";

exports.devtool = "inline-source-map";

exports.entry = ["react-hot-loader/patch", resolve(execPath, "src/index.js")];

exports.devServer = {
  hot: true,
  port: webpackDevServerPort,
  host: webpackDevServerHost,
  static: "./dist",
  open: true,
};

exports.plugins = [
  new HtmlWebpackPlugin({
    template: resolve(execPath, "src/index.html"),
    minify: false,
    title: "sports.ru",
  }),
  new HtmlWebpackPlugin({
    template: resolve(execPath, "src/parent.html"),
    minify: false,
    title: "parent window",
    inject: false,
    filename: "parent.html",
  }),
];

exports.output = {
  path: resolve(execPath, "dist"),
  publicPath: "/",
  filename: "js/[name].js",
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
        "style-loader",
        { loader: "css-loader", options: cssLoaderOptions },
        "postcss-loader",
      ],
    },
    {
      test: cssModuleRegex,
      exclude: [/node_modules/],
      use: [
        "style-loader",
        { loader: "css-loader", options: cssModulesLoaderOptions },
        "postcss-loader",
      ],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            fallback: "file-loader",
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
