import React from 'react'
import { useSubscribedTestRunsReducer } from './uses'
import { TestRunWrapper } from './TestRunWrapper'
import { Title } from './Title'
import { Left } from './Left'
import { Right } from './Right'
import { TestResults } from './TestResults'

export const TestRun = ({ testRun }) => {
  // const { getTestRun } = useSubscribedTestRunsReducer()

  const { runId, rootDir, testPathPattern } = testRun

  return (
    <TestRunWrapper>
      <Title>
        <Left>{rootDir}</Left>
        <Right>{testPathPattern ? `Pattern: ${testPathPattern}` : null}</Right>
      </Title>
      <TestResults testResults={testRun.testResults} />
    </TestRunWrapper>
  )
}
