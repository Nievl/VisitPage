const path = require("path");
module.exports = {
  entry: "./js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, "js")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        query: {
          cacheDirectory: true, // включить кэширование
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".json", ".js", ".jsx", ".css"]
  },
  devtool: "source-map",
  devServer: {
    publicPath: path.join("/dist/")
  }
};
