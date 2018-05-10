const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  entry: "./scripts/app.js",
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./templates/index.template.html"
    })
  ],
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        { loader: "less-loader" },
      ]
    }]
  },
  performance: {
    hints: false
  }
};
