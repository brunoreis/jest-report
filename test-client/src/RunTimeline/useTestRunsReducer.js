import { useReducer, useMemo } from 'react'
import { useOnRunStartSubscription } from './useOnRunStartSubscription'
import { useOnTestStartSubscription } from './useOnTestStartSubscription'

export const useTestRunsReducer = () => {
  const [state, dispatch] = useReducer(reducer, [])
  console.log('useTestRunsReducer -> state', state)

  const useOnRunStartSubscriptionData = useOnRunStartSubscription()
  if (useOnRunStartSubscriptionData) {
    const { runId } = useOnRunStartSubscriptionData
    if (!getTestRun(state, runId)) {
      dispatch({
        type: 'onRunStart',
        payload: useOnRunStartSubscriptionData,
      })
    }
  }

  const useOnTestStartSubscriptionData = useOnTestStartSubscription()
  if (useOnTestStartSubscriptionData) {
    const { runId, path } = useOnTestStartSubscriptionData
    if (!getTest(state, runId, path)) {
      dispatch({
        type: 'onTestStart',
        payload: useOnTestStartSubscriptionData,
      })
    }
  }

  // return useMemo(
  //   () => ({
  //     testRuns: {},
  //   }),
  //   [3],
  // )
  return { testRuns: 2 }
}

const getTestRun = (state, runId) =>
  state.find((testRun) => testRun.runId === runId)

const getTest = (state, runId, path) => {
  const testRun = getTestRun(state, runId)
  return (
    testRun &&
    testRun.testResults.find((testResult) => testResult.path === path)
  )
}

const reducer = (state, action) => {
  const runId = action.payload.runId
  switch (action.type) {
    case 'onRunStart':
      // console.log(' :: onRunStart')
      if (
        state.find((run) => {
          console.log('find', run, runId)
          return run.runId == runId
        })
      ) {
        console.warn(
          'Duplicated subscriptions (strict mode?): https://github.com/apollographql/apollo-client/issues/6037',
        )
        return state
      }
      const newState = [...state, { ...action.payload, testResults: [] }]
      return newState
    case 'onTestStart':
      return state.map((testRun) => {
        if (testRun.runId != action.payload.runId) return testRun

        return {
          ...testRun,
          testResults: [...testRun.testResults, action.payload],
        }
      })
    default:
      throw new Error()
  }
}
