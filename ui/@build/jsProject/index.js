const path = require('path');

module.exports = ({
  input = './src/main.js',
  library,
  output
}) => [{
  output: {
    path: path.resolve(__dirname, '../../../public/compiled'),
    filename: `${output}.js`,
    library
  },
  devtool: 'source-map',
  entry: input,
  mode: 'development'
}, {
  output: {
    path: path.resolve(__dirname, '../../../public/compiled'),
    filename: `${output}.min.js`,
    library
  },
  entry: input,
  mode: 'production'
}];
