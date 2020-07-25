import React, { useContext } from 'react'
import { TestRun } from './TestRun'
import { TestRunsReducerContext } from './_uses'

export const TestRuns = () => {
  const { getRunIds } = useContext(TestRunsReducerContext)

  return (
    <div>
      {getRunIds().map((runId) => (
        <TestRun key={runId} runId={runId} />
      ))}
    </div>
  )
}
