# node-puff

**DEPRECATED.** Please use [mz](https://github.com/normalize/mz) instead.

Promisify ALL the node.js modules (with proxies).

[![npm](https://img.shields.io/npm/v/node-puff.svg?style=flat-square)](https://www.npmjs.com/package/node-puff)
[![Dependency Status](https://img.shields.io/david/seangenabe/node-puff.svg?style=flat-square)](https://david-dm.org/seangenabe/node-puff)
[![devDependency Status](https://img.shields.io/david/dev/seangenabe/node-puff.svg?style=flat-square)](https://david-dm.org/seangenabe/node-puff#info=devDependencies)
[![node](https://img.shields.io/node/v/node-puff.svg?style=flat-square)](https://nodejs.org/en/download/)

## Implemented modules

### Full methods support

Modules with full support for its node-style methods. This excludes node-style method return values (support coming soon?). This also excludes class method support.

* child_process _(multiple return values)_
* cluster
* crypto
* dgram
* dns
* fs
* http
* https
* tls

### Support per module

* process
  * send(message[, sendHandle[, options]])

## Monkey-patching?

We might break things. I prefer not breaking things.

## License

MIT
