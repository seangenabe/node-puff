const tls = require('tls')

module.exports = require('puff/obj')(tls, {
  filter(key) {
    return key === 'connect'
  }
})
