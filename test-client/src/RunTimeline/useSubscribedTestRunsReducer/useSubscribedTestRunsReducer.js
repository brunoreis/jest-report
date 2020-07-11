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

  // const useOnTestResultSubscriptionData = useOnTestResultSubscription()
  // if (useOnTestResultSubscriptionData) {
  //   dispatch({
  //     type: 'onTestResult',
  //     payload: useOnTestResultSubscriptionData,
  //   })
  //   log('useOnTestResultSubscriptionData', useOnTestResultSubscriptionData)
  // }

  // const useOnRunCompleteSubscriptionData = useOnRunCompleteSubscription()
  // if (useOnRunCompleteSubscriptionData) {
  //   log('useOnRunCompleteSubscriptionData', useOnRunCompleteSubscriptionData)
  // }
  // console.log('state', state)
  return state
}

const getTestRun = (state, runId) =>
  state.runs.find((testRun) => testRun.runId === runId)

// const getTest = (state, runId, path) => {
//   const testRun = getTestRun(state, runId)
//   return (
//     testRun &&
//     testRun.testResults.find((testResult) => testResult.path === path)
//   )
// }
