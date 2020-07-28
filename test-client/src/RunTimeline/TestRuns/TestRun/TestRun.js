import React, { useContext, useCallback } from 'react'
import { TestRunWrapper } from './TestRunWrapper'
import { Title } from './Title'
import { TestResults } from './TestResults'
import { TestRunsReducerContext } from './_uses'

export const TestRun = ({ runId }) => {
  const { getTestRun, deleteRun } = useContext(TestRunsReducerContext)
  const { rootDir, testPathPattern } = getTestRun(runId)
  const deleteThisRun = useCallback(() => deleteRun(runId), [runId, deleteRun])

  return (
    <TestRunWrapper>
      <Title>
        <div>{rootDir}</div>
        <div>
          {testPathPattern ? `Pattern: ${testPathPattern}` : null}
          <button onClick={deleteThisRun}>x</button>
        </div>
      </Title>
      <TestResults runId={runId} />
    </TestRunWrapper>
  )
}
