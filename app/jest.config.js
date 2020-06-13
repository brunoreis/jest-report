const fetch = require('node-fetch')

if (!globalThis.fetch) {
  globalThis.fetch = fetch
}

module.exports = {
  reporters: ['<rootDir>/jest-reporter/jest-reporter.js'],
}
