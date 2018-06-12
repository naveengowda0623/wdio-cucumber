let config

if (process.env.NODE_ENV === 'ci') {
  config = {
    baseUrl: 'http://{ciHost}:{ciWebPort}/anzidhub/',
    seleniumServerAddress: 'http://{ciSeleniumGridHost}:{ciSeleniumServerPort}/wd/hub',
    seleniumServerHost: '{ciSeleniumGridHost}',
    seleniumServerPort: '{ciSeleniumServerPort}',
    mountebankUrl:'http://{ciHost}:{ciMbPort}',
    maxInstance: 5,
    dataSheet: 'ST'
  }
} else if (process.env.NODE_ENV === 'ST2') {
  config = {
    baseUrl: 'https://www.',
    dataSheet: 'ST',
    maxInstance: 10
  }
} else {
  config = {
    baseUrl: 'http://www.',
    mountebankUrl: 'http://localhost:2525',
    maxInstance: 10,
    dataSheet: 'ST'
  }
}

module.exports = config
