var webpack = require("webpack")
var merge = require('webpack-merge')
var base = require('./webpack.config')
const name = require("./package.json").name
module.exports = merge(base, {
  target: 'node',
  output: {
    filename: name + '.ssr.js',
  },
})
