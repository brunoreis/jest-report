const notifyOnRunStart = require('./notifyOnRunStart')

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
      estimatedTime,
      numTotalTestSuites,
      testNamePattern,
      testPathPattern,
      runId: this._id,
    }
    console.log(JSON.stringify(payload))
    notifyOnRunStart(payload)
  }

  onTestStart(test) {
    const payload = {
      path: test.path,
      rootDir: test.context.config.rootDir,
      duration: test.duration,
      name: test.context.config.name,
    }
    // console.log('>>>>>>> onTestStart: payload <<<<<<<<', payload, test)
    // console.log('>>>>>>> onTestStart <<<<<<<<', payload)
  }

  onTestResult(test, testResult, aggregatedResult) {
    // console.log('----------------------------------------', test.context.config)
    // testResult.testResults.forEach((testResult) => console.log(testResult))

    const payload = {
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
    // console.log('>>>>>>> onTestResult <<<<<<<<', payload, aggregatedResult)
    // console.log('>>>>>>> onTestResult <<<<<<<<', payload)
  }

  onRunComplete(contexts, results) {
    console.log('>>>>>>> onRunComplete <<<<<<<<')
    console.log(this._id)
    // console.log('>>>>>>> onRunComplete <<<<<<<<', contexts)
    // console.log(results)
    // console.log(results)
  }
}

var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9)
}

module.exports = MyCustomReporter
