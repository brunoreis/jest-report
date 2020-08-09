import produce from 'immer'

import { getRunIndex } from './helpers/getRunIndex'
import { initInnerTestResult } from './helpers/initInnerTestResult'
import { getTestResultIndex } from './helpers/getTestResultIndex'

export const onTestResult = (
  state,
  { payload: { runId, path, testResults } },
) => {
  const runIndex = getRunIndex(state, runId)
  if (runIndex === -1) return state

  const testResultIndex = getTestResultIndex(state, runId, path)

  if (testResultIndex === -1) return state

  return produce(state, (draftState) => {
    const testResult = draftState.runs[runIndex].testResults[testResultIndex]
    testResult.running = false
    testResults.forEach((innerTestResult) => {
      const newInnerTestResult = initInnerTestResult(innerTestResult)
      testResult.innerTestResults.push(newInnerTestResult)
    })
  })
}
