import React, { useContext, useState } from 'react'
import Spinner from 'reactjs-simple-spinner'

import { TestRunsReducerContext } from './_uses'
import { Title } from './Title'
import { Elipsis } from './Elipsis'
import { TestResultWrapper } from './TestResultWrapper'
import { InnerTestResults } from './InnerTestResults'
import { TestFile } from './TestFile'
import { Path } from './Path'

export const TestResult = ({ runId, path }) => {
  const { getTestResult, getTestRun, getNestedInnerTestResult } = useContext(
    TestRunsReducerContext,
  )
  const [open, setOpen] = useState(true)
  const { rootDir } = getTestRun(runId)
  const testResult = getTestResult(runId, path)

  const nestedInnerTestResults = getNestedInnerTestResult(runId, path)

  const nameWithoutPath = path.replace(rootDir, '')
  const parts = nameWithoutPath.split('/')
  const fileName = parts.pop()
  const subpath = parts.join('/') + '/'

  return (
    <TestResultWrapper>
      <Title onClick={() => setOpen(!open)}>
        <TestFile>
          {fileName}
          {!open && <Elipsis>...</Elipsis>}
        </TestFile>
        <div>{testResult.running && <Spinner size="small" />}</div>
        <div>
          <Path>{subpath}</Path>
          {testResult.duration}ms
        </div>
      </Title>
      {open && <InnerTestResults innerTestResults={nestedInnerTestResults} />}
    </TestResultWrapper>
  )
}
