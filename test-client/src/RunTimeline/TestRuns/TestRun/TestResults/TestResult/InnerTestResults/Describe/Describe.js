import React, { useState, useCallback } from 'react'
import { InnerTestResults } from '../InnerTestResults'
import { DescribeTitle } from './DescribeTitle'
import { Elipsis } from './_uses'
import { NumTestsWrapper } from './NumTestsWrapper.js'

export const Describe = ({ title, level, innerTestResults, status }) => {
  const { numFailed, numPassed, numTests, numPending } = status
  const [open, setOpen] = useState(true)
  const toggle = useCallback(() => setOpen(!open), [open, setOpen])
  const finalStatus =
    numFailed > 0 ? 'error' : numPassed > 0 ? 'success' : 'skipped'
  return (
    <>
      <DescribeTitle onClick={toggle} finalStatus={finalStatus}>
        {title}
        {numFailed ? (
          <NumTestsWrapper failed>{numFailed}</NumTestsWrapper>
        ) : null}
        {numPassed ? (
          <NumTestsWrapper passed>{numPassed}</NumTestsWrapper>
        ) : null}
        {numPending ? (
          <NumTestsWrapper pending>{numPending}</NumTestsWrapper>
        ) : null}
      </DescribeTitle>
      {open && (
        <InnerTestResults
          level={level + 1}
          innerTestResults={innerTestResults}
        />
      )}
    </>
  )
}
