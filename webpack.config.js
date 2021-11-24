const path = require("path");

module.exports = {
  entry: "./preview/index.js",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "preview"),
  },
  devServer: {
    static: { directory: __dirname },
    hot: true,
  },
};
