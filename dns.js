const dns = require('dns')
const regex = /^[A-Z]/

module.exports = require('puff/obj')(dns, {
  filter(key) {
    if (regex.test(key)) { // exclude error code constants
      return false
    }
    return !(key === 'getServers' || key === 'setServers')
  }
})
