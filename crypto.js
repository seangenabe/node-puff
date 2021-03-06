const crypto = require('crypto')

module.exports = require('puff/obj')(crypto, {
  bind: 'original',
  filter(key) {
    return key === 'pbkdf2' || key === 'randomBytes'
  }
})
