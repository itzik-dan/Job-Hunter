// keys.js - decide what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // return the production set of keys
  module.exports = require('./prod');
} else {
  // return the development keys!!!
  module.exports = require('./dev');
}