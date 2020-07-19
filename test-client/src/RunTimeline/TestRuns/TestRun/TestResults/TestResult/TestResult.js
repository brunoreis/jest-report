import React, { useContext } from 'react'
// import debounceRender from 'react-debounce-render'
import { TestRunsReducerContext } from './_uses'
import { Title } from './Title'
import { TestResultWrapper } from './TestResultWrapper'
import { InnerTestResults } from './InnerTestResults'
import { TestResultTitle } from './TestResultTitle'

export const TestResult = ({ testResult }) => {
  const path = testResult.path
  const runId = testResult.runId

  const { getTestRun } = useContext(TestRunsReducerContext)
  const { rootDir } = getTestRun(runId)

  return (
    <TestResultWrapper>
      <Title>
        <TestResultTitle path={path} rootDir={rootDir} />
        <div>{testResult.duration}ms</div>
      </Title>
      <InnerTestResults innerTestResults={testResult.innerTestResults} />
    </TestResultWrapper>
  )
}

// export const TestResult = debounceRender(Result)
