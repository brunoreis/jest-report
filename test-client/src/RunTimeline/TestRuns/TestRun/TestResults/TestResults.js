import React from 'react'
import { TestResultsWrapper } from './TestResultsWrapper'
import { TestResult } from './TestResult'

export const TestResults = ({ testResults }) => {
  return (
    <TestResultsWrapper>
      {testResults.map((testResult) => (
        <TestResult testResult={testResult} />
      ))}
    </TestResultsWrapper>
  )
}
