import { useReducer, useMemo, useCallback } from 'react'
import { reducer } from './reducer'

const initialState = () => ({
  runs: [],
})

export const useTestRunsReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState())

  const buildAction = (type, payload) =>
    useCallback(
      (payload) => {
        dispatch({
          type,
          payload,
        })
      },
      [dispatch],
    )

  return {
    state,
    dispatch,
    onRunStart: buildAction('onRunStart'),
    onTestStart: buildAction('onTestStart'),
  }
}
