import React from 'react'
import debounceRender from 'react-debounce-render'
import { Title } from './Title'
import { Left } from './Left'
import { Right } from './Right'
import { InnerTestResultWrapper } from './InnerTestResultWrapper'

const InnerResult = ({ innerTestResult }) => {
  const { fullName, status } = innerTestResult

  return (
    <InnerTestResultWrapper status={status}>
      <Title>
        <Left>{fullName}</Left>
        <Right>{status}</Right>
      </Title>
    </InnerTestResultWrapper>
  )
}

export const InnerTestResult = debounceRender(InnerResult)
