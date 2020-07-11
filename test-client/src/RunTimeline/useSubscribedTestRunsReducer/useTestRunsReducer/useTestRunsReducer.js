import { useReducer, useMemo } from 'react'
import { reducer } from './reducer'

const initialState = () => ({
  runs: [],
})

export const useTestRunsReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState())

  return {
    state,
    dispatch,
  }
}
