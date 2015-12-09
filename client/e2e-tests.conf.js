exports.config = {
        capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {
                args: ['--disable-web-security']
            }
        },
        baseUrl: 'http://localhost:8100',
        specs: [
            'test/e2e/**/*.tests.js'
        ],
        jasmineNodeOpts: {
            isVerbose: true,
        }
};
