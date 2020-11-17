const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
  },
  devtool: 'inline-source-map'
};
