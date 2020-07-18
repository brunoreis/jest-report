import React from 'react'
import debounceRender from 'react-debounce-render'
import { Title } from './Title'
import { Left } from './Left'
import { Right } from './Right'
import { TestResultWrapper } from './TestResultWrapper'
import { InnerTestResults } from './InnerTestResults'

const Result = ({ testResult }) => {
  console.log('testResult', testResult)
  return (
    <TestResultWrapper>
      <Title>
        <Left>{testResult.path}</Left>
        <Right>{testResult.duration}ms</Right>
      </Title>
      <InnerTestResults innerTestResults={testResult.innerTestResults} />
    </TestResultWrapper>
  )
}

export const TestResult = debounceRender(Result)
