const https = require('https')

module.exports = require('puff/obj')(https, {
  filter(key) {
    return key === 'get' || key === 'request'
  }
})
