export const initRun = ({
  runId,
  rootDir,
  estimatedTime,
  testPathPattern,
  numTotalTestSuites,
}) => {
  return {
    runId,
    rootDir,
    estimatedTime,
    testPathPattern,
    numTotalTestSuites,
    testResults: [],
  }
}
