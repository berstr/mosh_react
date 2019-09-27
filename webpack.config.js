const path = require('path');
module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
    },
    {   
      test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, 
      loader: 'file-loader' 
    },
    {
      test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
      loader: 'url-loader?limit=100000'
  }
    ]
  }
};
