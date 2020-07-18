import { useOnRunStartSubscription } from './useOnRunStartSubscription'
import { useOnTestStartSubscription } from './useOnTestStartSubscription'
import { useOnTestResultSubscription } from './useOnTestResultSubscription'
import { useOnRunCompleteSubscription } from './useOnRunCompleteSubscription'

import { useTestRunsReducer } from './useTestRunsReducer'

const debug = true

const log = function () {
  debug && console.log(...arguments)
}

export const useSubscribedTestRunsReducer = () => {
  const { state, dispatch } = useTestRunsReducer()
  useBindSubscriptionsToReducer(dispatch)
  return state
}

const useBindSubscriptionsToReducer = (dispatch) => {
  useOnRunStartSubscription({
    onSubscriptionData: (data) => {
      dispatch({
        type: 'onRunStart',
        payload: data.subscriptionData.data.onRunStartSubscription,
      })
    },
  })

  useOnTestStartSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      dispatch({
        type: 'onTestStart',
        payload: subscriptionData.data.onTestStartSubscription,
      })
    },
  })

  useOnTestResultSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      dispatch({
        type: 'onTestResult',
        payload: subscriptionData.data.onTestResultSubscription,
      })
    },
  })

  // const useOnRunCompleteSubscriptionData = useOnRunCompleteSubscription()
  // if (useOnRunCompleteSubscriptionData) {
  //   log('useOnRunCompleteSubscriptionData', useOnRunCompleteSubscriptionData)
  // }
  // console.log('state', state)
}
