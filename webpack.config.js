const path = require("path");

module.exports = {
  entry: "./docs/index.js",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "docs"),
    },
    hot: true,
  },
};
