import React from 'react'
import { InnerTestResultsWrapper } from './InnerTestResultsWrapper'
import { InnerTestResult } from './InnerTestResult'

const mapResults = (innerTestResult, level) => {
  return innerTestResult.type === 'describe' ? (
    <>
      <div>{innerTestResult.title}</div>
      <InnerTestResults
        level={level + 1}
        innerTestResults={innerTestResult.innerTestResults}
      />
    </>
  ) : (
    <InnerTestResult innerTestResult={innerTestResult} />
  )
}
export const InnerTestResults = ({ innerTestResults, level = 0 }) => {
  return (
    <InnerTestResultsWrapper level={level}>
      {innerTestResults.map((r) => mapResults(r, level))}
    </InnerTestResultsWrapper>
  )
}
