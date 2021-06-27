const path = require("path");
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/testweb1/'
      : '/',
      outputDir: path.resolve(__dirname, "./docs/"),
  }