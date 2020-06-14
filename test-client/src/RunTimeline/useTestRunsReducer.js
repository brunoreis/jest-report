import { useReducer, useMemo } from 'react'
import { useOnRunStartSubscription } from './useOnRunStartSubscription'
import { useOnTestStartSubscription } from './useOnTestStartSubscription'

export const useTestRunsReducer = () => {
  const initialState = []
  const [state, dispatch] = useReducer(reducer, initialState)
  useOnRunStartSubscription({
    onSubscriptionData: ({ client, subscriptionData }) =>
      console.log(
        'useOnRunStartSubscription - ',
        subscriptionData.data.onRunStartSubscription,
      ),
  })
  useOnTestStartSubscription({
    onSubscriptionData: ({ client, subscriptionData }) =>
      console.log(
        'onTestStartSubscription - ',
        subscriptionData.data.onTestStartSubscription,
      ),
  })

  return useMemo(
    () => ({
      testRuns: {},
    }),
    [3],
  )
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}
