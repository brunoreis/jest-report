import React, { useContext } from 'react'
import { TestRunWrapper } from './TestRunWrapper'
import { Title } from './Title'
import { TestResults } from './TestResults'
import { TestRunsReducerContext } from './_uses'

export const TestRun = ({ runId }) => {
  const { getTestRun } = useContext(TestRunsReducerContext)
  const { rootDir, testPathPattern } = getTestRun(runId)

  return (
    <TestRunWrapper>
      <Title>
        <div>{rootDir}</div>
        <div>{testPathPattern ? `Pattern: ${testPathPattern}` : null}</div>
      </Title>
      <TestResults runId={runId} />
    </TestRunWrapper>
  )
}
