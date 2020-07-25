import React, { useContext } from 'react'
import { TestRunsReducerContext } from './_uses'
import { TestResultsWrapper } from './TestResultsWrapper'
import { TestResult } from './TestResult'

export const TestResults = ({ runId }) => {
  const { getTestResultPaths } = useContext(TestRunsReducerContext)
  const testResultPaths = getTestResultPaths(runId)

  return (
    <TestResultsWrapper>
      {testResultPaths.map((path) => (
        <TestResult runId={runId} path={path} />
      ))}
    </TestResultsWrapper>
  )
}
