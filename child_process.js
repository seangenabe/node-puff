const cp = require('child_process')

module.exports = require('puff/obj')(cp, {
  filter(key) {
    return key === 'exec' || key === 'execFile'
  },
  multiArgs: true
})
