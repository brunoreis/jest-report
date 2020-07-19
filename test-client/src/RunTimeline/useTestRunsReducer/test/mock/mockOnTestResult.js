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
      failureMessage = null,
      location = null,
      numPassingAsserts = 0,
      status = 'passed',
      title = 'First one that is passing',
    } = {}) => ({
      ancestorTitles,
      duration,
      failureMessage,
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

// const p = {
//   testResults: [
//     {
//       ancestorTitles: ['Example Tests', 'Successfull and nested'],
//       duration: 2,
//       failureMessage: null,
//       fullName: 'Example Tests Successfull and nested passes',
//       location: null,
//       numPassingAsserts: 0,
//       status: 'passed',
//       title: 'passes',
//       __typename: 'TestResult',
//     },
//     {
//       ancestorTitles: ['Example Tests'],
//       duration: 3,
//       failureMessage: null,
//       fullName: 'Example Tests failing test',
//       location: null,
//       numPassingAsserts: 0,
//       status: 'failed',
//       title: 'failing test',
//       __typename: 'TestResult',
//     },
//     {
//       ancestorTitles: ['Example Tests'],
//       duration: 0,
//       failureMessage: null,
//       fullName: 'Example Tests skipped test',
//       location: null,
//       numPassingAsserts: 0,
//       status: 'pending',
//       title: 'skipped test',
//       __typename: 'TestResult',
//     },
//   ],
// }