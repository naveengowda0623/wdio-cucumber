let config

if (process.env.NODE_ENV === 'ci') {
  config = require('./wdio.CI.conf')
} else {
  config = require('./wdio.conf')
}

module.exports = config
