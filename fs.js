const fs = require('fs')
const regexs = [
  /Sync$/,
  /^create.+Stream$/,
  /watch/,
  /^[A-Z]/
]

module.exports = require('puff/obj')(fs, {
  filter(key) {
    if (key === 'constants') { return }
    return !regexs.some(regex => regex.test(key))
  }
})
