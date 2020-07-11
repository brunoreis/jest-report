import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const USE_ON_RUN_START_SUBSCRIPTION = gql`
  subscription {
    onRunStartSubscription {
      runId
      estimatedTime
      testPathPattern
      numTotalTestSuites
    }
  }
`

export const useOnRunStartSubscription = (options) => {
  const subscriptionResponse = useSubscription(
    USE_ON_RUN_START_SUBSCRIPTION,
    options,
  )
  if (subscriptionResponse.error) {
    console.error(subscriptionResponse.error)
  }
}
