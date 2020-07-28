export const mockOnRunStart = ({
  runId = '_t9iregrtd',
  estimatedTime = 1,
  testPathPattern = '',
  numTotalTestSuites = 4,
  rootDir = '/app/root/dir',
} = {}) => ({
  runId,
  rootDir,
  estimatedTime,
  testPathPattern,
  numTotalTestSuites,
  __typename: 'onRunStartSubscriptionResult',
})
