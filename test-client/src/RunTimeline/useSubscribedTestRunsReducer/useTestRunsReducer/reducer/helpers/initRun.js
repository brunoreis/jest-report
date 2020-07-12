export const initRun = ({
  runId,
  estimatedTime,
  testPathPattern,
  numTotalTestSuites,
}) => {
  return {
    runId,
    estimatedTime,
    testPathPattern,
    numTotalTestSuites,
    testResults: [],
  }
}
