const http = require('http')

module.exports = require('puff/obj')(http, {
  filter(key) {
    return key === 'get' || key === 'request'
  }
})
