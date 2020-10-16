const path = require('path');

module.exports = (library, outfile) => [{
  output: {
    path: path.resolve(__dirname, '../../../public/compiled'),
    filename: `${outfile}.js`,
    library
  },
  entry: './src/main.js',
  mode: 'development'
}, {
  output: {
    path: path.resolve(__dirname, '../../public/compiled'),
    filename: `${outfile}.min.js`,
    library
  },
  entry: './src/main.js',
  mode: 'production'
}];
