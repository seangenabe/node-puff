const process = require('process')

module.exports = require('puff/obj')(process, {
  filter(key) {
    return key === 'send'
  }
})
