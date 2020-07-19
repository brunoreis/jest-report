import React, { useContext } from 'react'
import { TestRun } from './TestRun'
import { TestRunsReducerContext } from './uses'

export const TestRuns = () => {
  const testRunsReducer = useContext(TestRunsReducerContext)
  const runs = testRunsReducer.state.runs
  return (
    <div>
      {runs.map((testRun, key) => (
        <TestRun key={key} testRun={testRun} />
      ))}
    </div>
  )
}
