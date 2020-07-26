import React, { useState } from 'react'
import debounceRender from 'react-debounce-render'
import { InnerTestTitleWrapper } from './InnerTestTitleWrapper'
import { ErrorMessage } from './ErrorMessage'
import { Elipsis } from './_uses'

const InnerResult = ({ innerTestResult }) => {
  const { title, status, failureMessages } = innerTestResult
  const [open, setOpen] = useState(true)

  return (
    <>
      <InnerTestTitleWrapper onClick={() => setOpen(!open)} status={status}>
        {title} {!open && <Elipsis>...</Elipsis>}
      </InnerTestTitleWrapper>
      {open &&
        failureMessages.map((message) => <ErrorMessage message={message} />)}
    </>
  )
}

export const InnerTestResult = debounceRender(InnerResult)
