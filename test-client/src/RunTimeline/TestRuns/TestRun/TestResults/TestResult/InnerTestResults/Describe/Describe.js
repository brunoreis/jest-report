import React, { useState, useCallback } from 'react'
import { InnerTestResults } from '../InnerTestResults'
import { DescribeTitle, Title, Totals } from './Describe.styles.js'
import { Elipsis } from './_uses'
import { NumTests } from './NumTests'

export const Describe = ({ title, level, innerTestResults, status }) => {
  const { numFailed, numPassed, numTests, numPending } = status
  const [open, setOpen] = useState(true)
  const toggle = useCallback(() => setOpen(!open), [open, setOpen])
  const finalStatus =
    numFailed > 0 ? 'error' : numPassed > 0 ? 'success' : 'skipped'
  return (
    <>
      <DescribeTitle onClick={toggle} finalStatus={finalStatus} open={open}>
        <Title>{title}</Title>
        <Totals>
          <NumTests failed>{numFailed}</NumTests>
          <NumTests pending>{numPending}</NumTests>
          <NumTests total>{numTests}</NumTests>
        </Totals>
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
