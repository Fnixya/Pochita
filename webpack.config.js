const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
        react: path.resolve('./node_modules/react')
    }
  }
}
