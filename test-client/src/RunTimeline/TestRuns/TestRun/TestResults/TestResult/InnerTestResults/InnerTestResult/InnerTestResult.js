import React, { useState } from 'react'
import { InnerTestTitleWrapper } from './InnerTestTitleWrapper'
import { ErrorMessage } from './ErrorMessage'
import { Elipsis } from './_uses'

export const InnerTestResult = ({ innerTestResult }) => {
  const { title, status, failureMessages, fullName } = innerTestResult
  const [open, setOpen] = useState(true)

  return (
    <div key={fullName}>
      <InnerTestTitleWrapper onClick={() => setOpen(!open)} status={status}>
        ∙ {title} {!open && <Elipsis>...</Elipsis>}
      </InnerTestTitleWrapper>
      {open &&
        failureMessages.map((message) => <ErrorMessage message={message} />)}
    </div>
  )
}
