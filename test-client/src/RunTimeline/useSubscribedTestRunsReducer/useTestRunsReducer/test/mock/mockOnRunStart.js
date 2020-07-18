export const mockOnRunStart = ({
  runId = '_t9iregrtd',
  estimatedTime = 1,
  testPathPattern = '',
  numTotalTestSuites = 4,
} = {}) => ({
  runId,
  rootDir: '/app/root/dir',
  estimatedTime,
  testPathPattern,
  numTotalTestSuites,
  __typename: 'onRunStartSubscriptionResult',
})
