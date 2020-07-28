import { useReducer, useMemo, useCallback } from 'react'
import { reducer } from './reducer'
import { nestInnerTestResults } from './nestInnerTestResults/nestInnerTestResults'

const initialState = () => ({
  runs: [],
})

export const useTestRunsReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState())

  const buildAction = (type) => (payload) => {
    dispatch({
      type,
      payload,
    })
  }

  const getTestRun = useCallback(
    (runId) => state.runs.find((run) => run.runId === runId),
    [state.runs],
  )

  const getRunIds = useCallback(() => state.runs.map((run) => run.runId), [
    state.runs,
  ])

  const getTestResultPaths = (runId) =>
    getTestRun(runId).testResults.map((tr) => tr.path)

  const getTestResult = (runId, path) =>
    getTestRun(runId).testResults.find((tr) => tr.path === path)

  const getNestedInnerTestResult = (runId, path) => {
    const testResult = getTestResult(runId, path)
    return nestInnerTestResults(testResult.innerTestResults)
  }

  return {
    state,
    dispatch,
    onRunStart: buildAction('onRunStart'),
    onTestStart: buildAction('onTestStart'),
    onTestResult: buildAction('onTestResult'),
    getTestRun,
    getRunIds,
    getTestResultPaths,
    getTestResult,
    getNestedInnerTestResult,
    deleteRun: buildAction('deleteRun'),
  }
}
