let config

if (process.env.TEST_DOMAIN === 'ci') {
  config = require('./wdio.CI.conf')
  console.log('CI Environment #################')
} else {
  config = require('./wdio.conf')
  console.log('NON-CI Environment #################')
}

module.exports = config
