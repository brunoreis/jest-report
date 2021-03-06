const notifyOnRunStart = require('./notifyOnRunStart')
const notifyOnTestStart = require('./notifyOnTestStart')
const notifyOnTestResult = require('./notifyOnTestResult')
const notifyOnRunComplete = require('./notifyOnRunComplete')
const fetch = require('node-fetch')

if (!globalThis.fetch) {
  globalThis.fetch = fetch
}

const notifyToggles = {
  runStart: true,
  testStart: true,
  testResult: true,
  runComplete: false,
}

class MyCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig
    this._options = options
    this._id = ID()
  }

  onRunStart(results, options, a) {
    const { numTotalTestSuites } = results
    const { estimatedTime } = options
    const { testNamePattern, testPathPattern } = this._globalConfig

    const payload = {
      runId: this._id,
      estimatedTime,
      numTotalTestSuites,
      testNamePattern,
      testPathPattern,
      rootDir: this._globalConfig.rootDir,
    }
    notifyToggles.runStart && notifyOnRunStart(payload)
  }

  onTestStart(test) {
    const payload = {
      runId: this._id,
      path: test.path,
      duration: test.duration,
    }
    notifyToggles.testStart && notifyOnTestStart(payload)
  }

  onTestResult(test, testResult, aggregatedResult) {
    const payload = {
      runId: this._id,
      path: test.path,
      duration: test.duration,
      testResults: testResult.testResults.map((testResult) => ({
        ancestorTitles: testResult.ancestorTitles,
        duration: testResult.duration,
        failureMessages: testResult.failureMessages,
        fullName: testResult.fullName,
        location: testResult.location,
        numPassingAsserts: testResult.numPassingAsserts,
        status: testResult.status,
        title: testResult.title,
      })),
    }
    notifyToggles.testResult && notifyOnTestResult(payload)
  }

  onRunComplete(contexts, results) {
    const payload = {
      runId: this._id,
      success: results.success,
    }
    notifyToggles.runComplete && notifyOnRunComplete(payload)
  }
}

var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9)
}

module.exports = MyCustomReporter
