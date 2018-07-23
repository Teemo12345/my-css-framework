const merge = require('webpack-merge')
const base = require('./webpack.base.conf.js')
// console.log(base.mode)
module.exports = merge(base, {
  mode: 'production'
})