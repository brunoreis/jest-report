import React from 'react'
import { useSubscribedTestRunsReducer } from './uses'
import { TestRun } from './TestRun'

export const TestRuns = () => {
  const { runs } = useSubscribedTestRunsReducer()
  return (
    <div>
      {runs.map((testRun, key) => (
        <TestRun key={key} testRun={testRun} />
      ))}
    </div>
  )
}
