import React from 'react'
import { TestResult } from './TestResult'

export const TestRun = ({ testRun }) => {
  // console.log('testRun', testRun)
  const { runId } = testRun
  return (
    <div>
      Test Run {runId}
      {testRun.testResults.map((testResult) => (
        <TestResult testResult={testResult} />
      ))}
    </div>
  )
}
