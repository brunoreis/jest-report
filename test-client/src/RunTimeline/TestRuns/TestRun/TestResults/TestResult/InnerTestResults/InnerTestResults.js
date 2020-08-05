import React from 'react'
import { InnerTestResultsWrapper } from './InnerTestResultsWrapper'
import { InnerTestResult } from './InnerTestResult'
import { Describe } from './Describe/Describe'

const mapResults = (innerTestResult, level) => {
  return innerTestResult.type === 'describe' ? (
    <Describe
      key={innerTestResult.title}
      title={innerTestResult.title}
      level={level}
      status={innerTestResult.status}
      innerTestResults={innerTestResult.innerTestResults}
    />
  ) : (
    <InnerTestResult
      key={innerTestResult.title}
      innerTestResult={innerTestResult}
    />
  )
}
export const InnerTestResults = ({ innerTestResults, level = 0 }) => {
  return (
    <InnerTestResultsWrapper level={level}>
      {innerTestResults.map((r) => mapResults(r, level))}
    </InnerTestResultsWrapper>
  )
}
