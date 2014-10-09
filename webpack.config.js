module.exports = {
  entry:  './app/js/main.js',
  output: {
    path: 'app/js',
    filename: 'bundle.min.js'       
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.coffee'] 
  }
};