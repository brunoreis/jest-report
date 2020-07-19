import React, { useContext } from 'react'
import { TestRuns } from './TestRuns'
import { Title } from './Title'
import { useSubscribeTestRunsToReducer } from './useSubscribeTestRunsToReducer/useSubscribeTestRunsToReducer'
import { useTestRunsReducer } from './useTestRunsReducer/useTestRunsReducer'
import { TestRunsReducerContext } from './TestRunsReducerContext'

export const RunTimeline = () => {
  const testRunsReducer = useTestRunsReducer()
  useSubscribeTestRunsToReducer(testRunsReducer.dispatch)
  return (
    <TestRunsReducerContext.Provider value={testRunsReducer}>
      <Title> Test Runs </Title>
      <TestRuns />
    </TestRunsReducerContext.Provider>
  )
}
