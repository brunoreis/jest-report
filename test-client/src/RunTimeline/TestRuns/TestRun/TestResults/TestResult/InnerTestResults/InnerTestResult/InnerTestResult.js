import React from 'react'
import debounceRender from 'react-debounce-render'
import { InnerTestResultWrapper } from './InnerTestResultWrapper'

const InnerResult = ({ innerTestResult }) => {
  const { title, status } = innerTestResult

  return (
    <InnerTestResultWrapper status={status}>{title}</InnerTestResultWrapper>
  )
}

export const InnerTestResult = debounceRender(InnerResult)
