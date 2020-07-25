import React from 'react'
import debounceRender from 'react-debounce-render'

import { InnerTestResultWrapper } from './InnerTestResultWrapper'
import { Emoji } from './Emoji'

const InnerResult = ({ innerTestResult }) => {
  const { fullName, status } = innerTestResult

  return (
    <InnerTestResultWrapper status={status}>
      <Emoji status={status} />
      {fullName}
    </InnerTestResultWrapper>
  )
}

export const InnerTestResult = debounceRender(InnerResult)
