const notifyOnRunStart = require('./notifyOnRunStart')
const notifyOnTestStart = require('./notifyOnTestStart')

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
    }
    console.log(JSON.stringify(payload))
    notifyOnRunStart(payload)
  }

  onTestStart(test) {
    const payload = {
      runId: this._id,
      path: test.path,
      rootDir: test.context.config.rootDir,
      duration: test.duration,
    }
    notifyOnTestStart(payload)
  }

  onTestResult(test, testResult, aggregatedResult) {
    const payload = {
      runId: this._id,
      name: test.context.config.name,
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
    // notifyOnTestResult(payload)
    // console.log('>>>>>>> onTestResult <<<<<<<<', payload, aggregatedResult)
    // console.log('>>>>>>> onTestResult <<<<<<<<', payload)
  }

  onRunComplete(contexts, results) {
    console.log('>>>>>>> onRunComplete <<<<<<<<')
    const payload = {
      runId: this._id,
    }
    //notifyOnRunComplete(payload)
  }
}

var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9)
}

module.exports = MyCustomReporter
