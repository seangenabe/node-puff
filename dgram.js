const dgram = require('dgram')

module.exports = require('puff/obj')(dgram, {
  filter(key) {
    return key === 'createSocket'
  }
})
