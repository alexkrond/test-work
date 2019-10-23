const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/react/app.js',
  output: {
    path: path.resolve(__dirname, 'public', 'js', 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
