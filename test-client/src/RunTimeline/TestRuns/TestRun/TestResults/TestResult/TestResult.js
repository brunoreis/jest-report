import React, { useContext } from 'react'
import { TestRunsReducerContext } from './_uses'
import { Title } from './Title'
import { TestResultWrapper } from './TestResultWrapper'
import { InnerTestResults } from './InnerTestResults'
import { TestResultTitle } from './TestResultTitle/TestResultTitle'

export const TestResult = ({ runId, path }) => {
  const { getTestResult, getTestRun, getNestedInnerTestResult } = useContext(
    TestRunsReducerContext,
  )
  const { rootDir } = getTestRun(runId)
  const testResult = getTestResult(runId, path)
  const nestedInnerTestResults = getNestedInnerTestResult(runId, path)

  return (
    <TestResultWrapper>
      <Title>
        <TestResultTitle path={path} rootDir={rootDir} />
        <div>{testResult.duration}ms</div>
      </Title>
      <InnerTestResults innerTestResults={nestedInnerTestResults} />
    </TestResultWrapper>
  )
}
