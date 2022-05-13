module.exports = {
  entry: {
    index: './lib/node/index.js'
  },
  output: {
    path: `${__dirname}/lib`,
    filename: '[name].js'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    fallback: {
      fs: false,
      path: false,
      stream: false,
      constants: false,
      os: false
    }
  }
}
