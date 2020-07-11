import React from 'react'
import { useSubscribedTestRunsReducer } from './useSubscribedTestRunsReducer'
import { TestRun } from './TestRun'

// const testRuns = [
//   {
//     runId: '_lpx2s62j9',
//     estimatedTime: 1,
//     testPathPattern: '',
//     numTotalTestSuites: 4,
//     __typename: 'onRunStartSubscriptionResult',
//     testResults: [
//       {
//         runId: '_lpx2s62j9',
//         path: '/Users/scalablepath/jestReports/app/exampleTests.test.js',
//         rootDir: '/Users/scalablepath/jestReports/app',
//         duration: 587,
//         __typename: 'onTestStartSubscriptionResult',
//       },
//       {
//         runId: '_lpx2s62j9',
//         path: '/Users/scalablepath/jestReports/app/sum/sum.test.js',
//         rootDir: '/Users/scalablepath/jestReports/app',
//         duration: 182,
//         __typename: 'onTestStartSubscriptionResult',
//       },
//       {
//         runId: '_lpx2s62j9',
//         path: '/Users/scalablepath/jestReports/app/sumAndSubstract.test.js',
//         rootDir: '/Users/scalablepath/jestReports/app',
//         duration: 150,
//         __typename: 'onTestStartSubscriptionResult',
//       },
//       {
//         runId: '_lpx2s62j9',
//         path: '/Users/scalablepath/jestReports/app/substract/substract.test.js',
//         rootDir: '/Users/scalablepath/jestReports/app',
//         duration: 139,
//         __typename: 'onTestStartSubscriptionResult',
//       },
//     ],
//   },
// ]

export const RunTimeline = () => {
  const { runs } = useSubscribedTestRunsReducer()
  // console.log('runs...', runs)
  return (
    <>
      <div> Run Timeline </div>
      {runs.map((testRun, key) => (
        <TestRun key={key} testRun={testRun} />
      ))}
    </>
  )
}
