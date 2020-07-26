import React, { useState, useCallback } from 'react'
import { InnerTestResults } from '../InnerTestResults'
import { DescribeTitle } from './DescribeTitle'
import { Elipsis } from './_uses'

export const Describe = ({ title, level, innerTestResults }) => {
  const [open, setOpen] = useState(true)
  const toggle = useCallback(() => setOpen(!open), [open, setOpen])
  return (
    <>
      <DescribeTitle onClick={toggle}>
        {title}
        {!open && <Elipsis>...</Elipsis>}
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
