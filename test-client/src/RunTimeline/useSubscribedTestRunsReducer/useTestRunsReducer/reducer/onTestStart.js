export const onTestStart = (state, action) => {
  console.log('onTestStart', action)
  return {
    ...state,
    runs: state.runs.map((testRun) => {
      if (testRun.runId != action.payload.runId) return testRun

      return {
        ...testRun,
        testResults: [...testRun.testResults, action.payload],
      }
    }),
  }
}
