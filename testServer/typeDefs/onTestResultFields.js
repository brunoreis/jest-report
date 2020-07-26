export const TestResultFields = `
  ancestorTitles: [String!]
  duration: Int!
  failureMessages: [String!]
  fullName: String!
  location: String
  numPassingAsserts: Int!
  status: String!
  title: String!
`

export const onTestResultFields = ({ input = false }) => {
  return `
  runId: ID!
  duration: Int!
  path: String!
  testResults: [${input ? 'TestResultInput' : 'TestResult'}!]
`
}
