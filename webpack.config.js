const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: "index.html",
      template: path.join(__dirname, "./src/index.html"),
      favicon: path.join(__dirname, "./src/assets/svg/favicon.svg"),
    }),
    new MiniCssExtractPlugin({
      filename: "./css/main.css",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/assets/svg", to: "assets/svg" }],
      patterns: [{ from: "./src/images", to: "images" }],
    }),
  ],
  target: ["web", "es5"],
};
