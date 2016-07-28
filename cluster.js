const cluster = require('cluster')

module.exports = require('puff/obj')(cluster, {
  filter(key) {
    return key === 'disconnect'
  }
})
