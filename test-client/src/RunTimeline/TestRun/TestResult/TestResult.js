import React from 'react'
import debounceRender from 'react-debounce-render'

const TR = ({ testResult }) => {
  console.log('testResult', testResult)
  return (
    <div>
      test result: {testResult.path}
      <br />
      duration: {testResult.duration}
    </div>
  )
}

export const TestResult = debounceRender(TR)
