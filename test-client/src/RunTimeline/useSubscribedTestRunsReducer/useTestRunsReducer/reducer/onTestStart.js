import { getRun } from './helpers/getRun'
import { getTestResult } from './helpers/getTestResult'
import { initTestResult } from './helpers/initTestResult'

export const onTestStart = (
  draftState,
  { payload: { runId, path, duration } },
) => {
  const run = getRun(draftState, runId)
  const testResult = getTestResult(run, path)
  testResult
    ? (testResult.running = true)
    : run.testResults.push(initTestResult({ runId, path, duration }))
}
