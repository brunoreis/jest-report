import { useOnRunStartSubscription } from './useOnRunStartSubscription'
import { useOnTestStartSubscription } from './useOnTestStartSubscription'
import { useOnTestResultSubscription } from './useOnTestResultSubscription'
// import { useOnRunCompleteSubscription } from './useOnRunCompleteSubscription'

export const useSubscribeTestRunsToReducer = (dispatch) => {
  useBindSubscriptionsToReducer(dispatch)
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
}
