const zlib = require('zlib')
const regexs = [
  /Sync$/,
  /^create/,
  /^[A-Z]/
]

module.exports = require('puff/obj')(zlib, {
  filter(key) {
    return !regexs.some(regex => regex.test(key))
  }
})
