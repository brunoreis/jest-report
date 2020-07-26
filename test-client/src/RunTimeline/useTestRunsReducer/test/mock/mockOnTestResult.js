export const mockOnTestResult = ({
  runId = '_t9iregrtd',
  duration = 588,
  path = '/Users/dude/jestReports/app/exampleTests.test.js',
  testResults = [],
} = {}) => ({
  runId,
  duration,
  path,
  testResults: testResults.map(
    ({
      ancestorTitles = ['Mock Tests'],
      duration = 2,
      failureMessages = [],
      location = null,
      numPassingAsserts = 0,
      status = 'passed',
      title = 'First one that is passing',
    } = {}) => ({
      ancestorTitles,
      duration,
      failureMessages,
      fullName: `${ancestorTitles.join(' ')} ${title}`,
      location,
      numPassingAsserts,
      status,
      title,
      __typename: 'TestResult',
    }),
  ),
  __typename: 'onTestResultSubscriptionResult',
})
