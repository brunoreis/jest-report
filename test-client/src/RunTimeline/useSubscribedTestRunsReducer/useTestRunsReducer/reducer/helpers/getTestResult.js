export const getTestResult = (run, path) =>
  run.testResults.find((result) => result.path === path)
