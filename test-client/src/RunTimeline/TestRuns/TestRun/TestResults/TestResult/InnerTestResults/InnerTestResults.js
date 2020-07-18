import React from 'react'
import { InnerTestResultsWrapper } from './InnerTestResultsWrapper'
import { InnerTestResult } from './InnerTestResult'

export const InnerTestResults = ({ innerTestResults }) => {
  return (
    <InnerTestResultsWrapper>
      {innerTestResults.map((innerTestResult) => (
        <InnerTestResult innerTestResult={innerTestResult} />
      ))}
    </InnerTestResultsWrapper>
  )
}
