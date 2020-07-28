import produce from 'immer'

import { getRunIndex } from './helpers/getRunIndex'
import { getTestResultIndex } from './helpers/getTestResultIndex'
import { initTestResult } from './helpers/initTestResult'

export const onTestStart = (state, { payload: { runId, path, duration } }) => {
  const testRunIndex = getRunIndex(state, runId)

  if (testRunIndex === -1) return state

  const testResultIndex = getTestResultIndex(state, runId, path)

  return produce(state, (draftState) => {
    const testResults = draftState.runs[testRunIndex].testResults
    testResultIndex === -1
      ? testResults.push(initTestResult({ runId, path, duration }))
      : (testResults[testResultIndex].running = true)
  })
}
