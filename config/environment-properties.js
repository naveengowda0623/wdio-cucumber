const ip = require('ip')
let config

if (process.env.TEST_DOMAIN === 'ci') {
	config = {
		baseUrl: `http://${ip.address()}:4200`,
		seleniumServerAddress: 'http://localhost:4444/wd/hub',
		seleniumServerHost: 'localhost',
		seleniumServerPort: '4444',
		mountebankUrl: 'http://localhost:2525',
		tagExpression: 'not @Deprecated and not @WIP and not @Duplicate and not @OOS',
		maxInstance: 5,
		dataSheet: 'st',
		feature: '*'
	}
} else if (process.env.TEST_DOMAIN === 'sit') {
	config = {
		baseUrl: 'https://www.',
		mountebankUrl: 'http://localhost:2525',
		tagExpression: 'not @Deprecated and not @WIP and not @Duplicate and not @OOS',
		maxInstance: 5,
		dataSheet: 'st',
		feature: '*',
		considerSitTest: true,
		disableHeadlessRun: true
	}
} else {
	config = {
		baseUrl: 'http://www.',
		mountebankUrl: 'http://localhost:2525',
		tagExpression: 'not @Deprecated and not @WIP and not @Duplicate and not @OOS',
		maxInstance: 5,
		dataSheet: 'st',
		feature: '*'
	}
}

module.exports = config
