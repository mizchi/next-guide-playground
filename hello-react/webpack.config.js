const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json", ".mjs", ".wasm"],
  },
  devServer: {
    contentBase: "dist",
    historyApiFallback: true,
  },
  plugins: [new HtmlPlugin()],
};
