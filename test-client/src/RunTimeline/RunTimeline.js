import React from 'react'
import { useTestRunsReducer } from './useTestRunsReducer'

export const RunTimeline = () => {
  const { testRuns } = useTestRunsReducer()
  return <div>RunTimeline</div>
}
