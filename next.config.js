/** @type {import('next').NextConfig} */
const path = require('path')
const NextConfig = {
  output: 'export',
}
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  NextConfig
}