import React from 'react'
import { useOnRunStartSubscription } from './useOnRunStartSubscription'

export const RunTimeline = () => {
  const x = useOnRunStartSubscription()
  if (x.data) {
    console.log(x.data.onRunStartSubscription)
  }
  return <div>RunTimeline</div>
}
