class MyCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig
    this._options = options
  }

  onRunStart(a, b, c) {
    console.log('>>>>>>> onRunStart <<<<<<<<')
    console.log(a)
    console.log('----- - -- --- -- - - - -  -- ------')
    console.log(b)
    console.log('----- - -- --- -- - - - -  -- ------')
    console.log(c)
  }
  onRunComplete(contexts, results) {
    console.log('>>>>>>> onRunComplete <<<<<<<<')
  }
  onTestStart() {
    console.log('>>>>>>> onTestStart <<<<<<<<')
  }
  onTestResult(a, b, c) {
    console.log('>>>>>>> onTestResult <<<<<<<<', a, b, c)
  }
}

module.exports = MyCustomReporter
