import { getRun } from './helpers/getRun'
import { getTestResult } from './helpers/getTestResult'
import { initTestResult } from './helpers/initTestResult'

export const onTestStart = (
  draftState,
  { payload: { runId, path, duration } },
) => {
  const testRun = getRun(draftState, runId)
  const testResult = getTestResult(testRun, path)
  testResult
    ? (testResult.running = true)
    : testRun.testResults.push(initTestResult({ runId, path, duration }))
}
