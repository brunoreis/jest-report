import { useReducer, useMemo, useCallback } from 'react'
import { reducer } from './reducer'

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
  } // use might need to useCallback here. I removed it because it was hiding errors under a "diff num of hooks called" error

  return {
    state,
    dispatch,
    onRunStart: buildAction('onRunStart'),
    onTestStart: buildAction('onTestStart'),
    onTestResult: buildAction('onTestResult'),
    getTestRun: (runId) => state.runs.find((run) => run.runId === runId),
  }
}
