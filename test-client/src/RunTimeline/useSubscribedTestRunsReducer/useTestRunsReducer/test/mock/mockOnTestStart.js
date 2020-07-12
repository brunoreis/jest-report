export const mockOnTestStart = ({
  runId = '_udb4n5zq5',
  duration = 127,
  rootDir = '/Users/dude/jestReports/app',
  path = '/Users/dude/jestReports/app/exampleTests.test.js',
} = {}) => ({
  runId,
  path,
  rootDir,
  duration,
  __typename: 'onTestStartSubscriptionResult',
})
