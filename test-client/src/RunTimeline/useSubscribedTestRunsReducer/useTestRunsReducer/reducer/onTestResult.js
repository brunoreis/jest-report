import { getRun } from './helpers/getRun'
import { initRun } from './helpers/initRun'
import { initInnerTestResult } from './helpers/initInnerTestResult'
import { getTestResult } from './helpers/getTestResult'

export const onTestResult = (draftState, { payload }) => {
  const run = getRun(draftState, payload.runId)
  const testResult = getTestResult(run, payload.path)
  testResult.running = false

  payload.testResults.forEach((innerTestResult) => {
    const newInnerTestResult = initInnerTestResult(innerTestResult)
    testResult.innerTestResults.push(newInnerTestResult)
  })
}
