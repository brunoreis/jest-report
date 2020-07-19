import React from 'react'
import { TestRunWrapper } from './TestRunWrapper'
import { Title } from './Title'
import { TestResults } from './TestResults'

export const TestRun = ({ testRun }) => {
  const { runId, rootDir, testPathPattern } = testRun

  return (
    <TestRunWrapper>
      <Title>
        <div>{rootDir}</div>
        <div>{testPathPattern ? `Pattern: ${testPathPattern}` : null}</div>
      </Title>
      <TestResults testResults={testRun.testResults} />
    </TestRunWrapper>
  )
}
