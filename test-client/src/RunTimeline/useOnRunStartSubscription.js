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

export const useOnRunStartSubscription = () => {
  return useSubscription(USE_ON_RUN_START_SUBSCRIPTION)
}
