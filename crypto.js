const crypto = require('crpyto')

module.exports = require('puff/obj')(crypto, {
  filter(key) {
    return key === 'pbkdf2' || key === 'randomBytes'
  }
})
